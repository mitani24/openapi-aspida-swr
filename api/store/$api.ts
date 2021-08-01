/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './inventory'
// prettier-ignore
import { Methods as Methods1 } from './order'
// prettier-ignore
import { Methods as Methods2 } from './order/_orderId@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '/api/v3' : baseURL).replace(/\/$/, '')
  const PATH0 = '/store/inventory'
  const PATH1 = '/store/order'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    inventory: {
      /**
       * Returns a map of status codes to quantities
       * @returns successful operation
       */
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Returns a map of status codes to quantities
       * @returns successful operation
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    order: {
      _orderId: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
           * @returns successful operation
           */
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
           * @returns successful operation
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
           */
          delete: (option?: { config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          /**
           * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
           */
          $delete: (option?: { config?: T }) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Place a new order in the store
       * @returns successful operation
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'URLSearchParams').json(),
      /**
       * Place a new order in the store
       * @returns successful operation
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
