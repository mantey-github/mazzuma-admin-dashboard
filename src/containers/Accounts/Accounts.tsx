import React, { useEffect, useState } from 'react'
import {
  AccHeader,
  AccCardsRow,
  TableCard,
  TableActionsSection,
  SearchBtn,
  SearchInput,
  TableLoader,
} from './Accounts.style'
import { icons } from '../../assets/icons'
import { getAccounts } from './store/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import moment from 'moment'
import { Account } from './store/types'

Accounts.propTypes = {}

function Accounts() {
  const [accountLists, setAccountLists] = useState<Array<Account>>([])

  const { isLoading, accounts } = useSelector(
    (state: RootState) => ({
      isLoading: state.app.isLoading,
      accounts: state.accounts.accounts,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchAccounts() {
      await dispatch(getAccounts())
    })()
  }, [dispatch])

  useEffect(() => {
    setAccountLists(accounts.slice(0, 50))
  }, [accounts])

  return (
    <>
      <AccHeader>
        <h3>Accounts</h3>
        <p>A list of accounts</p>
      </AccHeader>
      <AccCardsRow>
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
              <th scope="col">Deleted</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <TableLoader>
                <img src={icons.iconLoader} alt={'loader'} />
                <span>loading accounts...</span>
              </TableLoader>
            ) : (
              <>
                {accountLists.length > 0 &&
                  accountLists.map((account, index) => (
                    <tr key={account.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{account.username}</td>
                      <td>{account.role}</td>
                      <td>{account.active}</td>
                      <td>{account.loggedIn}</td>
                      <td className={'resetToken'}>{account.resetToken || '-'}</td>
                      <td>{account.deleted}</td>
                      <td>{moment(account.created).format('DD-MM-YYYY HH:mm:ss')}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </TableCard>
      </AccCardsRow>
    </>
  )
}

export default Accounts
