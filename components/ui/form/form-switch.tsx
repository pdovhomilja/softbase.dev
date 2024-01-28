'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Switch } from '../switch'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'

import { FormErrors } from './form-errors'

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
}

export const FormSwitch = forwardRef<HTMLInputElement, FormInputProps>(
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
      onBlur
    },
    ref
  ) => {
    const { pending } = useFormStatus()

    return (
      <div className='space-y-2'>
        <div className='space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-xs font-semibold text-neutral-700'
            >
              {label}
            </Label>
          ) : null}
          <Switch
            onBlur={onBlur}
            defaultValue={defaultValue}
            required={required}
            name={id}
            id={id}
            disabled={pending || disabled}
            className={cn('h-7 px-2 py-1 text-sm', className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormSwitch.displayName = 'FormSwitch'
