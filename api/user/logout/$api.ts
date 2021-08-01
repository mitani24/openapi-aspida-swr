/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'


// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '/api/v3' : baseURL).replace(/\/$/, '')



  return {

  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
