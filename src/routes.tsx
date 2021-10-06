import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import lazyWithRetry from './utils/lazyWithRetry'
import urlPaths from './utils/urlPaths'
import App from './containers/App/App'
import { getCookie } from './utils/getCookie'
import { FullPageLoader } from './components'

const Signin = lazyWithRetry(() => import('./containers/SignIn/SignIn'))
const Dashboard = lazyWithRetry(() => import('./containers/Dashboard/Dashboard'))
const Accounts = lazyWithRetry(() => import('./containers/Accounts/Accounts'))
const Businesses = lazyWithRetry(() => import('./containers/Businesses/Businesses'))
const Contacts = lazyWithRetry(() => import('./containers/Contacts/Contacts'))
const VerifiedUsers = lazyWithRetry(() => import('./containers/VerifiedUsers/VerifiedUsers'))
const Transactions = lazyWithRetry(() => import('./containers/Transactions/Transactions'))
const NotFound = lazyWithRetry(() => import('./containers/NotFound/NotFound'))

const PublicRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) return null

  const authTokenCookie = getCookie('_mazzuma_admin_tokid')

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokenCookie ? (
          <Redirect
            to={{
              pathname: urlPaths.DASHBOARD_URL_PATH,
              state: { from: props.location },
            }}
          />
        ) : (
          <>
            <Component {...props} />
          </>
        )
      }
    />
  )
}

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) return null

  const authTokenCookie = getCookie('_mazzuma_admin_tokid')

  return (
    <Route
      {...rest}
      render={(props) => {
        window.scrollTo(0, 0)
        if (authTokenCookie) {
          return (
            <App {...props}>
              <Component {...props} />
            </App>
          )
        } else {
          return (
            <Redirect
              to={{
                pathname: urlPaths.SIGNIN_URL_PATH,
                state: { from: props.location },
              }}
            />
          )
        }
      }}
    />
  )
}

const Routes = () => {
  return (
    <>
      <Suspense fallback={<FullPageLoader />}>
        <Router>
          <Switch>
            <PublicRoute exact path={urlPaths.SIGNIN_URL_PATH} component={Signin} />
            <PrivateRoute exact path={urlPaths.DASHBOARD_URL_PATH} component={Dashboard} />
            <PrivateRoute exact path={urlPaths.ACCOUNTS_URL_PATH} component={Accounts} />
            <PrivateRoute exact path={urlPaths.BUSINESSES_URL_PATH} component={Businesses} />
            <PrivateRoute exact path={urlPaths.CONTACT_PERSONS_URL_PATH} component={Contacts} />
            <PrivateRoute exact path={urlPaths.VERIFIED_USERS_URL_PATH} component={VerifiedUsers} />
            <PrivateRoute exact path={urlPaths.MM_TRANSACTIONS_URL_PATH} component={Transactions} />
            {/* <PrivateRoute */}
            {/*  exact */}
            {/*  path={urlPaths.DASHBOARD_PATH} */}
            {/*  component={withAuthProfile(Dashboard) as any} */}
            {/* /> */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default Routes
