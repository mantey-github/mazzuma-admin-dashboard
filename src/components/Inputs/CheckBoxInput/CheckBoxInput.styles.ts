import styled, { css } from 'styled-components/macro'
import { RadioSize } from '../RadioInput/RadioInput'

type InputWrapperProps = {
  error?: boolean | null
  checked?: boolean | null
  size?: RadioSize | null
}

export const CheckInputContainer = styled.div<InputWrapperProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  input:checked + label span {
    background: #45abe0;
    border: 2px solid #45abe0;
  }

  label {
    margin-bottom: 0;
  }

  input + label span {
    display: inline-block;
    vertical-align: middle;
    width: ${(props) => (props.size && props.size === 'small' ? '15px' : '18px')};
    height: ${(props) => (props.size && props.size === 'small' ? '15px' : '18px')};
    border: 2px solid #626262;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: -2.5px;
  }

  span::after {
    content: '';
    border: 2.45px solid #fff;
    border-left: 0;
    border-top: 0;
    height: ${(props) => (props.size && props.size === 'small' ? '8px' : '10px')};
    left: ${(props) => (props.size && props.size === 'small' ? '5.5px' : '7px')};
    top: ${(props) => (props.size && props.size === 'small' ? '7px' : '6px')};
    width: ${(props) => (props.size && props.size === 'small' ? '4px' : '5px')};
    position: absolute;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
  }

  ${(props) =>
    props.error &&
    css`
      input + label span {
        //background: #ff6045 !important;
        border: 2px solid #ff6045 !important;
      }

      span::after {
        content: 'x';
        font-style: normal;
        font-size: 14px;
        border: none;
        font-weight: 500;
        color: #ffffff;
        left: 4px;
        top: 2px;
        position: absolute;
        transform: none;
        transition: none;
      }
    `}
`
