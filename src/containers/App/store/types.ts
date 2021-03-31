export const SET_TOAST = 'SET_TOAST'
export const SET_REMOVE_ALL_TOAST = 'SET_REMOVE_ALL_TOAST'
export const SET_AUTH_IDLE_ACTION = 'SET_AUTH_IDLE_ACTION'
export const SET_RESYNCING_AUTH_ACTION = 'SET_RESYNCING_AUTH_ACTION'
export const SET_HAS_INTERNET_CONNECTION = 'SET_HAS_INTERNET_CONNECTION'
export const SET_HAS_MAJOR_SYSTEM_ERROR_ACTION = 'SET_HAS_MAJOR_SYSTEM_ERROR_ACTION'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface AppState {
  toast: Toast | null
  isAuthIdle: boolean
  removeAllToast: boolean
  hasInternetConnection: boolean
  isReSyncingAuth: boolean
  hasSystemMajorError: boolean
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

interface SetReSyncingAuthAction {
  type: typeof SET_RESYNCING_AUTH_ACTION
  payload: boolean
}

interface SetHasMajorSystemErrorAction {
  type: typeof SET_HAS_MAJOR_SYSTEM_ERROR_ACTION
  payload: boolean
}

export type AppActionTypes =
  | ShowToastAction
  | SetAuthIdleAction
  | SetReSyncingAuthAction
  | SetRemoveToastAction
  | SetHasInternetConnectionAction
  | SetHasMajorSystemErrorAction
