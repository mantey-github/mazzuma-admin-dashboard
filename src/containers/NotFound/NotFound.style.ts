import styled from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'
import { Container, Row, Col } from 'react-bootstrap'

export const NotFoundWrapper = styled(Row)`
  margin-right: 0 !important;
  margin-left: 0 !important;
  height: inherit;

  @media screen and ${device.smallMobile} {
    padding-top: 0;
  }

  @media screen and ${device.mobile} {
    padding-top: 0;
  }
`

export const ErrorWrapper = styled(Col)`
  text-align: center;
  align-self: center;
  margin-top: -100px;

  h5 {
    font-family: CeraProBlack, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #3a3a3a;
    text-transform: none;
  }

  p {
    font-style: normal;
    font-size: 16px;
    color: #5f5f5f;
    margin-top: 0;
    margin-bottom: 0.5rem;

    @media screen and ${device.smallMobile} {
      font-size: 15px;
    }

    @media screen and ${device.mobile} {
      font-size: 18px;
    }
  }

  span {
    color: #45abe0 !important;
    cursor: pointer;
  }
`

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  background: #fdfdfd;
  overflow: hidden;
`

export const AppContainer = styled(Container)`
  height: 100%;
  width: auto;
  padding: 0 !important;
`

export const PageWrapper = styled.div`
  height: 100%;
  width: auto;
  padding: 0 5%; !important;
`

export const PageContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100%;
  padding: 0 !important;
`
