import { VerifiedUsersActionTypes, VerifiedUser, SET_VERIFIED_USERS_ACTION } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import apigateway from '../../../utils/apigateway'
import { setIsLoading } from '../../App/store/action'

export const setVerifiedUsersAction = (users: Array<VerifiedUser>): VerifiedUsersActionTypes => {
  return {
    type: SET_VERIFIED_USERS_ACTION,
    payload: users,
  }
}

export const getVerifiedUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
      const users = (await apigateway.get('/getVerifiedUsers')) as Array<VerifiedUser>
      dispatch(setVerifiedUsersAction(users || []))
      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsLoading(false))
      alert(error.message)
    }
  }
}
