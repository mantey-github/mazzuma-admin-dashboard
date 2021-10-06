export const SET_TRANSACTIONS_ACTION = 'SET_TRANSACTIONS_ACTION'

export interface TransactionsState {
  transactions: Array<Transaction>
}

export interface Transaction {
  amount: string
  balanceAfter: string
  balanceBefore: string
  beneficiaryName: string
  businessId: number
  category: number
  channelId: number
  comments: string
  completed?: string
  created: string
  deleted: number
  expired: number
  expiresOn?: string
  hash: string
  id: number
  ipAddress: string
  mmAccountNumber: string
  mmAccountType: number
  orderId: string
  recipient: string
  recipientNetwork: number
  responseCode: string
  sender: string
  senderNetwork: number
  serviceId: number
  serviceNumber: string
  signature: string
  status: string
  successUrl: string
  token: string
  type: number
  ulExchangeRate: string
  ulSourceAmount: string
  ulSourceCountry: string
  ulSourceCurrency: string
}

interface SetTransactionsAction {
  type: typeof SET_TRANSACTIONS_ACTION
  payload: Array<Transaction>
}

export type TransactionsActionTypes = SetTransactionsAction
