import React, { useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import {
  DashHeader,
  DashCardsRow,
  CardsCol,
  TransCol,
  BalanceCol,
  CardItemOne,
  CardItemTwo,
  CardItemThree,
  MMTranGraphicsSection,
  MMTranListsSection,
  BalanceCard,
  TransTitleLabel,
  TransRefCol,
  TransAmtCol,
  MMTransRow,
  TransDivider,
  TransDateCol,
} from './Dashboard.style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'
import urlPaths from '../../utils/urlPaths'
import { getBusinesses } from '../Businesses/store/action'
import { getVerifiedUsers } from '../VerifiedUsers/store/action'
import { getTransactions } from '../Transactions/store/action'
import { pluck, sum } from 'ramda'
import { Transaction } from '../Transactions/store/types'
import moment from 'moment'

Dashboard.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Dashboard({ history, location }: InferProps<typeof Dashboard.propTypes>) {
  const [totalMMTransactions, setTotalMMTransactions] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState<Array<Transaction>>([])

  const { businesses, transactions, verifiedUsers } = useSelector(
    (state: RootState) => ({
      businesses: state.businesses.businesses,
      verifiedUsers: state.verifiedUsers.verifiedUsers,
      transactions: state.transactions.transactions,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchDashboardStats() {
      await dispatch(getBusinesses())
      await dispatch(getVerifiedUsers())
      await dispatch(getTransactions())
    })()
  }, [dispatch])

  useEffect(() => {
    const amount = pluck('amount', transactions).map((value) => parseFloat(value))
    setTotalMMTransactions(sum(amount))
    setRecentTransactions(transactions.slice(0, 10))
  }, [transactions])

  return (
    <>
      <DashHeader>
        <h3>Dashboard</h3>
        <p>A list of mobile money transactions</p>
      </DashHeader>
      <DashCardsRow>
        <TransCol md={9}>
          <div className={'row cards-row'}>
            <CardsCol md={4}>
              <CardItemOne>
                <img src={icons.iconDashboardCardOne} alt={'card icon'} />
                <div>
                  <span className={'count'}>{businesses.length || 0}</span>
                  <p>Registered Businesses</p>
                  <p className={'more'} onClick={() => history.push(urlPaths.BUSINESSES_URL_PATH)}>
                    more...
                  </p>
                </div>
              </CardItemOne>
            </CardsCol>
            <CardsCol md={4}>
              <CardItemTwo>
                <img src={icons.iconDashboardCardTwo} alt={'card icon'} />
                <div>
                  <span className={'count'}>{verifiedUsers.length || 0}</span>
                  <p>Verified Users</p>
                  <p
                    className={'more'}
                    onClick={() => history.push(urlPaths.VERIFIED_USERS_URL_PATH)}
                  >
                    more...
                  </p>
                </div>
              </CardItemTwo>
            </CardsCol>
            <CardsCol md={4}>
              <CardItemThree>
                <img src={icons.iconDashboardCardThree} alt={'card icon'} />
                <div>
                  <span className={'count'}>{transactions.length || 0}</span>
                  <p>MM Transactions</p>
                  <p
                    className={'more'}
                    onClick={() => history.push(urlPaths.MM_TRANSACTIONS_URL_PATH)}
                  >
                    more...
                  </p>
                </div>
              </CardItemThree>
            </CardsCol>
          </div>

          <MMTranListsSection>
            <TransTitleLabel>MM Transactions (recent)</TransTitleLabel>

            {recentTransactions.length > 0 &&
              recentTransactions.map((transaction, index) => (
                <>
                  <MMTransRow className={'row'} key={transaction.id}>
                    <TransRefCol className={'col-md-4'}>
                      <img src={icons.iconMazzumaTransLogo} alt={'mazzuma'} />
                      <div>
                        <p>{transaction.mmAccountNumber}</p>
                        <span>
                          MTN &bull; <span className={'codeLabel'}>657813941909082</span>
                        </span>
                      </div>
                    </TransRefCol>
                    <TransAmtCol className={'col-md-3'}>
                      <p>GH₵ {parseFloat(transaction.amount)}</p>
                      <span>Pending</span>
                    </TransAmtCol>
                    <TransDateCol className={'col-md-5'}>
                      {/* September 29, 2020 at 10:45 AM */}
                      {moment(transaction.created).format('MMMM DD, YYYY [at] h:mm A')}
                    </TransDateCol>
                  </MMTransRow>
                  <TransDivider />
                </>
              ))}
          </MMTranListsSection>
        </TransCol>
        <BalanceCol md={3}>
          <BalanceCard>
            <img src={images.imageMazzumaLogo} alt={'mazzuma logo'} />
            <p className={'notice'}>Current balance:</p>
            <p className={'money'}>
              <span className={'currency'}>GHC</span> {totalMMTransactions}
            </p>
            <span></span>
          </BalanceCard>
        </BalanceCol>
      </DashCardsRow>
    </>
  )
}

export default Dashboard
