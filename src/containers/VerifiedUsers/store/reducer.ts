import { VerifiedUsersActionTypes, VerifiedUsersState, SET_VERIFIED_USERS_ACTION } from './types'

const initialState: VerifiedUsersState = {
  verifiedUsers: [],
}

export function verifiedUsers(
  state = initialState,
  action: VerifiedUsersActionTypes
): VerifiedUsersState {
  switch (action.type) {
    case SET_VERIFIED_USERS_ACTION:
      return {
        ...state,
        verifiedUsers: action.payload,
      }
    default:
      return state
  }
}
