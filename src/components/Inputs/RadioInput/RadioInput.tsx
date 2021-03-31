import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { RadioInputContainer, RadioInputWrapper } from './RadioInput.styles'

type ChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void

export type RadioSize = 'small' | 'normal'

RadioInput.defaultProps = {
  disabled: false,
  checked: false,
  error: false,
  size: 'normal',
}

RadioInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired as PropTypes.Validator<ChangeEvent>,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) as PropTypes.Validator<
    string | number
  >,
  disabled: PropTypes.bool as PropTypes.Validator<boolean>,
  error: PropTypes.bool as PropTypes.Validator<boolean>,
  checked: PropTypes.bool as PropTypes.Validator<boolean>,
  id: PropTypes.string.isRequired,
  size: PropTypes.string as PropTypes.Validator<RadioSize>,
}

function RadioInput({
  onChange,
  name,
  id,
  value,
  disabled,
  checked,
  className,
  error,
  size,
}: InferProps<typeof RadioInput.propTypes>) {
  return (
    <>
      <RadioInputContainer className={className || ''} error={error} checked={checked} size={size}>
        <RadioInputWrapper
          type="radio"
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          disabled={disabled}
          checked={checked}
          // defaultChecked={checked}
        />
        <label htmlFor={id}>
          <span />
        </label>
      </RadioInputContainer>
    </>
  )
}

export default RadioInput
