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
} from './Contacts.style'
import { icons } from '../../assets/icons'
import { Contact } from './store/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { getContacts } from './store/action'
import moment from 'moment'

Contacts.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Contacts({ history, location }: InferProps<typeof Contacts.propTypes>) {
  const [contactLists, setContactLists] = useState<Array<Contact>>([])

  const { isLoading, contacts } = useSelector(
    (state: RootState) => ({
      isLoading: state.app.isLoading,
      contacts: state.contacts.contacts,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function fetchContacts() {
      await dispatch(getContacts())
    })()
  }, [dispatch])

  useEffect(() => {
    setContactLists(contacts.slice(0, 50))
  }, [contacts])

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
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Account ID</th>
              <th scope="col">Deleted</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <TableLoader>
                <img src={icons.iconLoader} alt={'loader'} />
                <span>loading contacts...</span>
              </TableLoader>
            ) : (
              <>
                {contactLists.length > 0 &&
                  contactLists.map((contact, index) => (
                    <tr key={contact.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{`${contact.otherName} ${contact.lastName}`}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.email}</td>
                      <td>{contact.accountId}</td>
                      <td>{contact.deleted}</td>
                      <td>{moment(contact.created).format('DD-MM-YYYY HH:mm:ss')}</td>
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

export default Contacts
