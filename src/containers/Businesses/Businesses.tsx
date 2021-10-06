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
} from './Businesses.style'
import { icons } from '../../assets/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { Business } from './store/types'
import moment from 'moment'
import { getBusinesses } from './store/action'

Businesses.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Businesses({ history, location }: InferProps<typeof Businesses.propTypes>) {
  const [businessLists, setBusinessLists] = useState<Array<Business>>([])

  const { isLoading, businesses } = useSelector(
    (state: RootState) => ({
      isLoading: state.app.isLoading,
      businesses: state.businesses.businesses,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchBusinesses() {
      await dispatch(getBusinesses())
    })()
  }, [dispatch])

  useEffect(() => {
    setBusinessLists(businesses.slice(0, 50))
  }, [businesses])

  return (
    <>
      <PageHeader>
        <h3>Businesses</h3>
        <p>A list of registered businesses</p>
      </PageHeader>
      <PageCardsRow>
        <TableActionsSection>
          <span className={'export'}>
            <img src={icons.iconExportDownload} alt={'download'} />
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
              <th scope="col">Business Name</th>
              <th scope="col">Email</th>
              <th scope="col">Category</th>
              <th scope="col">Type</th>
              <th scope="col">Network Provider</th>
              <th scope="col">Active</th>
              <th scope="col">Deleted</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableLoader>
                <img src={icons.iconLoader} alt={'loader'} />
                <span>loading businesses...</span>
              </TableLoader>
            ) : (
              <>
                {businessLists.length > 0 &&
                  businessLists.map((business, index) => (
                    <tr key={business.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{business.businessName}</td>
                      <td>{business.businessEmail}</td>
                      <td>{business.category}</td>
                      <td>{business.type}</td>
                      <td>
                        {business.mtnAccount
                          ? `MTN (${business.mtnAccount})`
                          : business.tigoAccount
                          ? `Airtel/Tigo (${business.tigoAccount})`
                          : business.vodafoneAccount
                          ? `Vodafone (${business.vodafoneAccount})`
                          : '-'}
                      </td>
                      <td>{business.active}</td>
                      <td>{business.deleted}</td>
                      <td>{moment(business.created).format('DD-MM-YYYY HH:mm:ss')}</td>
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

export default Businesses
