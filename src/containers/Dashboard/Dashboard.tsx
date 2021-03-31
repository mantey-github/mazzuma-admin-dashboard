import React, { useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import * as H from 'history'
import { DashboardWrapper, DashboardTitle } from './Dashboard.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

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
      <DashboardWrapper>
        <DashboardTitle>Welcome Home {authProfile?.name}</DashboardTitle>
      </DashboardWrapper>
    </>
  )
}

export default Dashboard
