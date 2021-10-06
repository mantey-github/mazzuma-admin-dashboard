export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION'

export interface ContactsState {
  contacts: Array<Contacts>
}

export interface Contacts {
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
  payload: Array<Contacts>
}

export type ContactsActionTypes = SetContactsAction
