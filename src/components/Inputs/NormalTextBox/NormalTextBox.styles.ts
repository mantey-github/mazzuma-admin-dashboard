import styled, { css } from 'styled-components/macro'

type InputWrapperProps = {
  error?: boolean | null
  width?: number | null
}

export const NormalTextWrapper = styled.textarea<InputWrapperProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};

  padding: 12px 16px;
  border: 1.5px solid #d1d1d1;
  border-radius: 4px;

  //font-family:
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.2;
  color: #3a3a3a;

  outline: 0;
  text-rendering: optimizeLegibility;
  -webkit-appearance: textfield;
  margin: 5px 0;
  letter-spacing: 0.03em;

  ${(props) =>
    props.error &&
    css`
      border-color: red !important;
    `}
  &:disabled {
    color: #7a8998;
    background: #f5f7fa;
    border: 1.5px solid #dfe5eb;
  }

  &:focus {
    outline-offset: 0;
    outline: -webkit-focus-ring-color auto 0;
    border: 1.5px solid #45abe0;
    transition-duration: 0.3s;
  }

  &::-webkit-input-placeholder {
    color: #3a3d6336;
    font-weight: 300;
    font-size: 17px;
  }

  &:-ms-input-placeholder {
    color: #3a3d6336;
    font-weight: 300;
    font-size: 17px;
  }

  &::placeholder {
    color: #3a3d6336;
    font-weight: 300;
    font-size: 17px;
  }
`
