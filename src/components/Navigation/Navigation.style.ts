import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { device } from '../../utils/mediaQueries'

export const NavigationWrapper = styled.nav`
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
  background-color: #fff !important;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.5rem 1rem;
`

export const NavigationContainer = styled.div`
  flex-wrap: nowrap;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const NavigationBrand = styled(Link)`
  color: rgba(0, 0, 0, 0.9);
  display: inline-block;
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  margin-right: 1rem;
  font-size: 1.125rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`

export const NavigationToggle = styled.button`
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  font-size: 1.125rem;
  line-height: 1;
  -webkit-appearance: button;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  display: none;

  @media screen and ${device.smallMobile} {
    display: block !important;
  }

  @media screen and ${device.mobile} {
    display: block !important;
  }

  span {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: no-repeat center center;
    background-size: 100% 100%;
    color: rgba(0, 0, 0, 0.5);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`
