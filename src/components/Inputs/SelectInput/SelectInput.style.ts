import styled, { css } from 'styled-components/macro'

type SelectStyleProps = {
  error?: boolean | null
  width?: number | null
  setPlaceholder?: boolean | null
}

export const SelectBorderWrapper = styled.div<SelectStyleProps>`
  position: relative;
  margin: 0;
`

export const SelectIndicator = styled.img<SelectStyleProps>`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 16px;
  vertical-align: middle;
  width: 10px;
`

export const SelectWrapper = styled.select<SelectStyleProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 45px;

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
  -webkit-appearance: none;
  cursor: pointer;
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

  option[disabled]:first-child {
    display: none;
  }

  ${(props) =>
    props.setPlaceholder &&
    css`
      color: #3a3d6336; !important;

      option {
        color: #212529 !important;
      }
    `}
`
