import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { device } from '../../utils/mediaQueries'

export const SidebarWrapper = styled.div`
  img.logo {
    width: 150px;
  }
`

export const SidebarMenus = styled.div`
  margin-top: 30px;
  margin-left: 5px;
`

export const MenuItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding-top: 10px;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 10px;
  cursor: pointer;
  color: #2a2a2a;

  &:hover {
    color: #662d91;
    font-weight: 600;
  }

  img[alt='dashboard'] {
    margin-right: 10px;
  }

  img[alt='accounts'] {
    margin-right: 10px;
  }

  img[alt='businesses'] {
    margin-right: 10px;
  }

  img[alt='contacts'] {
    margin-right: 10px;
  }

  img[alt='verified'] {
    margin-right: 10px;
  }

  img[alt='transactions'] {
    margin-right: 10px;
  }
`
