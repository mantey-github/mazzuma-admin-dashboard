import React, { useState } from 'react'
import {
  AppContainer,
  SidebarColumn,
  MainColumn,
  ColumnHeader,
  ColumnBody,
  DropWrapper,
  DropToggle,
  UserName,
  DropMenu,
  DropMenuItem,
} from './App.style'
import { Sidebar, Toast } from '../../components'
import { useDispatch } from 'react-redux'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import { ToastProvider } from 'react-toast-notifications'
import { useIdleTimer } from 'react-idle-timer'
import urlPaths from '../../utils/urlPaths'
import { signOut } from '../SignIn/store/action'

App.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  children: PropTypes.node,
}

const IDLE_TIMEOUT = 1000 * 60 * 30

function App({ history, children }: InferProps<typeof App.propTypes>) {
  const [showDropdown, setShowDropdown] = useState(false)

  const dispatch = useDispatch()

  const handleOnActive = () => {
    // Admin is active
  }

  const handleOnIdle = () => {
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
      <AppContainer>
        <SidebarColumn>
          <Sidebar />
        </SidebarColumn>
        <MainColumn>
          <ColumnHeader>
            {/* <img className={'notify'} src={icons.iconNotifyBadge} alt={'notify icon'} /> */}
            <DropWrapper onToggle={() => setShowDropdown(!showDropdown)} show={showDropdown}>
              <DropToggle data-toggle="dropdown">
                <UserName data-initials={'MA'}>{`Maz Admin`}</UserName>
              </DropToggle>
              <DropMenu>
                <DropMenuItem
                  className="dropdown-item"
                  to={urlPaths.SIGNIN_URL_PATH}
                  onClick={() => dispatch(signOut(history))}
                >
                  Log Out
                </DropMenuItem>
              </DropMenu>
            </DropWrapper>
          </ColumnHeader>
          <ColumnBody>{children}</ColumnBody>
        </MainColumn>
        <Toast />
      </AppContainer>
    </ToastProvider>
  )
}

export default App
