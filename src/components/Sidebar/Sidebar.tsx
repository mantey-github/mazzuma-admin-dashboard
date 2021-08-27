import React from 'react'
import { SidebarWrapper, MenuItem, SidebarMenus } from './Sidebar.style'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'

Sidebar.defaultProps = {}

Sidebar.propTypes = {}

function Sidebar() {
  return (
    <SidebarWrapper>
      <img className={'logo'} src={images.imageMazzumaLogo} alt={'mazzuma logo'} />
      <SidebarMenus>
        <MenuItem>
          <img src={icons.iconSidebarMenuDashboard} alt={'dashboard'} />
          Dashboard
        </MenuItem>

        <MenuItem>
          <img src={icons.iconSidebarMenuDashboard} alt={'accounts'} />
          Accounts
        </MenuItem>

        <MenuItem>
          <img src={icons.iconSidebarMenuDashboard} alt={'businesses'} />
          Businesses
        </MenuItem>

        <MenuItem>
          <img src={icons.iconSidebarMenuDashboard} alt={'contacts'} />
          Contact Person
        </MenuItem>

        <MenuItem>
          <img src={icons.iconSidebarMenuDashboard} alt={'verified'} />
          Verified Users
        </MenuItem>

        <MenuItem>
          <img src={icons.iconSidebarMenuTransaction} alt={'transactions'} />
          MM Transactions
        </MenuItem>
      </SidebarMenus>
    </SidebarWrapper>
  )
}

export default Sidebar