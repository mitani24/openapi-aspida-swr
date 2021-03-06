/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** This can only be done by the logged in user. */
  post: {
    reqFormat: URLSearchParams
    /** Created user object */
    reqBody: Types.User
  }
}
