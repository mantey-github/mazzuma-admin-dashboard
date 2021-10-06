import { ContactsActionTypes, Contact, SET_CONTACTS_ACTION } from './types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../../redux/reducers'
import { AnyAction } from 'redux'
import apigateway from '../../../utils/apigateway'
import { setIsLoading } from '../../App/store/action'
import { descend, prop, sort } from 'ramda'

export const setContactsAction = (contacts: Array<Contact>): ContactsActionTypes => {
  return {
    type: SET_CONTACTS_ACTION,
    payload: contacts,
  }
}

export const getContacts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
      const contacts = (await apigateway.get('/getContacts')) as Array<Contact>

      if (!contacts) return

      dispatch(setContactsAction(sort(descend(prop('id')), contacts)))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsLoading(false))
      alert(error.message)
    }
  }
}
