import {
  AppActionTypes,
  Toast,
  SET_TOAST,
  SET_AUTH_IDLE_ACTION,
  SET_REMOVE_ALL_TOAST,
  SET_HAS_INTERNET_CONNECTION,
  SET_LOADING_ACTION,
} from './types'

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

export const setIsLoading = (isLoading: boolean): AppActionTypes => {
  return {
    type: SET_LOADING_ACTION,
    payload: isLoading,
  }
}
