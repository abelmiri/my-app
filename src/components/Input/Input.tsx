"use client"

import React, { useState, ChangeEvent, FocusEvent } from "react"
import { TextField, TextFieldProps } from "@mui/material"
import { isValidNationalCode } from "@/lib/validation"
import styles from "./styles/Input.module.scss"

interface InputProps extends Omit<TextFieldProps, "onChange"> {
  label: string
  value: string
  onChange: (value: string, isValid: boolean) => void
  // Validation Props
  regex?: RegExp
  minLength?: number
  maxLength?: number
  isNumber?: boolean
  isDate?: boolean
  isNationalCode?: boolean
  errorMessage?: string
}

export default function Input({
  label,
  value,
  onChange,
  regex,
  minLength,
  maxLength,
  isNumber,
  isDate,
  isNationalCode,
  errorMessage,
  className,
  ...props
}: InputProps) {
  const [error, setError] = useState<string | undefined>(undefined)
  const [touched, setTouched] = useState(false)

  const validate = (val: string): string | undefined => {
    if (!val && props.required) {
      return "این فیلد الزامی است"
    }
    if (!val) return undefined // Allow empty if not required, unless handled by required check above

    if (minLength && val.length < minLength) {
      return `حداقل طول ${minLength} کاراکتر است`
    }
    if (maxLength && val.length > maxLength) {
      return `حداکثر طول ${maxLength} کاراکتر است`
    }
    if (isNumber && isNaN(Number(val))) {
      return "باید عدد باشد"
    }
    if (isDate) {
      const date = new Date(val)
      if (isNaN(date.getTime())) {
        return "تاریخ نامعتبر است"
      }
    }
    if (isNationalCode && !isValidNationalCode(val)) {
      return "کد ملی نامعتبر است"
    }
    if (regex && !regex.test(val)) {
      return errorMessage || "فرمت نامعتبر است"
    }
    return undefined
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const validationError = validate(val)

    // Only show error if touched or if there's a change that fixes/breaks validation
    if (touched) {
      setError(validationError)
    }

    onChange(val, !validationError)
  }

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched(true)
    const validationError = validate(value)
    setError(validationError)
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error}
        helperText={error || props.helperText}
        fullWidth
        variant="outlined"
        {...props}
      />
    </div>
  )
}
