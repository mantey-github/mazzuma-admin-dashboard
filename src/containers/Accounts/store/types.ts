export const SET_ACCOUNT_ACTION = 'SET_ACCOUNT_ACTION'

export interface AccountState {
  accounts: Array<Account>
}

export interface Account {
  id: string
  username: string
  role: number
  active: number
  resetToken: string
  loggedIn: number
  deleted: number
  created: string
}

interface SetAccountAction {
  type: typeof SET_ACCOUNT_ACTION
  payload: Array<Account>
}

export type AccountActionTypes = SetAccountAction
