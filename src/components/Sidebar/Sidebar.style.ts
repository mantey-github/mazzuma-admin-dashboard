import styled from 'styled-components/macro'

export const SidebarWrapper = styled.div`
  img.logo {
    width: 100%;
    object-fit: contain;
  }
`

export const SidebarMenus = styled.div`
  margin-top: 30px;
  margin-left: 5px;
`

export const MenuItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 15px 5px;
  cursor: pointer;
  color: #2a2a2a;

  &:hover {
    color: #662d91;
    font-weight: 600;

    img {
      filter: invert(21%) sepia(58%) saturate(2004%) hue-rotate(253deg) brightness(91%)
        contrast(96%);
    }
  }

  img[alt='dashboard'] {
    margin-right: 10px;
  }

  img[alt='accounts'] {
    margin-right: 10px;
  }

  img[alt='businesses'] {
    margin-right: 10px;
    width: 23.5px;
    height: 23.5px;
  }

  img[alt='contacts'] {
    margin-right: 10px;
    width: 23.5px;
    height: 23.5px;
  }

  img[alt='verified'] {
    margin-right: 10px;
  }

  img[alt='transactions'] {
    margin-right: 10px;
  }
`
