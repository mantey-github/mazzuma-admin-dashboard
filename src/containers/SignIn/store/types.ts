export const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE'
export const PROCESSING_AUTH = 'PROCESSING_AUTH'
export const SET_AUTH_ALERT = 'SET_AUTH_ALERT'
export const SET_HAS_SENT_SIGNIN_LINK = 'SET_HAS_SENT_SIGNIN_LINK'

export type AuthErrors = 'error' | 'success' | 'warning'

export interface AuthState {
  authProfile?: AuthProfile | null
  isAuthenticating?: boolean
  hasSentSigninLink?: boolean
  authAlert?: AuthAlert | null
}

export interface AuthToken {
  email: string
  token: string
  exp: number
}

export interface AuthProfile {
  name: string
  email: string
  phoneNumber?: string
  gender?: string
  dob?: string
  avatar?: string
  isActive: number
  role: string
  lastLogin?: string
  createdAt?: string
  updatedAt?: string
  adminId: string
}

export interface AuthAlert {
  message: string
  type: AuthErrors
}

interface SetAuthProfileAction {
  type: typeof SET_AUTH_PROFILE
  payload: AuthProfile | null
}

interface ProcessingAuthAction {
  type: typeof PROCESSING_AUTH
  payload: boolean
}

interface SetHasSentSignInLink {
  type: typeof SET_HAS_SENT_SIGNIN_LINK
  payload: boolean
}

interface FailedAuthAction {
  type: typeof SET_AUTH_ALERT
  payload: AuthAlert | null
}

export type AuthActionTypes =
  | ProcessingAuthAction
  | FailedAuthAction
  | SetAuthProfileAction
  | SetHasSentSignInLink
