import { AccountActionTypes, Account, SET_ACCOUNT_ACTION } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import apigateway from '../../../utils/apigateway'
import { setIsLoading } from '../../App/store/action'
import { descend, prop, sort } from 'ramda'

export const setAccountAction = (accounts: Array<Account>): AccountActionTypes => {
  return {
    type: SET_ACCOUNT_ACTION,
    payload: accounts,
  }
}

export const getAccounts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
      const accounts = (await apigateway.get('/getAccounts')) as Array<Account>

      if (!accounts) return

      dispatch(setAccountAction(sort(descend(prop('id')), accounts)))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsLoading(false))
      alert(error.message)
    }
  }
}
