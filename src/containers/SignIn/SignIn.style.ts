import styled, { css } from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'
import { AuthErrors } from './store/types'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Button, Input } from '../../components'

type SignInStyleProps = {
  type?: AuthErrors
}

export const SignInWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: block;
`
export const SignInContainer = styled(Container)`
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
`

export const SignInRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  -webkit-box-pack: center !important;
  justify-content: center !important;

  @media screen and ${device.smallMobile} {
    overflow: auto;
  }

  @media screen and ${device.smallMobile} {
    overflow: auto;
  }
`

export const SignInCol = styled(Col)``

export const SignInCard = styled(Card)``

export const SignInCardHeader = styled(Card.Header)``

export const SignInCardBody = styled(Card.Body)``

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const FormText = styled.label`
  text-align: right !important;
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.6;
`

export const FormButtonRow = styled.div`
  margin-bottom: 0 !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const FormInputCol = styled(Col)`
  .srv-validation-message {
    padding-top: 5px;
    padding-bottom: 0;
    font-size: 13px;
    letter-spacing: 0.4px;
    color: #ff0033;
    font-weight: 400;
    width: 100%;
  }
`

export const SignInInput = styled(Input)``

export const FormButtonCol = styled.div``

export const FormButton = styled(Button)`
  min-width: 130px;

  div {
    padding: 10px 10px;
  }
`

export const FormStatusText = styled.p`
  padding-left: 20px;
  padding-right: 20px;
`

export const FormResendText = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 0;
`
