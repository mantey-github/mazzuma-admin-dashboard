import styled from 'styled-components/macro'
import { Row, Col } from 'react-bootstrap'
import { images } from '../../assets/images'

export const DashHeader = styled.div`
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

export const DashCardsRow = styled(Row)`
  margin-top: 25px;
`

export const CardsCol = styled(Col)``

export const CardItemOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #fdf7e7;
  border-radius: 8px;
  padding: 20px;

  img {
    width: 30px;
  }

  p {
    color: #2a2a2a;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 14px;
  }

  p.more {
    color: #a8a8a8;
    font-size: 13px;
    cursor: pointer;
    font-weight: unset;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  span.count {
    color: #2a2a2a;
    font-weight: bolder;
    line-height: 1.3;
    font-size: 25px;
  }
`

export const CardItemTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #fce8e8;
  border-radius: 8px;
  padding: 20px;

  img {
    width: 30px;
  }

  p {
    color: #2a2a2a;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 14px;
  }

  p.more {
    color: #a8a8a8;
    font-size: 13px;
    cursor: pointer;
    font-weight: unset;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  span.count {
    color: #2a2a2a;
    font-weight: bolder;
    line-height: 1.3;
    font-size: 25px;
  }
`

export const CardItemThree = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #ecf9ec;
  border-radius: 8px;
  padding: 20px;

  img {
    width: 30px;
  }

  p {
    color: #2a2a2a;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 14px;
  }

  p.more {
    color: #a8a8a8;
    font-size: 13px;
    cursor: pointer;
    font-weight: unset;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  span.count {
    color: #2a2a2a;
    font-weight: bolder;
    line-height: 1.3;
    font-size: 25px;
  }
`

export const TransCol = styled(Col)``

export const MMTranGraphicsSection = styled.div`
  background: #fafafa;
  border-radius: 8px;
  min-height: 300px;
  margin-top: 30px;
  padding: 20px;
`

export const MMTranListsSection = styled.div`
  background: #fafafa;
  border-radius: 8px;
  min-height: 300px;
  margin-top: 30px;
  padding: 20px;
`

export const BalanceCol = styled(Col)``

export const BalanceCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff url('${images.imageBalanceCardMaskBg}') no-repeat bottom;
  background-size: cover;
  border: 1px solid #c49ee1;
  border-radius: 8px;
  padding: 20px;
  min-height: 180px;

  img {
    width: 100px;
  }

  p.notice {
    color: #a8a8a8;
    margin-bottom: 0;
    font-size: 13px;
    margin-top: 20px;
  }

  p.money {
    color: #2a2a2a;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span.currency {
    color: #2a2a2a;
    font-size: 10px;
    margin-right: 5px;
  }
`

export const TransTitleLabel = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const MMTransRow = styled(Row)``

export const TransRefCol = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  p {
    margin-bottom: 0;
    color: #2a2a2a;
    font-size: 14px;
  }

  span {
    color: #2a2a2a;
    font-size: 12px;
  }

  span.codeLabel {
    font-size: 10px;
    color: #000000;
    font-weight: 500;
  }
`

export const TransAmtCol = styled(Col)`
  p {
    margin-bottom: 0;
    color: #2a2a2a;
    font-size: 14px;
  }

  span {
    color: #f2c759;
    font-size: 11px;
    background: #fdf7e7;
    font-weight: 500;
    border-radius: 8px;
    padding: 2px 3px;
  }
`

export const TransDateCol = styled(Col)`
  color: #2a2a2a;
  font-size: 14px;
`

export const TransDivider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #f5f5f5;
`
