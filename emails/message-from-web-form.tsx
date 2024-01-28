import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text
} from '@react-email/components'
import { Markdown } from '@react-email/markdown'
import * as React from 'react'

interface VercelInviteUserEmailProps {
  email: string
  phone: string
  name: string
  message: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL

export const MessageFromWebForm = ({
  email,
  phone,
  name,
  message
}: VercelInviteUserEmailProps) => {
  const previewText = 'Message to all users from:' + baseUrl

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans'>
          <Container className='mx-auto my-[40px] w-[465px] rounded-md border border-solid border-slate-300 p-[20px]'>
            <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
              Message from Softbase web form
            </Heading>
            <Text className='text-[14px] leading-[24px] text-black'>
              <strong>Message from {baseUrl}</strong>
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'Hello Softbase,'}
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'You have a new message from your web form.'}
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'Here are the details:'}
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'Name: ' + name}
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'Email: ' + email}
            </Text>
            <Text className='text-[14px] leading-[24px] text-black'>
              {'Phone: ' + phone}
            </Text>
            <Markdown>{message}</Markdown>
            <Hr className='mx-0 my-[26px] w-full border border-solid border-[#eaeaea]' />
            <Text className='text-xs text-black text-muted-foreground'>
              You received this email because you are a user of the associated
              with Softbase Web Form. If you think you received this email by
              mistake, please contact us at hi@nextcrm.dev
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default MessageFromWebForm
