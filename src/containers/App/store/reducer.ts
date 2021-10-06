import {
  AppActionTypes,
  AppState,
  SET_TOAST,
  SET_AUTH_IDLE_ACTION,
  SET_REMOVE_ALL_TOAST,
  SET_HAS_INTERNET_CONNECTION,
  SET_LOADING_ACTION,
} from './types'

const initialState: AppState = {
  toast: {
    message: '',
    appearance: 'info',
    autoDismiss: true,
    autoDismissTimeout: 6000,
    show: false,
  },
  removeAllToast: false,
  hasInternetConnection: true,
  isAuthIdle: false,
  isLoading: false,
}

export function app(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SET_TOAST:
      return {
        ...state,
        toast: action.payload,
      }
    case SET_REMOVE_ALL_TOAST:
      return {
        ...state,
        removeAllToast: action.payload,
      }
    case SET_HAS_INTERNET_CONNECTION:
      return {
        ...state,
        hasInternetConnection: action.payload,
      }
    case SET_AUTH_IDLE_ACTION:
      return {
        ...state,
        isAuthIdle: action.payload,
      }
    case SET_LOADING_ACTION:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
