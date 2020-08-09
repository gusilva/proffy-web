import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

interface SelectOptions {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<SelectOptions>
}

export const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const { label, name, options, ...rest } = props

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="default" id={name} {...rest}>
        <option value="default" disabled hidden>
          Selecione uma opcao
        </option>
        {options.map((opt, idx) => {
          return (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
