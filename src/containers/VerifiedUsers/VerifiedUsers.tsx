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
} from './VerifiedUsers.style'
import { icons } from '../../assets/icons'

VerifiedUsers.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function VerifiedUsers({ history, location }: InferProps<typeof VerifiedUsers.propTypes>) {
  return (
    <>
      <PageHeader>
        <h3>Verified Users</h3>
        <p>A list of verified users</p>
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
              <th scope="col">Business ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Money No.</th>
              <th scope="col">Activated</th>
              <th scope="col">Deleted</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody></tbody>
        </TableCard>
      </PageCardsRow>
    </>
  )
}

export default VerifiedUsers
