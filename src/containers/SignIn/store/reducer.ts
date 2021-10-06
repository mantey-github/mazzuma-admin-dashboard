import { AuthActionTypes, AuthState, PROCESSING_AUTH, SET_AUTH_TOKEN } from './types'

const initialState: AuthState = {
  authToken: undefined,
  isAuthenticating: false,
}

export function auth(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case PROCESSING_AUTH:
      return {
        ...state,
        isAuthenticating: action.payload,
      }
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      }
    default:
      return state
  }
}
