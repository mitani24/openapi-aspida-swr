/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_petId@number'
// prettier-ignore
import { Methods as Methods2 } from './_petId@number/uploadImage'
// prettier-ignore
import { Methods as Methods3 } from './findByStatus'
// prettier-ignore
import { Methods as Methods4 } from './findByTags'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '/api/v3' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pet'
  const PATH1 = '/uploadImage'
  const PATH2 = '/pet/findByStatus'
  const PATH3 = '/pet/findByTags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _petId: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        uploadImage: {
          /**
           * @returns successful operation
           */
          post: (option: { body: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns successful operation
           */
          $post: (option: { body: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods2['post']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Returns a single pet
         * @returns successful operation
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Returns a single pet
         * @returns successful operation
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        post: (option: { query: Methods1['post']['query'], config?: T }) =>
          fetch(prefix, prefix0, POST, option).send(),
        $post: (option: { query: Methods1['post']['query'], config?: T }) =>
          fetch(prefix, prefix0, POST, option).send().then(r => r.body),
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods1['post']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    findByStatus: {
      /**
       * Multiple status values can be provided with comma separated strings
       * @returns successful operation
       */
      get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Multiple status values can be provided with comma separated strings
       * @returns successful operation
       */
      $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    findByTags: {
      /**
       * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
       * @returns successful operation
       */
      get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
       * @returns successful operation
       */
      $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * Update an existing pet by Id
     * @param option.body - Update an existent pet in the store
     * @returns Successful operation
     */
    put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json(),
    /**
     * Update an existing pet by Id
     * @param option.body - Update an existent pet in the store
     * @returns Successful operation
     */
    $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option, 'URLSearchParams').json().then(r => r.body),
    /**
     * Add a new pet to the store
     * @param option.body - Create a new pet in the store
     * @returns Successful operation
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    /**
     * Add a new pet to the store
     * @param option.body - Create a new pet in the store
     * @returns Successful operation
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
