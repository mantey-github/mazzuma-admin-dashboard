import React, { useCallback, useEffect, useState } from 'react'
import { AppContainer, PageContainer, PageWrapper } from './App.style'
import { Toast } from '../../components'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { signOut } from '../SignIn/store/action'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import { ToastProvider } from 'react-toast-notifications'
import { useIdleTimer } from 'react-idle-timer'
import { setIsAuthIdle } from './store/action'

App.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  children: PropTypes.node,
}

const IDLE_TIMEOUT = 1000 * 60 * 30

function App({ history, children }: InferProps<typeof App.propTypes>) {
  const { authProfile, isAuthIdle } = useSelector(
    (state: RootState) => ({
      authProfile: state.auth.authProfile,
      isAuthIdle: state.app.isAuthIdle,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const handleOnActive = (event: Event) => {
    dispatch(setIsAuthIdle(false))
  }

  const handleOnIdle = (event: Event) => {
    dispatch(setIsAuthIdle(true))
    dispatch(signOut(history))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: IDLE_TIMEOUT,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 250,
  })

  return (
    <ToastProvider>
      <AppContainer fluid={true}>
        {/* <Navigation */}
        {/*  showMobileNav={ */}
        {/*    history?.location?.pathname === urlPaths.MESSAGES_URL_PATH && */}
        {/*    currentMessageStep === messagesSteps.CHAT_ROOM */}
        {/*  } */}
        {/*  homeRoute={urlPaths.DASHBOARD_PATH} */}
        {/*  onSignOut={() => dispatch(signOut(history))} */}
        {/*  profilePhoto={authProfile?.profilePicture || images.imageMountaineerAvatar} */}
        {/*  profileName={ */}
        {/*    authProfile?.firstName ? `Hello ${authProfile?.firstName}` : 'Hello River User' */}
        {/*  } */}
        {/* /> */}

        {/* <MobileNavigation */}
        {/*  showMobileNav={ */}
        {/*    history?.location?.pathname === urlPaths.MESSAGES_URL_PATH && */}
        {/*    currentMessageStep === messagesSteps.CHAT_ROOM */}
        {/*  } */}
        {/*  onGoBack={() => history.goBack()} */}
        {/*  guidePhoto={healthGuide?.profilePicture || images.imageMountaineerAvatar} */}
        {/*  guideName={`${healthGuide?.firstName} ${healthGuide?.lastName}` || 'Health Guide'} */}
        {/*  guidePosition="Primary Care Provider" */}
        {/* /> */}

        <Toast />
        <PageWrapper needsFixedPosition={false}>
          <PageContainer>{children}</PageContainer>
        </PageWrapper>
      </AppContainer>
    </ToastProvider>
  )
}

export default App
