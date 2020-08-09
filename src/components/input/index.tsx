import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, name, ...rest } = props
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}
