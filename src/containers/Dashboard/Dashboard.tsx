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
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'

Dashboard.propTypes = {
  history: PropTypes.object as PropTypes.Validator<H.History>,
  location: PropTypes.object as PropTypes.Validator<H.Location>,
}

function Dashboard({ history, location }: InferProps<typeof Dashboard.propTypes>) {
  const { authProfile } = useSelector((state: RootState) => ({
    authProfile: state.auth.authProfile,
  }))

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
                  <span className={'count'}>12</span>
                  <p>Registered Businesses</p>
                  <p className={'more'}>more...</p>
                </div>
              </CardItemOne>
            </CardsCol>
            <CardsCol md={4}>
              <CardItemTwo>
                <img src={icons.iconDashboardCardTwo} alt={'card icon'} />
                <div>
                  <span className={'count'}>12</span>
                  <p>Verified Users</p>
                  <p className={'more'}>more...</p>
                </div>
              </CardItemTwo>
            </CardsCol>
            <CardsCol md={4}>
              <CardItemThree>
                <img src={icons.iconDashboardCardThree} alt={'card icon'} />
                <div>
                  <span className={'count'}>12</span>
                  <p>MM Transactions</p>
                  <p className={'more'}>more...</p>
                </div>
              </CardItemThree>
            </CardsCol>
          </div>

          <MMTranListsSection>
            <TransTitleLabel>MM Transactions (recent)</TransTitleLabel>
            <MMTransRow className={'row'}>
              <TransRefCol className={'col-md-4'}>
                <img src={icons.iconMazzumaTransLogo} alt={'mazzuma'} />
                <div>
                  <p>024 000 0000</p>
                  <span>
                    MTN &bull; <span className={'codeLabel'}>657813941909082</span>
                  </span>
                </div>
              </TransRefCol>
              <TransAmtCol className={'col-md-3'}>
                <p>GHC 40.00</p>
                <span>Pending</span>
              </TransAmtCol>
              <TransDateCol className={'col-md-5'}>September 29, 2020 at 10:45 AM</TransDateCol>
            </MMTransRow>
            <TransDivider />

            <MMTransRow className={'row'}>
              <TransRefCol className={'col-md-4'}>
                <img src={icons.iconMazzumaTransLogo} alt={'mazzuma'} />
                <div>
                  <p>024 000 0000</p>
                  <span>
                    MTN &bull; <span className={'codeLabel'}>657813941909082</span>
                  </span>
                </div>
              </TransRefCol>
              <TransAmtCol className={'col-md-3'}>
                <p>GHC 40.00</p>
                <span>Pending</span>
              </TransAmtCol>
              <TransDateCol className={'col-md-5'}>September 29, 2020 at 10:45 AM</TransDateCol>
            </MMTransRow>
            <TransDivider />

            <MMTransRow className={'row'}>
              <TransRefCol className={'col-md-4'}>
                <img src={icons.iconMazzumaTransLogo} alt={'mazzuma'} />
                <div>
                  <p>024 000 0000</p>
                  <span>
                    MTN &bull; <span className={'codeLabel'}>657813941909082</span>
                  </span>
                </div>
              </TransRefCol>
              <TransAmtCol className={'col-md-3'}>
                <p>GHC 40.00</p>
                <span>Pending</span>
              </TransAmtCol>
              <TransDateCol className={'col-md-5'}>September 29, 2020 at 10:45 AM</TransDateCol>
            </MMTransRow>
          </MMTranListsSection>
        </TransCol>
        <BalanceCol md={3}>
          <BalanceCard>
            <img src={images.imageMazzumaLogo} alt={'mazzuma logo'} />
            <p className={'notice'}>Current balance:</p>
            <p className={'money'}>
              <span className={'currency'}>GHC</span> 40,000,000
            </p>
            <span></span>
          </BalanceCard>
        </BalanceCol>
      </DashCardsRow>
    </>
  )
}

export default Dashboard
