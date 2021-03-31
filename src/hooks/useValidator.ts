import { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'

const useValidator = (
  customMessage: Record<string, unknown> = {},
  customValidator: Record<string, unknown> = {}
) => {
  const [show, setShow] = useState(false)
  const validator = new SimpleReactValidator({
    messages: customMessage,
    validators: customValidator,
  })

  if (show) {
    validator.showMessages()
  }

  return [validator, setShow] as any
}

export default useValidator
