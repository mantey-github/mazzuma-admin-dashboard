import styled, { css } from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'

type AppStyleProps = {
  needsFixedPosition?: boolean | null
}

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
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 30px;
  padding-left: 30px;

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

export const AvatarName = styled.span`
  font-family: 'Goldplay', sans-serif;
  font-style: normal;
  font-size: 13px;
  color: #000000;

  &[data-initials]:before {
    content: attr(data-initials);
    display: inline-block;
    font-weight: 600;
    width: 40px;
    height: 40px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    vertical-align: middle;
    background: #ecf9ec;
    border: 3px solid #c49ee1;
    color: #2a2a2a;
  }

  @media screen and ${device.smallMobile} {
  }

  @media screen and ${device.mobile} {
  }
`

export const PageWrapper = styled.div<AppStyleProps>`
  height: 100%;
  width: 100%;
  padding: 0 5% !important;
  // margin-top: 150px;
  margin-top: 80px;
  position: absolute;

  ${(props) =>
    props.needsFixedPosition &&
    css`
      position: fixed !important;
    `}

  @media screen and ${device.smallMobile} {
    ${(props) =>
      props.needsFixedPosition &&
      css`
        margin-top: 150px !important;
      `}
  }

  @media screen and ${device.mobile} {
    ${(props) =>
      props.needsFixedPosition &&
      css`
        margin-top: 150px !important;
      `}
  }
`

export const PageContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100%;
  padding: 0px !important;
`
