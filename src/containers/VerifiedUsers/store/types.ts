export const SET_VERIFIED_USERS_ACTION = 'SET_VERIFIED_USERS_ACTION'

export interface VerifiedUsersState {
  verifiedUsers: Array<VerifiedUser>
}

export interface VerifiedUser {
  activated: number
  businessId: number
  created: string
  deleted: number
  dob: string
  email: string
  employmentDetails: string
  facebook: string
  firstName: string
  id: number
  idType: string
  instagram: string
  lastName: string
  mobileMoneyNetwork: string
  mobileMoneyNumber: string
  nationality: string
  occupation: string
  phone: string
  reason: string
  residence: string
  twitter: string
}

interface SetVerifiedUsersAction {
  type: typeof SET_VERIFIED_USERS_ACTION
  payload: Array<VerifiedUser>
}

export type VerifiedUsersActionTypes = SetVerifiedUsersAction
