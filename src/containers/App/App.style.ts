import styled, { css } from 'styled-components/macro'
import { Container } from 'react-bootstrap'
import { device } from '../../utils/mediaQueries'

type DashboardStyleProps = {
  needsFixedPosition?: boolean | null
}

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // height: 100%;
  display: block;
  background: #fdfdfd;
`

export const AppContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  display: block;
  background: #fdfdfd;
  padding: 0px !important;
`

export const PageWrapper = styled.div<DashboardStyleProps>`
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
