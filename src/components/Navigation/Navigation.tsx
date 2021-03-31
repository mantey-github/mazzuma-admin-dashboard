import React from 'react'
import {
  NavigationWrapper,
  NavigationContainer,
  NavigationBrand,
  NavigationToggle,
} from './Navigation.style'

Navigation.defaultProps = {}

Navigation.propTypes = {}

function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <NavigationBrand to="https://pensaintl.tests/home">Creditlocus</NavigationBrand>
        <NavigationToggle>
          <span></span>
        </NavigationToggle>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        {/*  <ul className="navbar-nav mr-auto"></ul> */}

        {/*  <ul className="navbar-nav ml-auto"> */}
        {/*    <li className="nav-item"> */}
        {/*      <a className="nav-link" href="https://pensaintl.tests/login"> */}
        {/*        Login */}
        {/*      </a> */}
        {/*    </li> */}
        {/*  </ul> */}
        {/* </div> */}
      </NavigationContainer>
    </NavigationWrapper>
  )
}

export default Navigation
