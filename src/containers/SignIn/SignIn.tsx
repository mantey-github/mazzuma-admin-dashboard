import React, { useEffect, useState } from 'react'
import {
  SignInContainer,
  SignInRow,
  SignInWrapper,
  SignInCol,
  SignInCard,
  SignInCardHeader,
  SignInCardBody,
  FormGroup,
  FormText,
  FormInputCol,
  FormButtonRow,
  FormButtonCol,
  SignInInput,
  FormStatusText,
  FormResendText,
  FormButton,
} from './SignIn.style'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import { Navigation } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import useValidator from '../../hooks/useValidator'
import { sendSignInLink, signIn } from './store/action'
import { useParams } from 'react-router-dom'
import * as queryString from 'querystring'

SignIn.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function SignIn({ history, location }: InferProps<typeof SignIn.propTypes>) {
  const [email, setEmail] = useState('')
  const [validator, showValidationMessage] = useValidator()
  const [destinationPath, setDestinationPath] = useState<string>('')
  const { token } = useParams<Record<string, string | undefined>>()

  const { isAuthenticating, hasSentSigninLink } = useSelector((state: RootState) => ({
    isAuthenticating: state.auth.isAuthenticating,
    hasSentSigninLink: state.auth.hasSentSigninLink,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (location.state) {
      const { from } = (location.state as any) || {}
      if (from?.pathname) {
        if (from?.search) {
          const { token }: any = queryString.parse(from?.search.slice(1))
          dispatch(signIn(token, history, `${from?.pathname}`))
          return
        }
        setDestinationPath(`${from?.pathname}${from?.search || ''}`)
      }
    }
  }, [location.state, dispatch, history])

  const handleSendSignInLink = () => {
    if (!validator.allValid()) {
      showValidationMessage(true)
      return
    }
    dispatch(sendSignInLink(email, history, destinationPath))
  }

  return (
    <SignInWrapper id="wrapper">
      <Navigation />
      <SignInContainer fluid={true}>
        <SignInRow>
          <SignInCol md={6}>
            <SignInCard>
              <SignInCardHeader>
                {!hasSentSigninLink
                  ? `Login - Send Email Link`
                  : `Check your Email for a login link`}
              </SignInCardHeader>

              {!hasSentSigninLink ? (
                <SignInCardBody>
                  <FormGroup>
                    <FormText htmlFor="email" className="col-md-4">
                      E-Mail Address
                    </FormText>
                    <FormInputCol md={6}>
                      <SignInInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        error={false}
                      />
                      {validator.message('email', email, 'required|email', {
                        messages: {
                          required: 'Email Address is required.',
                        },
                      })}
                    </FormInputCol>
                  </FormGroup>
                  <FormButtonRow>
                    <FormButtonCol className="col-md-8 offset-md-4">
                      <FormButton
                        onClick={handleSendSignInLink}
                        loading={isAuthenticating}
                        disabled={isAuthenticating}
                        label={'Send'}
                      />
                    </FormButtonCol>
                  </FormButtonRow>
                </SignInCardBody>
              ) : (
                <SignInCardBody>
                  <FormGroup>
                    <FormStatusText>
                      {`To keep your account secure, we've sent an email to confirm, it's really you.
                      Please sign in using the personalized link in the email.`}
                    </FormStatusText>

                    <FormResendText>
                      {`Haven't`} received it yet? <a href="#">Resend</a>.
                    </FormResendText>
                  </FormGroup>
                </SignInCardBody>
              )}
            </SignInCard>
          </SignInCol>
        </SignInRow>
      </SignInContainer>
    </SignInWrapper>
  )
}

export default SignIn
