/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_username@string'
// prettier-ignore
import { Methods as Methods2 } from './createWithList'
// prettier-ignore
import { Methods as Methods3 } from './login'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '/api/v3' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user'
  const PATH1 = '/user/createWithList'
  const PATH2 = '/user/login'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _username: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns successful operation
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns successful operation
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * This can only be done by the logged in user.
         * @param option.body - Update an existent user in the store
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch(prefix, prefix0, PUT, option, 'URLSearchParams').send(),
        /**
         * This can only be done by the logged in user.
         * @param option.body - Update an existent user in the store
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch(prefix, prefix0, PUT, option, 'URLSearchParams').send().then(r => r.body),
        /**
         * This can only be done by the logged in user.
         */
        delete: (option?: { config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        /**
         * This can only be done by the logged in user.
         */
        $delete: (option?: { config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    createWithList: {
      /**
       * Creates list of users with given input array
       * @returns Successful operation
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Creates list of users with given input array
       * @returns Successful operation
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    login: {
      /**
       * @returns successful operation
       */
      get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, PATH2, GET, option).text(),
      /**
       * @returns successful operation
       */
      $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, PATH2, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * This can only be done by the logged in user.
     * @param option.body - Created user object
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option, 'URLSearchParams').send(),
    /**
     * This can only be done by the logged in user.
     * @param option.body - Created user object
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, POST, option, 'URLSearchParams').send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
