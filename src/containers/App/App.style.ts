import styled, { css } from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'
import { Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const AppContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;
  position: fixed;
  padding-left: 0;
  padding-right: 0;
`

export const SidebarColumn = styled.div`
  padding: 20px;
  background: #fafafa;
  flex: 1 1 15%;
  display: flex;
  flex-direction: column;
`

export const MainColumn = styled.div`
  background: #ffffff;
  flex: 1 1 85%;
`

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 5px 30px;

  img.notify {
    margin-right: 30px;
  }
`

export const ColumnBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  position: relative;
  padding-right: 30px;
  padding-left: 30px;
`

export const DropWrapper = styled(Dropdown)``

export const DropToggle = styled(Dropdown.Toggle)`
  display: inline-block !important;
  text-align: center !important;
  vertical-align: middle !important;
  background-color: transparent !important;
  padding: 3px !important;
  border: 1px solid rgba(193, 192, 195, 0.5) !important;
  box-sizing: border-box;
  border-radius: 100px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out !important;

  &:focus {
    outline: none !important;
    transition-duration: 0.3s;
    box-shadow: none !important;
  }

  &:after {
    display: none;
  }

  @media screen and ${device.smallMobile} {
    padding-top: 0 !important;
  }

  @media screen and ${device.mobile} {
    padding-top: 0 !important;
  }
`

export const DropMenu = styled(Dropdown.Menu)`
  top: 30% !important;
  min-width: 12rem !important;
  background: #ffffff !important;
  //box-shadow: 0 5px 10px rgba(193, 180, 207, 0.1); !important;
  //border: none !important;
  padding: 0.2rem 0;
  border-radius: 8px !important;

  @media screen and ${device.smallMobile} {
    top: 20% !important;
  }

  @media screen and ${device.mobile} {
    top: 20% !important;
  }
`

export const DropMenuItem = styled(Link)`
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  color: #38313c;
  padding: 0.65rem 1.5rem !important;
  letter-spacing: 0.3px;

  &:hover,
  &:focus {
    color: #662d91 !important;
    img {
      filter: invert(53%) sepia(82%) saturate(345%) hue-rotate(155deg) brightness(99%) contrast(93%) !important;
    }
  }

  &.active,
  &:active {
    color: #fff;
    text-decoration: none;
    background-color: transparent;

    img {
      filter: invert(53%) sepia(82%) saturate(345%) hue-rotate(155deg) brightness(99%) contrast(93%) !important;
    }
  }
`

export const DropItemDivider = styled(Dropdown.Divider)`
  margin: 0 1rem;
  border-top: 0.5px solid #e9ecef;
`

export const DropdownContentWrapper = styled(Row)`
  float: right;

  @media screen and ${device.smallMobile} {
    margin-right: 0; !important;
  }

  @media screen and ${device.mobile} {
    margin-right: 0; !important;
  }
`

export const UserName = styled.span`
  margin-right: 10px;
  margin-left: 2px;
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #000000;

  &[data-initials]:before {
    content: attr(data-initials);
    display: inline-block;
    font-weight: 600;
    width: 2.5em;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
    background: #662d91;
    color: white;
  }

  @media screen and ${device.smallMobile} {
  }

  @media screen and ${device.mobile} {
  }
`
