import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import {
  PageHeader,
  PageCardsRow,
  TableCard,
  TableActionsSection,
  SearchBtn,
  SearchInput,
} from './Contacts.style'
import { icons } from '../../assets/icons'

Contacts.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Contacts({ history, location }: InferProps<typeof Contacts.propTypes>) {
  return (
    <>
      <PageHeader>
        <h3>Contact Persons</h3>
        <p>A list of contact persons</p>
      </PageHeader>
      <PageCardsRow>
        <TableActionsSection>
          <span className={'export'}>
            <img src={icons.iconExportDownload} alt={'downlaod'} />
            Export Selected
          </span>

          <span className={'refresh'}>
            <img src={icons.iconRefreshTable} alt={'refresh'} />
            Refresh
          </span>

          <div className={'searchForm'}>
            <SearchInput value={''} name={'search'} placeholder={'Search'} onChange={() => false} />
            <SearchBtn
              label={'Search'}
              type={'button-primary'}
              onClick={() => false}
              disabled={false}
              loading={false}
            />
          </div>
        </TableActionsSection>
        <TableCard>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Active</th>
              <th scope="col">Logged In</th>
              <th scope="col">Reset Token</th>
              <th scope="col">Created At</th>
              <th scope="col">Deleted At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </TableCard>
      </PageCardsRow>
    </>
  )
}

export default Contacts
