import { TransactionsActionTypes, Transaction, SET_TRANSACTIONS_ACTION } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import apigateway from '../../../utils/apigateway'
import { setIsLoading } from '../../App/store/action'
import { descend, prop, sort, sortBy } from 'ramda'

export const setTransactionsAction = (
  transactions: Array<Transaction>
): TransactionsActionTypes => {
  return {
    type: SET_TRANSACTIONS_ACTION,
    payload: transactions,
  }
}

export const getTransactions = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
      const transactions = (await apigateway.get('/getTransactions')) as Array<Transaction>

      if (!transactions) return

      dispatch(setTransactionsAction(sort(descend(prop('id')), transactions)))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsLoading(false))
      alert(error.message)
    }
  }
}
