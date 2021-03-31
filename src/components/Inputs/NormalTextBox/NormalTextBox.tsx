import React from 'react'
import { NormalTextWrapper } from './NormalTextBox.styles'
import PropTypes, { InferProps } from 'prop-types'

type ChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => void
type BlurEvent = (event: React.FocusEvent<HTMLTextAreaElement>) => void
type FocusEvent = (event: React.FocusEvent<HTMLTextAreaElement>) => void

NormalTextBox.defaultProps = {
  disabled: false,
  onBlur: undefined,
  onFocus: undefined,
  rows: 4,
}

NormalTextBox.propTypes = {
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
  rows: PropTypes.number as PropTypes.Validator<number>,
}

function NormalTextBox({
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
  rows,
}: InferProps<typeof NormalTextBox.propTypes>) {
  return (
    <NormalTextWrapper
      className={className || ''}
      error={error}
      width={width || undefined}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value}
      disabled={disabled}
      rows={rows}
    />
  )
}

export default NormalTextBox
