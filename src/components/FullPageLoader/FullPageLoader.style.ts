import styled from 'styled-components/macro'
import { device } from '../../utils/mediaQueries'

export const PreLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  z-index: 99999;
  background: #fff;

  &.cssload-speeding-wheel {
    position: absolute;
    top: calc(50% - 3.5px);
    left: calc(50% - 3.5px);
  }

  .loader,
  .loader__figure {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .loader {
    overflow: visible;
    padding-top: 2em;
    height: 0;
    width: 2em;
  }

  .loader__figure {
    height: 0;
    width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 0 solid #1976d2;
    border-radius: 50%;
    -webkit-animation: loader-figure 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    -moz-animation: loader-figure 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: loader-figure 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .loader__label {
    margin: auto;
    text-align: center;
    top: 56%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;

    @media screen and ${device.smallMobile} {
      top: 59% !important;
      white-space: initial !important;
      line-height: 1.7em !important;
      width: 300px;
    }

    @media screen and ${device.mobile} {
      top: 55% !important;
      white-space: initial !important;
      line-height: 1.7em !important;
    }

    font-size: 1em;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    color: #1976d2;
    white-space: nowrap;
    -webkit-animation: loader-label 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    -moz-animation: loader-label 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: loader-label 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  @-webkit-keyframes loader-figure {
    0% {
      height: 0;
      width: 0;
      background-color: #1976d2;
    }
    29% {
      background-color: #1976d2;
    }
    30% {
      height: 2em;
      width: 2em;
      background-color: transparent;
      border-width: 1em;
      opacity: 1;
    }
    to {
      height: 2em;
      width: 2em;
      border-width: 0;
      opacity: 0;
      background-color: transparent;
    }
  }

  @-moz-keyframes loader-figure {
    0% {
      height: 0;
      width: 0;
      background-color: #1976d2;
    }
    29% {
      background-color: #1976d2;
    }
    30% {
      height: 2em;
      width: 2em;
      background-color: transparent;
      border-width: 1em;
      opacity: 1;
    }
    to {
      height: 2em;
      width: 2em;
      border-width: 0;
      opacity: 0;
      background-color: transparent;
    }
  }

  @keyframes loader-figure {
    0% {
      height: 0;
      width: 0;
      background-color: #1976d2;
    }
    29% {
      background-color: #1976d2;
    }
    30% {
      height: 2em;
      width: 2em;
      background-color: transparent;
      border-width: 1em;
      opacity: 1;
    }
    to {
      height: 2em;
      width: 2em;
      border-width: 0;
      opacity: 0;
      background-color: transparent;
    }
  }

  @-webkit-keyframes loader-label {
    0% {
      opacity: 0.25;
    }
    30% {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  @-moz-keyframes loader-label {
    0% {
      opacity: 0.25;
    }
    30% {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  @keyframes loader-label {
    0% {
      opacity: 0.25;
    }
    30% {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
`
