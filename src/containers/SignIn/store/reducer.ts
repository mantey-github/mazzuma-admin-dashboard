import {
  AuthActionTypes,
  AuthState,
  PROCESSING_AUTH,
  SET_AUTH_ALERT,
  SET_AUTH_PROFILE,
  SET_HAS_SENT_SIGNIN_LINK,
} from './types'

const initialState: AuthState = {
  authProfile: null,
  isAuthenticating: false,
  hasSentSigninLink: false,
  authAlert: null,
}

export function auth(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case PROCESSING_AUTH:
      return {
        ...state,
        isAuthenticating: action.payload,
      }
    case SET_AUTH_ALERT:
      return {
        ...state,
        authAlert: action.payload,
      }
    case SET_AUTH_PROFILE:
      return {
        ...state,
        authProfile: action.payload,
      }
    case SET_HAS_SENT_SIGNIN_LINK:
      return {
        ...state,
        hasSentSigninLink: action.payload,
      }
    default:
      return state
  }
}
