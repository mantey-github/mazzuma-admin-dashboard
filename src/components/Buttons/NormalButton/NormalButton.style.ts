import styled, { css } from 'styled-components/macro'

type ButtonStyleProps = {
  type?: 'button-primary' | 'button-secondary'
  disabled?: boolean
}

export const ButtonWrapper = styled.div<ButtonStyleProps>`
  font-style: normal;
  display: inline-flex;
  justify-content: center;
  font-size: 16px;
  letter-spacing: 0.05em;
  padding: 10.5px 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0);
  text-align: center;
  white-space: nowrap;

  ${(props) => {
    if (props.type === 'button-primary') {
      return css`
        color: #ffffff;
        background: #662d91;
        transition: 0.1s;

        &:hover {
          opacity: 0.85;
        }

        ${props.disabled &&
        `
                color: #FDF7F2;
                background: #CAAEB9;
                cursor: default;
                
                &:hover {
                  opacity: unset !important;
                }
            `}
      `
    }
    if (props.type === 'button-secondary') {
      return css`
        color: #662d91;
        background: #efe6f9;
        transition: 0.1s;

        &:hover {
          opacity: 0.85;
        }

        ${props.disabled &&
        `
                color: #FDF7F2;
                background: #CAAEB9;
                cursor: default;
                
                &:hover {
                  opacity: unset !important;
                }
            `}
      `
    }
  }}
`
