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
  FormButton,
} from './SignIn.style'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import useValidator from '../../hooks/useValidator'
import { signIn } from './store/action'
import { images } from '../../assets/images'

SignIn.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function SignIn({ history, location }: InferProps<typeof SignIn.propTypes>) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validator, showValidationMessage] = useValidator()
  const [destinationPath, setDestinationPath] = useState<string>('')

  const { isAuthenticating } = useSelector((state: RootState) => ({
    isAuthenticating: state.auth.isAuthenticating,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (location.state) {
      const { from } = (location.state as any) || {}
      if (from?.pathname) {
        setDestinationPath(`${from?.pathname}${from?.search || ''}`)
      }
    }
  }, [location.state, dispatch, history])

  const handleSendSignIn = () => {
    if (!validator.allValid()) {
      showValidationMessage(true)
      return
    }
    dispatch(signIn(username, password, history, destinationPath))
  }

  return (
    <SignInWrapper id="wrapper">
      <SignInContainer fluid={true}>
        <SignInRow>
          <SignInCol md={6}>
            <SignInCard>
              <SignInCardHeader>
                <img src={images.imageMazzumaLogo} alt={'mazzuma'} />
              </SignInCardHeader>
              <SignInCardBody>
                <FormGroup>
                  <FormText htmlFor="username" className="col-md-4">
                    Email
                  </FormText>
                  <FormInputCol md={6}>
                    <SignInInput
                      type="text"
                      name="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      error={false}
                    />
                    {validator.message('username', username, 'required', {
                      messages: {
                        required: 'Username is required.',
                      },
                    })}
                  </FormInputCol>
                </FormGroup>
                <FormGroup>
                  <FormText htmlFor="password" className="col-md-4">
                    Password
                  </FormText>
                  <FormInputCol md={6}>
                    <SignInInput
                      type="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      error={false}
                    />
                    {validator.message('password', password, 'required', {
                      messages: {
                        required: 'Password is required.',
                      },
                    })}
                  </FormInputCol>
                </FormGroup>
                <FormButtonRow>
                  <FormButtonCol className="col-md-8 offset-md-4">
                    <FormButton
                      onClick={handleSendSignIn}
                      loading={isAuthenticating}
                      disabled={isAuthenticating}
                      label={'Login'}
                    />
                  </FormButtonCol>
                </FormButtonRow>
              </SignInCardBody>
            </SignInCard>
          </SignInCol>
        </SignInRow>
      </SignInContainer>
    </SignInWrapper>
  )
}

export default SignIn
