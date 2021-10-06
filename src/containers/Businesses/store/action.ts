import { BusinessActionTypes, Business, SET_BUSINESS_ACTION } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import apigateway from '../../../utils/apigateway'
import { setIsLoading } from '../../App/store/action'
import { descend, prop, sort } from 'ramda'

export const setBusinessAction = (businesses: Array<Business>): BusinessActionTypes => {
  return {
    type: SET_BUSINESS_ACTION,
    payload: businesses,
  }
}

export const getBusinesses = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
      const businesses = (await apigateway.get('/getBusinesses')) as Array<Business>

      if (!businesses) return

      dispatch(setBusinessAction(sort(descend(prop('id')), businesses)))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsLoading(false))
      alert(error.message)
    }
  }
}
