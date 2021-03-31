import { combineReducers } from 'redux'
import { app } from '../containers/App/store/reducer'
import { auth } from '../containers/SignIn/store/reducer'

const reducers = combineReducers({
  app: app,
  auth: auth,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
