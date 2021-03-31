import { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { isEmpty } from 'ramda'

function Toast() {
  const { addToast, removeAllToasts } = useToasts()

  const { toast, removeAllToast } = useSelector(
    (state: RootState) => ({
      toast: state.app.toast,
      removeAllToast: state.app.removeAllToast,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (toast) {
      if (toast.show && !isEmpty(toast.message)) {
        addToast(toast.message, {
          appearance: toast.appearance,
          autoDismiss: toast.autoDismiss,
        })
      }
    }
  }, [toast, addToast])

  useEffect(() => {
    if (removeAllToast) {
      removeAllToasts()
    }
  }, [removeAllToast, removeAllToasts])

  return null
}

export default Toast
