import React from 'react'
import { SidebarWrapper, MenuItem, SidebarMenus } from './Sidebar.style'
import { useHistory, useLocation } from 'react-router-dom'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'
import urlPaths from '../../utils/urlPaths'

Sidebar.defaultProps = {}

Sidebar.propTypes = {}

function Sidebar() {
  const history = useHistory()
  const location = useLocation()

  return (
    <SidebarWrapper>
      <img className={'logo'} src={images.imageMazzumaLogo} alt={'mazzuma logo'} />
      <SidebarMenus>
        <MenuItem
          onClick={() => history.push(urlPaths.DASHBOARD_URL_PATH)}
          className={location.pathname === urlPaths.DASHBOARD_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuDashboard} alt={'dashboard'} />
          Dashboard
        </MenuItem>

        <MenuItem
          onClick={() => history.push(urlPaths.ACCOUNTS_URL_PATH)}
          className={location.pathname === urlPaths.ACCOUNTS_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuAccounts} alt={'accounts'} />
          Accounts
        </MenuItem>

        <MenuItem
          onClick={() => history.push(urlPaths.BUSINESSES_URL_PATH)}
          className={location.pathname === urlPaths.BUSINESSES_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuBusinesses} alt={'businesses'} />
          Businesses
        </MenuItem>

        <MenuItem
          onClick={() => history.push(urlPaths.CONTACT_PERSONS_URL_PATH)}
          className={location.pathname === urlPaths.CONTACT_PERSONS_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuContactPerson} alt={'contacts'} />
          Contact Person
        </MenuItem>

        <MenuItem
          onClick={() => history.push(urlPaths.VERIFIED_USERS_URL_PATH)}
          className={location.pathname === urlPaths.VERIFIED_USERS_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuVerifiedUsers} alt={'verified'} />
          Verified Users
        </MenuItem>

        <MenuItem
          onClick={() => history.push(urlPaths.MM_TRANSACTIONS_URL_PATH)}
          className={location.pathname === urlPaths.MM_TRANSACTIONS_URL_PATH ? 'active' : ''}
        >
          <img src={icons.iconSidebarMenuTransaction} alt={'transactions'} />
          MM Transactions
        </MenuItem>
      </SidebarMenus>
    </SidebarWrapper>
  )
}

export default Sidebar
