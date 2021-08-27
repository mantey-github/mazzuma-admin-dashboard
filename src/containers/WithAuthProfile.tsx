import React, { useEffect } from 'react'
import { getCookie } from '../utils/getCookie'
import { useDispatch } from 'react-redux'
import { signOut } from './SignIn/store/action'
import { reSyncAuthProfile } from './App/store/action'

type WithAuthProfileType = <P extends any>(
  WrappedComponent: React.ComponentType<any>
) => React.ComponentClass<P>

const WithAuthProfile = (WrappedComponent: React.ComponentType<any>): WithAuthProfileType => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithAuthProfile = (props: any) => {
    const dispatch = useDispatch()

    useEffect(() => {
      const authTokenCookie = getCookie('_mazzuma_admin_tokid')

      const authProfileCookie = getCookie('_mazzuma_admin_usrid')

      if (!(authTokenCookie && authProfileCookie)) {
        dispatch(signOut(props.history))
        return
      }

      ;(async function reSyncUser() {
        await dispatch(reSyncAuthProfile(JSON.parse(authProfileCookie)))
      })()
    }, [dispatch, props.history])

    return <WrappedComponent {...props} />
  }

  ComponentWithAuthProfile.displayName = `WithAuthProfile(${displayName})`

  return ComponentWithAuthProfile as any
}

export default WithAuthProfile
