export const SET_TOAST = 'SET_TOAST'
export const SET_REMOVE_ALL_TOAST = 'SET_REMOVE_ALL_TOAST'
export const SET_AUTH_IDLE_ACTION = 'SET_AUTH_IDLE_ACTION'
export const SET_HAS_INTERNET_CONNECTION = 'SET_HAS_INTERNET_CONNECTION'
export const SET_LOADING_ACTION = 'SET_LOADING_ACTION'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface AppState {
  toast: Toast | null
  isAuthIdle: boolean
  removeAllToast: boolean
  hasInternetConnection: boolean
  isLoading: boolean
}

export interface Toast {
  message: string
  appearance: ToastType
  autoDismiss: boolean
  autoDismissTimeout?: number
  show: boolean
}

interface ShowToastAction {
  type: typeof SET_TOAST
  payload: Toast | null
}

interface SetRemoveToastAction {
  type: typeof SET_REMOVE_ALL_TOAST
  payload: boolean
}

interface SetHasInternetConnectionAction {
  type: typeof SET_HAS_INTERNET_CONNECTION
  payload: boolean
}

interface SetAuthIdleAction {
  type: typeof SET_AUTH_IDLE_ACTION
  payload: boolean
}

interface SetLoadingAction {
  type: typeof SET_LOADING_ACTION
  payload: boolean
}

export type AppActionTypes =
  | ShowToastAction
  | SetAuthIdleAction
  | SetRemoveToastAction
  | SetHasInternetConnectionAction
  | SetLoadingAction
