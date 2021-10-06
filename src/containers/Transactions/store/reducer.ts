import { TransactionsActionTypes, TransactionsState, SET_TRANSACTIONS_ACTION } from './types'

const initialState: TransactionsState = {
  transactions: [],
}

export function transactions(
  state = initialState,
  action: TransactionsActionTypes
): TransactionsState {
  switch (action.type) {
    case SET_TRANSACTIONS_ACTION:
      return {
        ...state,
        transactions: action.payload,
      }
    default:
      return state
  }
}
