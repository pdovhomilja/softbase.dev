'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import { FormErrors } from './form-errors'
import { Checkbox } from '../checkbox'

interface FormInputProps {
  id: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
  onChange?: () => void
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = '',
      onBlur,
      onChange
    },
    ref
  ) => {
    const { pending } = useFormStatus()

    return (
      <div className='space-y-2'>
        <div className='flex items-center justify-center space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-sm font-semibold text-neutral-700'
            >
              {label}
            </Label>
          ) : null}
          <Checkbox
            name={id}
            id={id}
            onCheckedChange={onChange}
            disabled={pending || disabled}
            className={cn('m-2', className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormCheckbox.displayName = 'FormCheckbox'
