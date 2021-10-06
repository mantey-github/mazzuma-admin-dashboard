import { combineReducers } from 'redux'
import { app } from '../containers/App/store/reducer'
import { auth } from '../containers/SignIn/store/reducer'
import { accounts } from '../containers/Accounts/store/reducer'
import { businesses } from '../containers/Businesses/store/reducer'

const reducers = combineReducers({
  app: app,
  auth: auth,
  accounts: accounts,
  businesses: businesses,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
