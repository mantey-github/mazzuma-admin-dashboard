import React, { Suspense, lazy, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
  useParams,
} from 'react-router-dom'
import withAuthProfile from './containers/WithAuthProfile'
import retry from './utils/retry'
import urlPaths from './utils/urlPaths'
import App from './containers/App/App'
import { getCookie } from './utils/getCookie'
import { FullPageLoader } from './components'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from './redux/reducers'
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary'

const Signin = lazy(() => retry(() => import('./containers/SignIn/SignIn')))
const Dashboard = lazy(() => retry(() => import('./containers/Dashboard/Dashboard')))
const NotFound = lazy(() => retry(() => import('./containers/NotFound/NotFound')))

const PublicRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) return null
  const authTokenCookie = getCookie('_creditlocus_admin_tokid')
  const authProfileCookie = getCookie('_creditlocus_admin_usrid')
  return (
    <Route
      {...rest}
      render={(props) =>
        authTokenCookie && authProfileCookie ? (
          <Redirect
            to={{
              pathname: urlPaths.DASHBOARD_PATH,
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
  const authTokenCookie = getCookie('_creditlocus_admin_tokid')
  const authProfileCookie = getCookie('_creditlocus_admin_usrid')
  return (
    <Route
      {...rest}
      render={(props) => {
        window.scrollTo(0, 0)
        if (authTokenCookie && authProfileCookie) {
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
  const { isReSyncingAuth, hasSystemMajorError } = useSelector(
    (state: RootState) => ({
      isReSyncingAuth: state.app.isReSyncingAuth,
      hasSystemMajorError: state.app.hasSystemMajorError,
    }),
    shallowEqual
  )

  return (
    <>
      {isReSyncingAuth ? (
        <FullPageLoader />
      ) : (
        <>
          {hasSystemMajorError ? (
            <ErrorBoundary systemError={true} />
          ) : (
            <Suspense fallback={<FullPageLoader />}>
              <Router>
                <Switch>
                  <PublicRoute exact path={urlPaths.SIGNIN_URL_PATH} component={Signin} />
                  <PrivateRoute
                    exact
                    path={urlPaths.DASHBOARD_PATH}
                    component={withAuthProfile(Dashboard) as any}
                  />
                  <Route component={withAuthProfile(NotFound) as any} />
                </Switch>
              </Router>
            </Suspense>
          )}
        </>
      )}
    </>
  )
}

export default Routes
