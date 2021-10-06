import { combineReducers } from 'redux'
import { app } from '../containers/App/store/reducer'
import { auth } from '../containers/SignIn/store/reducer'
import { accounts } from '../containers/Accounts/store/reducer'
import { businesses } from '../containers/Businesses/store/reducer'
import { contacts } from '../containers/Contacts/store/reducer'
import { transactions } from '../containers/Transactions/store/reducer'
import { verifiedUsers } from '../containers/VerifiedUsers/store/reducer'

const reducers = combineReducers({
  app: app,
  auth: auth,
  accounts: accounts,
  businesses: businesses,
  contacts: contacts,
  transactions: transactions,
  verifiedUsers: verifiedUsers,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
