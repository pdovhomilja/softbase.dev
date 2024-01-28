'use client'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

import { FormInput } from '@/components/ui/form/form-input'
import { FormSubmit } from '@/components/ui/form/form-submit'
import { FormCheckbox } from '@/components/ui/form/form-checkbox'

import { FormTextarea } from '@/components/ui/form/form-textarea'

import { sendFromWebForm } from '@/actions/send-contact-form'

import { useAction } from '@/hooks/use-action'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const LeadForm = ({
  email,
  name,
  phone,
  message,
  messagePlaceholder,
  buttonLabel,
  termsCheckboxLabel,
  newsletterCheckboxLabel
}: {
  email: string
  phone: string
  name: string
  message: string
  messagePlaceholder: string
  buttonLabel: string
  termsCheckboxLabel: string
  newsletterCheckboxLabel: string
}) => {
  const [isAccepted, setIsAccepted] = useState(false)

  const { execute, fieldErrors, isLoading } = useAction(sendFromWebForm, {
    onSuccess: data => {
      toast.success('Message sent!')
      redirect('/thankyou')
    },
    onError: error => {
      toast.error(error)
    }
  })

  const onSendMail = async (formData: FormData) => {
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const name = formData.get('name') as string
    const message = formData.get('message') as string
    const newsletter = formData.get('newsletter') as string
    const terms = formData.get('terms') as string

    //console.log(email, phone, name, message, newsletter, terms)
    await execute({ email, phone, name, message, newsletter, terms })
  }

  //console.log(isAccepted, 'isAccepted')
  return (
    <form action={onSendMail} className='space-y-4'>
      <FormInput id='email' label={email} type='text' errors={fieldErrors} />
      <FormInput id='phone' label={phone} type='text' errors={fieldErrors} />
      <FormInput id='name' label={name} type='text' errors={fieldErrors} />
      <FormTextarea
        id='message'
        label={message}
        placeholder={messagePlaceholder}
        required
        errors={fieldErrors}
      />
      <div className='flex items-center justify-center text-xs text-slate-600'>
        <FormCheckbox
          id='terms'
          label={termsCheckboxLabel}
          type='checkbox'
          onChange={() => setIsAccepted(!isAccepted)}
        />
        <span>
          <Link href='/terms/actual' target={'_blank'}>
            (terms)
          </Link>
        </span>
      </div>

      <FormCheckbox
        id='newsletter'
        label={newsletterCheckboxLabel}
        className='text-white'
      />
      <FormSubmit className='w-full' disabled={!isAccepted}>
        {isLoading ? (
          <Loader2 className='h-6 w-6  animate-spin' />
        ) : (
          buttonLabel
        )}
      </FormSubmit>
    </form>
  )
}

export default LeadForm
