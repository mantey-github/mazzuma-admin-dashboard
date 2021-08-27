import React, { ErrorInfo } from 'react'
import {
  AppContainer,
  AppWrapper,
  ErrorBoundWrapper,
  ErrorWrapper,
  PageContainer,
  PageWrapper,
} from './ErrorBoundary.style'
import urlPaths from '../../utils/urlPaths'
import * as Cookies from 'js-cookie'
import { reportErrorToSlack } from '../../utils/reportErrorToSlack'
import { getCookie } from '../../utils/getCookie'
import env from '../../utils/env'

type ErrorBoundaryProps = {
  children?: React.ReactNode
  systemError?: boolean
}

type ErrorBoundaryState = {
  error?: Error | null
  errorInfo?: ErrorInfo | null
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
      hasError: props?.systemError || false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, errorInfo })
    this.logErrorToService(error, errorInfo)
  }

  logErrorToService = (error: Error | null, errorInfo: React.ErrorInfo) => {
    if (error) {
      // TODO: send error report to service provider
      // TODO https://www.smashingmagazine.com/2020/06/react-error-handling-reporting-error-boundary-sentry/
      // Temporarily using Slack

      const cookie = getCookie('_mazzuma_admin_tokid')
      const auth = cookie && JSON.parse(cookie)

      reportErrorToSlack(
        error?.message,
        error?.name,
        error?.stack || 'Main Frontend System Error',
        window.location.href,
        // eslint-disable-next-line camelcase
        auth?.phoneNumber || auth?.phone_number || ''
      )
    }
  }

  handleSignOut = () => {
    Cookies.remove('_mazzuma_admin_tokid')
    Cookies.remove('_mazzuma_admin_usrid')
    localStorage.clear()
    window.location.reload()
  }

  handleGoBack = () => {
    window.location.href = urlPaths.DASHBOARD_URL_PATH
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <AppWrapper>
            <AppContainer fluid={true}>
              <PageWrapper>
                <PageContainer>
                  <ErrorBoundWrapper>
                    <ErrorWrapper md="12">
                      <img width={'30%'} alt="error on mazzuma" src={''} className="error" />
                      <h5>{'Whoops!'}</h5>
                      <p>
                        {`Something unusual happened. Kindly retry your last action.`}
                        <span onClick={this.handleGoBack}> Go Back</span>
                      </p>
                      <p>
                        If this persists, please reach out to{' '}
                        <span
                          onClick={() => {
                            window.open(env('MAZZUMA_SUPPORT_URL'), '_self')
                          }}
                        >
                          {' '}
                          support team.
                        </span>
                      </p>
                    </ErrorWrapper>
                  </ErrorBoundWrapper>
                </PageContainer>
              </PageWrapper>
            </AppContainer>
          </AppWrapper>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
