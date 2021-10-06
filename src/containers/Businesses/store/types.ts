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

// accountId: 34388
// active: 1
// airtelAccount: ""
// balance: "0.00000000"
// businessEmail: "arnaud.favre96@gmail.com"
// businessLocation: 0
// businessName: "Favre"
// callbackUrl: ""
// category: 1
// countryId: "Ghana"
// created: "2021-10-04T20:02:38.000Z"
// deleted: 0
// fcmToken: "dYC-4AdGylo:APA91bFsk_Yyc5v6p5xHCFl27w3EXWAmmrY7xdx5EWnEprlqWf75zj3tYeYkr9-Q1vJ8nYFPmmeEUEr5T5KRCsvakiocTUi95U_LC89pk1xTN9lxdfYKSo06xuxFBKE30ecydFkrMrRS"
// id: 34253
// ipAddress: ""
// mazzumaAccount: "arnaudchadwell2021"
// mtnAccount: "+233599016247"
// referralCode: "ar4vi2hwr1"
// referrer: ""
// tigoAccount: ""
// type: "app"
// vodafoneAccount: ""
// walletId: "086761c292afa771c70ad7906a5ef1bf809feb60d8fb1fb7d91e61460a229c2f"

interface SetBusinessAction {
  type: typeof SET_BUSINESS_ACTION
  payload: Array<Business>
}

export type BusinessActionTypes = SetBusinessAction
