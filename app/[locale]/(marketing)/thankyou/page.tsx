import Link from 'next/link'
import React from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'

const ThankYouPage = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center space-y-10'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Thank your for your message.
      </h1>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        We will get back to you as soon as possible.
      </h2>
      <p className='text-xl text-muted-foreground'>
        In the meantime, you can check out our socials:
      </p>
      <div className='flex flex-wrap gap-2'>
        <SocialMediaLink
          IconComponent={FaSquareXTwitter}
          text='@NextCRMapp'
          href={'https://twitter.com/NextCRMapp'}
        />
      </div>
    </div>
  )
}

export default ThankYouPage

interface SocialMediaLinkProps {
  IconComponent: React.ElementType
  text: string
  href: string
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  IconComponent,
  text,
  href
}) => {
  return (
    <div className='flex gap-2'>
      <IconComponent className='h-6 w-6' />
      <Link href={href} target='_blank'>
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
          {text}
        </code>
      </Link>
    </div>
  )
}
