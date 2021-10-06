export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const PROCESSING_AUTH = 'PROCESSING_AUTH'

export type AuthErrors = 'error' | 'success' | 'warning'

export interface AuthState {
  authToken?: AuthToken
  isAuthenticating?: boolean
}

export interface AuthToken {
  token: string
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

interface SetAuthTokenAction {
  type: typeof SET_AUTH_TOKEN
  payload?: AuthToken
}

interface ProcessingAuthAction {
  type: typeof PROCESSING_AUTH
  payload: boolean
}
export type AuthActionTypes = ProcessingAuthAction | SetAuthTokenAction
