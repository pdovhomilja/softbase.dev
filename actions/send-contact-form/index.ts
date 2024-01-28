'use server'

import { SendFromWebForm } from './schema'
import { InputType, ReturnType } from './types'

import { createSafeAction } from '@/lib/create-safe-action'

import MessageFromWebForm from '@/emails/message-from-web-form'
import resendHelper from '@/lib/resend'

const handler = async (data: InputType): Promise<ReturnType> => {
  const resend = await resendHelper()

  const { email, phone, name, message, newsletter, terms } = data

  if (!email || !message) {
    return {
      error: 'Email and message are required.'
    }
  }

  if (newsletter === 'on') {
    //console.log('newsletter is  true')
    //User wants to subscribe to newsletter
    const result = await resend.contacts.create({
      email: email,
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1],
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!
    })
    console.log(result, 'result from Resend.com - create contact')
  }
  //console.log(email, phone, name, message, 'From send-contact-form action')
  try {
    //send via Resend.com
    const result = await resend.emails.send({
      from: 'hi@softbase.dev',
      to: 'hi@softbase.dev',
      subject:
        'Message from ' + name + ' via ' + process.env.NEXT_PUBLIC_APP_URL,
      text: message, // Add this line to fix the types issue
      react: MessageFromWebForm({
        email: email,
        phone: phone,
        name: name,
        message: message
      })
    })

    //console.log(result, 'result from Resend.com')
    //console.log('message sent via Resend.com')
  } catch (error) {
    console.log(error)
    return {
      error: 'Failed to send mail to all users.'
    }
  }

  return { data: { email, phone, name, message, newsletter, terms } }
}

export const sendFromWebForm = createSafeAction(SendFromWebForm, handler)
