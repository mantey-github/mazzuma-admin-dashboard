import styled, { css } from 'styled-components/macro'

export const ButtonWrapper = styled.div`
  display: inline-flex;
  min-width: 230px;
`

type ButtonStyleProps = {
  type?: 'button-primary'
  disabled?: boolean
}

export const ButtonStyle = styled.div<ButtonStyleProps>`
  font-size: 16px;
  letter-spacing: 0.05em;
  font-weight: 600;
  padding: 16px 50px;
  min-width: inherit;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  transition: 0.1s;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0);
  text-align: center;
  white-space: nowrap;

  ${(props) => {
    if (props.type === 'button-primary') {
      return css`
        color: #fff;
        background: #45abe0;
        transition: 0.1s;

        &:hover {
          opacity: 0.85;
        }

        ${props.disabled &&
        `
                color: #C9CBD0;
                background: #EFF0F2;
                border: 1px solid #dfdfdf;
                cursor: default;
                padding: 16px 50px;
            `}
      `
    }
  }}
`
