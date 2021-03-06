export const SET_BUSINESS_ACTION = 'SET_BUSINESS_ACTION'

export interface BusinessState {
  businesses: Array<Business>
}

export interface Business {
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

interface SetBusinessAction {
  type: typeof SET_BUSINESS_ACTION
  payload: Array<Business>
}

export type BusinessActionTypes = SetBusinessAction
