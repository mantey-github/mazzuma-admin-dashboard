import { AuthActionTypes, AuthToken, PROCESSING_AUTH, SET_AUTH_TOKEN } from './types'
import axios, { AxiosResponse } from 'axios'
import env from '../../../utils/env'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import * as H from 'history'
import apigateway from '../../../utils/apigateway'
import { transformRequest, transformResponse } from '../../../utils/request'
import { setCookie } from '../../../utils/setCookie'
import urlPaths from '../../../utils/urlPaths'
import Cookies from 'js-cookie'
import { isEmpty } from 'ramda'

axios.defaults.baseURL = env('MAZZUMA_ADMIN_API_URL')

axios.defaults.headers.common['Accept'] = 'application/json'

export const processAuth = (isAuthenticating: boolean): AuthActionTypes => {
  return {
    type: PROCESSING_AUTH,
    payload: isAuthenticating,
  }
}

export const setAuthToken = (token?: AuthToken): AuthActionTypes => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token,
  }
}

export const signIn = (
  username: string,
  password: string,
  history: H.History,
  destinationPath: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(processAuth(true))
    try {
      const response = (await apigateway.post('/login', {
        username: username,
        password: password,
      })) as { message: string; status: boolean; token: string }

      dispatch(processAuth(false))

      if (!response.status) {
        alert(response.message)
        return
      }

      const token = {
        token: response.token,
      }

      dispatch(setAuthToken(token))

      await setCookie('_mazzuma_admin_tokid', JSON.stringify(token))

      if (!isEmpty(destinationPath)) {
        history.replace(destinationPath)
        return
      }

      history.replace(urlPaths.DASHBOARD_URL_PATH, token)
    } catch (error) {
      dispatch(processAuth(false))
      alert(error.message)
    }
  }
}

export const signOut = (history: H.History): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setAuthToken(undefined))
    Cookies.remove('_mazzuma_admin_tokid')
    history.replace(urlPaths.SIGNIN_URL_PATH)
    window.location.reload()
  }
}
