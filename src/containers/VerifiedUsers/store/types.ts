export const SET_VERIFIED_USERS_ACTION = 'SET_VERIFIED_USERS_ACTION'

export interface VerifiedUsersState {
  verifiedUsers: Array<VerifiedUser>
}

export interface VerifiedUser {
  accountId: number
  active: number
  airtelAccount: string
  balance: string
  businessEmail: string
  businessLocation: number
  businessName: string
  callbackUrl: string
  category: number
  countryId: string
  created: string
  deleted: number
  fcmToken: string
  id: number
  ipAddress: string
  mazzumaAccount: string
  mtnAccount: string
  referralCode: string
  referrer: string
  tigoAccount: string
  type: string
  vodafoneAccount: string
  walletId: string
}

interface SetVerifiedUsersAction {
  type: typeof SET_VERIFIED_USERS_ACTION
  payload: Array<VerifiedUser>
}

export type VerifiedUsersActionTypes = SetVerifiedUsersAction
