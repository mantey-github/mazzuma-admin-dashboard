import { AccountActionTypes, AccountState, SET_ACCOUNT_ACTION } from './types'

const initialState: AccountState = {
  accounts: [],
}

export function accounts(state = initialState, action: AccountActionTypes): AccountState {
  switch (action.type) {
    case SET_ACCOUNT_ACTION:
      return {
        ...state,
        accounts: action.payload,
      }
    default:
      return state
  }
}
