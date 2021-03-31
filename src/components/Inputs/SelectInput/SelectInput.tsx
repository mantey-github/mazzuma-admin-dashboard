import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { SelectWrapper, SelectIndicator, SelectBorderWrapper } from './SelectInput.style'
import { icons } from '../../../assets/icons'
import { isEmpty } from 'ramda'

type ChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => void

SelectInput.defaultProps = {
  disabled: false,
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) as PropTypes.Validator<
    string | number
  >,
  placeholder: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired as PropTypes.Validator<ChangeEvent>,
  className: PropTypes.string,
  disabled: PropTypes.bool as PropTypes.Validator<boolean>,
}

function SelectInput({
  name,
  value,
  placeholder,
  options,
  onChange,
  error,
  className,
  disabled,
}: InferProps<typeof SelectInput.propTypes>) {
  return (
    <SelectBorderWrapper>
      <SelectIndicator alt="dropdown indicator" src={icons.iconDropdown} />
      <SelectWrapper
        setPlaceholder={isEmpty(value)}
        name={name}
        value={value}
        error={error}
        disabled={disabled}
        className={className || 'empty'}
        onChange={!disabled ? onChange : undefined}
      >
        <option value={placeholder.value} disabled>
          {placeholder.label}
        </option>
        {options &&
          options.map((option, index) => {
            if (option) {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              )
            } else {
              return <option></option>
            }
          })}
      </SelectWrapper>
    </SelectBorderWrapper>
  )
}

export default SelectInput
