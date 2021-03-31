import React from 'react'
import { InputWrapper } from './NormalInput.styles'
import PropTypes, { InferProps } from 'prop-types'

type ChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void
type BlurEvent = (event: React.FocusEvent<HTMLInputElement>) => void
type FocusEvent = (event: React.FocusEvent<HTMLInputElement>) => void

NormalInput.defaultProps = {
  type: 'text',
  disabled: false,
  onBlur: undefined,
  onFocus: undefined,
  placeholder: '',
}

NormalInput.propTypes = {
  type: PropTypes.string as PropTypes.Validator<string>,
  width: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) as PropTypes.Validator<
    string | number
  >,
  error: PropTypes.bool,
  placeholder: PropTypes.string as PropTypes.Validator<string>,
  className: PropTypes.string,
  disabled: PropTypes.bool as PropTypes.Validator<boolean>,
  onBlur: PropTypes.func as PropTypes.Validator<BlurEvent>,
  onFocus: PropTypes.func as PropTypes.Validator<FocusEvent>,
  onChange: PropTypes.func.isRequired as PropTypes.Validator<ChangeEvent>,
}

function NormalInput({
  type,
  width,
  name,
  value,
  error,
  placeholder,
  className,
  disabled,
  onBlur,
  onFocus,
  onChange,
}: InferProps<typeof NormalInput.propTypes>) {
  return (
    <InputWrapper
      className={className || ''}
      error={error}
      type={type}
      width={width || undefined}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value}
      disabled={disabled}
    />
  )
}

export default NormalInput
