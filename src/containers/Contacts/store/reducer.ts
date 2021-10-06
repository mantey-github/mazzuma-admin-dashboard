import { ContactsActionTypes, ContactsState, SET_CONTACTS_ACTION } from './types'

const initialState: ContactsState = {
  contacts: [],
}

export function contacts(state = initialState, action: ContactsActionTypes): ContactsState {
  switch (action.type) {
    case SET_CONTACTS_ACTION:
      return {
        ...state,
        contacts: action.payload,
      }
    default:
      return state
  }
}
