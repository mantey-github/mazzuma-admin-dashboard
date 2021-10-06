import axios, { AxiosTransformer, Method } from 'axios'
import env from './env'
import toSnakeCase from 'snakecase-keys'
import toCamelCase from 'camelcase-keys'
import * as queryString from 'querystring'
import is from 'ramda/src/is'
import { getCookie } from './getCookie'

const objectToQueryString = (obj: any) => {
  const data: any = obj && toSnakeCase(obj, { deep: true })
  return queryString.stringify(data)
}

export const transformRequest = [
  (data: any) => {
    return data && toSnakeCase(data, { deep: true })
  },
  ...(axios.defaults.transformRequest as AxiosTransformer[]),
]

export const transformResponse = [
  ...(axios.defaults.transformResponse as AxiosTransformer[]),
  (data: any) => {
    return data && toCamelCase(data, { deep: true })
  },
]

const defaultRequests = {
  baseURL: env('MAZZUMA_ADMIN_API_URL'),
  headers: () => {
    let AUTH_TOKEN = ''

    const cookie = getCookie('_mazzuma_admin_tokid')

    if (cookie) {
      AUTH_TOKEN = JSON.parse(cookie)?.token
    }

    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(AUTH_TOKEN ? { Authorization: `${AUTH_TOKEN}` } : {}),
    }
  },
  transformRequest,
  transformResponse,
}

export const formatErrors = ({ status, data: { errors, error, message } }: any) => {
  return is(Array, errors)
    ? errors.map((error: any) => ({
        status: status,
        code: error?.code,
        message: error?.description || error?.message,
        details: error?.details || [],
      }))
    : {
        status: status || error?.status,
        message: error || error?.error || message,
      }
}

export default function request(defaultConfigs = {}) {
  const defaults = { ...defaultRequests, ...defaultConfigs }
  const api = (method: Method, url: string, data: any) => {
    return new Promise((resolve, reject) => {
      return axios({
        url: `${defaults.baseURL}${url}`,
        method,
        headers: defaults.headers(),
        params: method === 'get' ? data : undefined,
        data: method !== 'get' ? data : undefined,
        paramsSerializer: objectToQueryString,
        transformRequest: defaults.transformRequest,
        transformResponse: defaults.transformResponse,
      }).then(
        (response) => {
          const data = response?.data?.data || response?.data
          return resolve(data)
        },
        (error) => {
          const status = error?.status || 503
          const message =
            error?.message ||
            'Oops. Something unusual happened at our end. Please contact our support team!'
          const hasErrorsOrError = error?.response && formatErrors(error.response)

          reject(
            hasErrorsOrError || {
              message,
              status,
            }
          )
        }
      )
    })
  }

  return {
    get: (url: string, data?: any) => api('get', url, data),
    post: (url: string, data?: any) => api('post', url, data),
    patch: (url: string, data?: any) => api('patch', url, data),
    put: (url: string, data?: any) => api('put', url, data),
    delete: (url: string, data?: any) => api('delete', url, data),
  }
}
