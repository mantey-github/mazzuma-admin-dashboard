import {
  AuthActionTypes,
  AuthProfile,
  PROCESSING_AUTH,
  SET_AUTH_PROFILE,
  SET_HAS_SENT_SIGNIN_LINK,
} from './types'
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

axios.defaults.baseURL = env('MAZZUMA_API_URL')

axios.defaults.headers.common['Accept'] = 'application/json'

export const processAuth = (isAuthenticating: boolean): AuthActionTypes => {
  return {
    type: PROCESSING_AUTH,
    payload: isAuthenticating,
  }
}

export const setAuthProfile = (profile: AuthProfile | null): AuthActionTypes => {
  return {
    type: SET_AUTH_PROFILE,
    payload: profile,
  }
}

export const setHasSentSignInLink = (sentLink: boolean): AuthActionTypes => {
  return {
    type: SET_HAS_SENT_SIGNIN_LINK,
    payload: sentLink,
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
      const response = await apigateway.post('/login', {
        username: username,
        password: password,
      })

      console.log('Something', response)
      // dispatch(processAuth(false))
      // history.push(urlPaths.DASHBOARD_URL_PATH)

      // dispatch(setHasSentSignInLink(true))

      // if (!isEmpty(destinationPath)) {
      //   history.replace(destinationPath)
      //   return
      // }
      //
      // history.replace(urlPaths.DASHBOARD_PATH, { authProfile: mergedAuthData })
    } catch (error) {
      // dispatch(processAuth(false))
      // dispatch(setHasSentSignInLink(false))
      console.log('Something', error)
    }
  }
}

// export const signIn = (
//   token: string,
//   history: H.History,
//   destinationPath: string
// ): ThunkAction<void, RootState, unknown, AnyAction> => {
//   return async (dispatch) => {
//     dispatch(setHasSentSignInLink(true))
//     try {
//       const {
//         data: {
//           data: { admin },
//         },
//       } = (await axios({
//         method: 'get',
//         url: `/`,
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         transformResponse: transformResponse,
//         transformRequest: transformRequest,
//       })) as any
//
//       await setCookie('_mazzuma_admin_tokid', JSON.stringify(token))
//       await setCookie('_mazzuma_admin_usrid', JSON.stringify(admin))
//
//       dispatch(setHasSentSignInLink(false))
//       history.replace(destinationPath)
//     } catch (error) {
//       dispatch(processAuth(false))
//       dispatch(setHasSentSignInLink(false))
//       console.log(error)
//     }
//   }
// }

export const signOut = (history: H.History): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setAuthProfile(null))
    dispatch(setHasSentSignInLink(false))
    Cookies.remove('_mazzuma_admin_tokid')
    Cookies.remove('_mazzuma_admin_usrid')
    history.replace(urlPaths.SIGNIN_URL_PATH)
    window.location.reload()
  }
}
