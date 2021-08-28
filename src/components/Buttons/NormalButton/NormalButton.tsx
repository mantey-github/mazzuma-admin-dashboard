import React from 'react'
import { icons } from '../../../assets/icons'
import { ButtonWrapper } from './NormalButton.style'

NormalButton.defaultProps = {
  id: '',
  label: 'Button',
  type: 'button-primary',
  disabled: false,
  loading: false,
}

type NormalButtonProps = {
  id?: string
  label?: string
  type?: 'button-primary' | 'button-secondary'
  onClick?: (value: any) => void
  disabled?: boolean
  loading?: boolean
  className?: string
}

function NormalButton({
  id,
  label,
  type,
  className,
  disabled,
  loading,
  onClick,
}: NormalButtonProps) {
  return (
    <ButtonWrapper
      className={className}
      id={id}
      type={type}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {!(disabled && loading) ? label : 'Please wait...'}

      {disabled && loading && (
        <img style={{ width: 20, marginLeft: 20 }} src={icons.iconLoader} alt="Loader" />
      )}
    </ButtonWrapper>
  )
}

export default NormalButton
