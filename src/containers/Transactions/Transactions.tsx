import React, { useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import {
  PageHeader,
  PageCardsRow,
  TableCard,
  TableActionsSection,
  SearchBtn,
  SearchInput,
  TableLoader,
} from './Transactions.style'
import { icons } from '../../assets/icons'
import moment from 'moment'
import { Transaction } from './store/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { getTransactions } from './store/action'

Transactions.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Transactions({ history, location }: InferProps<typeof Transactions.propTypes>) {
  const [transactionsLists, setTransactionsLists] = useState<Array<Transaction>>([])

  const { isLoading, transactions } = useSelector(
    (state: RootState) => ({
      isLoading: state.app.isLoading,
      transactions: state.transactions.transactions,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchTransactions() {
      await dispatch(getTransactions())
    })()
  }, [dispatch])

  useEffect(() => {
    setTransactionsLists(transactions.slice(0, 50))
  }, [transactions])

  return (
    <>
      <PageHeader>
        <h3>Transactions</h3>
        <p>A list of processed mm transactions</p>
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
              {/* <th scope="col">Type</th> */}
              {/* <th scope="col">Service ID</th> */}
              <th scope="col">Business ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">Amount</th>
              <th scope="col">MM Number</th>
              <th scope="col">MM Network</th>
              <th scope="col">Token</th>
              <th scope="col">Success URL</th>
              <th scope="col">Completed At</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableLoader>
                <img src={icons.iconLoader} alt={'loader'} />
                <span>loading transactions...</span>
              </TableLoader>
            ) : (
              <>
                {transactionsLists.length > 0 &&
                  transactionsLists.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <th scope="row">{index + 1}</th>
                      {/* <td>{transaction.type}</td> */}
                      {/* <td>{transaction.serviceId}</td> */}
                      <td>{transaction.businessId}</td>
                      <td>{transaction.orderId}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.mmAccountNumber}</td>
                      <td>{transaction.mmAccountType}</td>
                      <td>{transaction.token}</td>
                      <td className={'successUrl'}>{transaction.successUrl}</td>
                      <td>
                        {transaction.completed
                          ? moment(transaction.completed).format('DD-MM-YYYY HH:mm:ss')
                          : '-'}
                      </td>
                      <td>{moment(transaction.created).format('DD-MM-YYYY HH:mm:ss')}</td>
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

export default Transactions
