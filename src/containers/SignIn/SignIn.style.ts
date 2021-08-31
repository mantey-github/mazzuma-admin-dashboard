import styled, { css } from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Button, Input } from '../../components'
import { images } from '../../assets/images'

export const SignInWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: block;
`
export const SignInContainer = styled(Container)`
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;
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

export const SignInCard = styled(Card)`
  background: #ffffff;
  background-image: url('${images.imageBalanceCardMaskBg}');
  background-size: cover;
  border: 1px solid #c49ee1;
  border-radius: 8px;
  background-position: inherit;
  background-repeat: no-repeat;
`

export const SignInCardHeader = styled(Card.Header)`
  text-align: center;
  img {
    width: 150px;
    object-fit: contain;
  }
`

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
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
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
    padding-top: 2.5px;
    padding-bottom: 0;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #ff0033;
    font-weight: 400;
    width: 100%;
  }
`

export const SignInInput = styled(Input)``

export const FormButtonCol = styled.div``

export const FormButton = styled(Button)`
  //background: #662d91;
  //border-radius: 5px;
  //color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 30px;
`
