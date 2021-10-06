export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION'

export interface ContactsState {
  contacts: Array<Contact>
}

export interface Contact {
  accountId: number
  created: string
  deleted: number
  email: string
  id: number
  lastName: string
  otherName: string
  phone: string
}

interface SetContactsAction {
  type: typeof SET_CONTACTS_ACTION
  payload: Array<Contact>
}

export type ContactsActionTypes = SetContactsAction
