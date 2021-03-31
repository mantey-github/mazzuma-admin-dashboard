import styled from 'styled-components/macro'
import { Row, Col } from 'react-bootstrap'
import { device } from '../../utils/mediaQueries'

export const CareServiceWrapper = styled(Row)`
  margin-right: 0px !important;
  margin-left: 0px !important;
  padding-top: 60px;

  @media screen and ${device.smallMobile} {
    padding-top: 50px;
  }

  @media screen and ${device.mobile} {
    padding-top: 50px;
  }
`

export const CareServiceColumns = styled(Col)`
  padding-right: calc(20px / 2) !important;
  padding-left: calc(20px / 2) !important;
  margin-bottom: 20px;
`

export const CareProviderColumns = styled(Col)`
  padding-right: calc(20px / 2) !important;
  padding-left: calc(20px / 2) !important;
  margin-bottom: 40px;
  display: flex;
`

export const CareProvidersWrapper = styled(Row)`
  margin-right: 0px !important;
  margin-left: 0px !important;
  padding-top: 40px;

  @media screen and ${device.smallMobile} {
    padding-top: 30px;
  }

  @media screen and ${device.mobile} {
    padding-top: 30px;
  }
`

export const DashboardWrapper = styled(Row)`
  margin-right: 0 !important;
  margin-left: 0 !important;
  padding-top: 60px;

  @media screen and ${device.smallMobile} {
    padding-top: 50px;
  }

  @media screen and ${device.mobile} {
    padding-top: 50px;
  }
`

export const WelcomeHeaderColumn = styled(Col)``

export const DashboardTitle = styled.h5`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 23px;
  letter-spacing: 0.03em;
  color: #3a3a3a;
  text-transform: none;

  @media screen and ${device.smallMobile} {
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media screen and ${device.mobile} {
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 20px;
  }
`

export const WelcomeSubTitle = styled.p`
  margin-bottom: 0px;
  font-family: CeraProMedium, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03em;
  color: #000000;

  @media screen and ${device.smallMobile} {
    font-size: 16px;
  }

  @media screen and ${device.mobile} {
    font-size: 20px;
  }
`
