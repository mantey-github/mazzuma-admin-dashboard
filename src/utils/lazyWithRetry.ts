import { lazy } from 'react'

const lazyWithRetry = (componentImport: any) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('_mazzuma_admin_dashboard_page_force_refreshed') || 'false'
    )

    try {
      const component = await componentImport()

      window.localStorage.setItem('_mazzuma_admin_dashboard_page_force_refreshed', 'false')

      return component
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming user is not on the latest version of the app. Let's refresh the page immediately.
        window.localStorage.setItem('_mazzuma_admin_dashboard_page_force_refreshed', 'true')
        return window.location.reload()
      }

      throw error
    }
  })

export default lazyWithRetry
