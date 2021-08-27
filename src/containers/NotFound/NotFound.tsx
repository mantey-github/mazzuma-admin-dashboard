import React from 'react'
import {
  NotFoundWrapper,
  ErrorWrapper,
  AppContainer,
  AppWrapper,
  PageContainer,
  PageWrapper,
} from './NotFound.style'
import urlPaths from '../../utils/urlPaths'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'

NotFound.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
}

function NotFound({ history }: InferProps<typeof NotFound.propTypes>) {
  const { authProfile } = useSelector(
    (state: RootState) => ({
      authProfile: state.auth.authProfile,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  return (
    <>
      <AppWrapper>
        <AppContainer fluid={true}>
          {/* <Navigation */}
          {/*  homeRoute={urlPaths.DASHBOARD_PATH} */}
          {/*  onSignOut={() => false} */}
          {/*  profilePhoto={''} */}
          {/*  profileName={authProfile?.firstName + ' ' + authProfile?.lastName || 'Mountaineer'} */}
          {/* /> */}
          <PageWrapper>
            <PageContainer>
              <NotFoundWrapper>
                <ErrorWrapper md="12">
                  <img width={'40%'} alt="page not found" src={''} className="lost-img" />
                  <h5>{'Hmm. Are we lost?'}</h5>
                  <p>
                    {`Looks like you're lost. Don't worry lets take you `}
                    <span
                      onClick={() => {
                        const dashboardRoute = `${window.location.origin}${urlPaths.DASHBOARD_URL_PATH}`
                        window.open(dashboardRoute, '_self')
                      }}
                    >
                      home.
                    </span>
                  </p>
                </ErrorWrapper>
              </NotFoundWrapper>
            </PageContainer>
          </PageWrapper>
        </AppContainer>
      </AppWrapper>
    </>
  )
}

export default NotFound
