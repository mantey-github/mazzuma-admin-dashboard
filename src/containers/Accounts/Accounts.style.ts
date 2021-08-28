import styled from 'styled-components/macro'
import { Row } from 'react-bootstrap'
import { Button, Input } from '../../components'

export const AccHeader = styled.div`
  h3 {
    font-size: 25px;
    color: #2a2a2a;
    margin-bottom: 2px;
    font-weight: bolder;
  }

  p {
    color: #a8a8a8;
    font-size: 14px;
  }
`

export const AccCardsRow = styled(Row)`
  margin-top: 25px;
`

export const TableActionsSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  div.searchForm {
    display: flex;
    align-items: center;
  }

  span {
    display: inline-flex;
    background: #f5f5f5;
    border-radius: 5px;
    color: #2a2a2a;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 30px;
  }

  span img {
    width: 20px;
    margin-right: 10px;
  }

  span.export {
  }
`

export const TableCard = styled.table.attrs({
  className: 'table table-borderless',
})`
  background: #fafafa;
  border-radius: 8px;

  thead {
    color: #a8a8a8;

    th {
      font-weight: 500;
    }
  }
`

export const SearchBtn = styled(Button)`
  background: #662d91;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  margin-left: 30px;
`

export const SearchInput = styled(Input)`
  width: 350px;
  background: #f5f5f5;
  border: none;
  border-radius: 5px;

  &:focus {
    border: 1.5px solid #662d91;
  }

  &::-webkit-input-placeholder {
    color: #a8a8a8;
    font-weight: 500;
    font-size: 14px;
  }

  &:-ms-input-placeholder {
    color: #a8a8a8;
    font-weight: 500;
    font-size: 14px;
  }

  &::placeholder {
    color: #a8a8a8;
    font-weight: 500;
    font-size: 14px;
  }
`
