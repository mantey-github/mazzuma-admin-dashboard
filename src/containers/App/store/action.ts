import {
  AppActionTypes,
  Toast,
  SET_TOAST,
  SET_AUTH_IDLE_ACTION,
  SET_RESYNCING_AUTH_ACTION,
  SET_REMOVE_ALL_TOAST,
  SET_HAS_INTERNET_CONNECTION,
  SET_HAS_MAJOR_SYSTEM_ERROR_ACTION,
} from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import { AuthProfile } from '../../SignIn/store/types'
import apigateway from '../../../utils/apigateway'
import { mergeDeepRight } from 'ramda'
import { setAuthProfile } from '../../SignIn/store/action'

export const showToast = (toast: Toast) => {
  return {
    type: SET_TOAST,
    payload: toast,
  }
}

export const removeAllToast = (remove: boolean): AppActionTypes => {
  return {
    type: SET_REMOVE_ALL_TOAST,
    payload: remove,
  }
}

export const setHasInternetConnection = (hasInternet: boolean): AppActionTypes => {
  return {
    type: SET_HAS_INTERNET_CONNECTION,
    payload: hasInternet,
  }
}

export const setIsAuthIdle = (isIdle: boolean): AppActionTypes => {
  return {
    type: SET_AUTH_IDLE_ACTION,
    payload: isIdle,
  }
}

export const reSyncingAuth = (isReSyncing: boolean): AppActionTypes => {
  return {
    type: SET_RESYNCING_AUTH_ACTION,
    payload: isReSyncing,
  }
}

export const hasSystemMajorError = (hasError: boolean): AppActionTypes => {
  return {
    type: SET_HAS_MAJOR_SYSTEM_ERROR_ACTION,
    payload: hasError,
  }
}

export const reSyncAuthProfile = (
  localAuthProfile: AuthProfile
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      if (!getState().app?.hasInternetConnection) {
        return
      }

      if (getState().auth.authProfile?.email) {
        return
      }

      dispatch(reSyncingAuth(true))

      const response = (await apigateway.get(`/`)) as any

      const authProfile: AuthProfile = response?.admin

      const mergedAuth: any = mergeDeepRight(localAuthProfile || {}, {
        ...authProfile,
      })

      dispatch(reSyncingAuth(false))

      dispatch(setAuthProfile(mergedAuth))
    } catch (error) {
      dispatch(reSyncingAuth(false))
      dispatch(dispatch(hasSystemMajorError(true)))
      console.log(error)
    }
  }
}
