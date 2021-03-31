import styled, { css } from 'styled-components/macro'
import { RadioSize } from './RadioInput'
import { device } from '../../../utils/mediaQueries'

type InputWrapperProps = {
  error?: boolean | null
  checked?: boolean | null
  size?: RadioSize | null
}

export const RadioInputContainer = styled.div<InputWrapperProps>`
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
    width: ${(props) => (props.size && props.size === 'small' ? '20px' : '25px')};
    height: ${(props) => (props.size && props.size === 'small' ? '20px' : '25px')};
    border: 2px solid #626262;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
  }

  span::after {
    content: '';
    border: 2.45px solid #fff;
    border-left: 0;
    border-top: 0;
    height: ${(props) => (props.size && props.size === 'small' ? '10px' : '12px')};
    left: ${(props) => (props.size && props.size === 'small' ? '8px' : '10px')};
    top: ${(props) => (props.size && props.size === 'small' ? '6.5px' : '5.5px')};
    width: ${(props) => (props.size && props.size === 'small' ? '5px' : '6px')};
    position: absolute;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
  }

  @media screen and ${device.smallMobile} {
    span::after {
      top: ${(props) => (props.size && props.size === 'small' ? '7px' : '5px')};
    }
  }

  @media screen and ${device.mobile} {
    span::after {
      top: ${(props) => (props.size && props.size === 'small' ? '7px' : '5px')};
    }
  }

  ${(props) =>
    props.error &&
    css`
      input + label span {
        background: #ff6045 !important;
        border: 2px solid #ff6045 !important;
      }

      span::after {
        content: 'x';
        //font-family:
        font-style: normal;
        font-size: 15px;
        border: none;
        font-weight: bolder;
        color: #ffffff;
        left: 6px;
        top: 2px;
        position: absolute;
        transform: none;
        transition: none;
      }
    `}
`

export const RadioInputWrapper = styled.input<InputWrapperProps>``
