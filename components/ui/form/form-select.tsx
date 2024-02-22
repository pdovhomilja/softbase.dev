'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import { FormErrors } from './form-errors'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../select'
import { FormControl } from '../form'

interface FormSelectProps {
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

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
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

          <Select disabled={pending || disabled} name={id}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder='Select a verified email to display' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value='m@example.com'>m@example.com</SelectItem>
              <SelectItem value='m@google.com'>m@google.com</SelectItem>
              <SelectItem value='m@support.com'>m@support.com</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'
