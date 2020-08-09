import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

export const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const { label, name, ...rest } = props
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea type="text" id={name} {...rest} />
    </div>
  )
}
