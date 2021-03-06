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
import { images } from '../../assets/images'

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
      // TODO: send error report to service provider Sentry or any error reporter app
    }
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
                      <img
                        width={'30%'}
                        alt="error on mazzuma"
                        src={images.imageMazzumaLogo}
                        className="error"
                      />
                      <h5>{'Whoops!'}</h5>
                      <p>
                        {`Something unusual happened. Kindly retry your last action.`}
                        <span onClick={this.handleGoBack}> Go Back</span>
                      </p>
                      <p>
                        If this persists, please reach out to{' '}
                        <span onClick={() => false}> support team.</span>
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
