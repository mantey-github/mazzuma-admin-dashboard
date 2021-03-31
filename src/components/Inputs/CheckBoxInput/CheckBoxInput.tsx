import React from 'react'
import { CheckInputContainer } from './CheckBoxInput.styles'
import PropTypes, { InferProps } from 'prop-types'

type ChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void

export type CheckBoxSize = 'small' | 'normal'

CheckBoxInput.defaultProps = {
  disabled: false,
  checked: false,
  label: '',
  error: false,
  size: 'normal',
}

CheckBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) as PropTypes.Validator<
    string | number
  >,
  label: PropTypes.string as PropTypes.Validator<string>,
  checked: PropTypes.bool as PropTypes.Validator<boolean>,
  className: PropTypes.string,
  disabled: PropTypes.bool as PropTypes.Validator<boolean>,
  onChange: PropTypes.func.isRequired as PropTypes.Validator<ChangeEvent>,
  error: PropTypes.bool as PropTypes.Validator<boolean>,
  size: PropTypes.string as PropTypes.Validator<CheckBoxSize>,
}

function CheckBoxInput({
  name,
  value,
  label,
  checked,
  className,
  disabled,
  onChange,
  error,
  size,
}: InferProps<typeof CheckBoxInput.propTypes>) {
  return (
    <>
      <CheckInputContainer className={className || ''} error={error} checked={checked} size={size}>
        <input
          id={name}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          // defaultChecked={checked}
        />
        <label htmlFor={name}>
          <span />
          {label}
        </label>
      </CheckInputContainer>
    </>
  )
}

export default CheckBoxInput
