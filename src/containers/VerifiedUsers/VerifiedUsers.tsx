import React, { useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import {
  PageHeader,
  PageCardsRow,
  TableCard,
  TableActionsSection,
  SearchBtn,
  TableLoader,
  SearchInput,
} from './VerifiedUsers.style'
import { icons } from '../../assets/icons'
import moment from 'moment'
import { VerifiedUser } from './store/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { getVerifiedUsers } from './store/action'

VerifiedUsers.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function VerifiedUsers({ history, location }: InferProps<typeof VerifiedUsers.propTypes>) {
  const [verifiedUsersLists, setVerifiedUsersLists] = useState<Array<VerifiedUser>>([])

  const { isLoading, verifiedUsers } = useSelector(
    (state: RootState) => ({
      isLoading: state.app.isLoading,
      verifiedUsers: state.verifiedUsers.verifiedUsers,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchVerifiedUsers() {
      await dispatch(getVerifiedUsers())
    })()
  }, [dispatch])

  useEffect(() => {
    setVerifiedUsersLists(verifiedUsers.slice(0, 50))
  }, [verifiedUsers])

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
          <tbody>
            {isLoading ? (
              <TableLoader>
                <img src={icons.iconLoader} alt={'loader'} />
                <span>loading verified users...</span>
              </TableLoader>
            ) : (
              <>
                {verifiedUsersLists.length > 0 &&
                  verifiedUsersLists.map((user, index) => (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.businessId}</td>
                      <td>{`${user.firstName} ${user.lastName}`}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileMoneyNumber}</td>
                      <td>{user.activated}</td>
                      <td>{user.deleted}</td>
                      <td>{moment(user.created).format('DD-MM-YYYY HH:mm:ss')}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </TableCard>
      </PageCardsRow>
    </>
  )
}

export default VerifiedUsers
