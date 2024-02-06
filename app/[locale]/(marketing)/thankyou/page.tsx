import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'
import {
  FaSquareXTwitter,
  FaReddit,
  FaDiscord,
  FaGithub
} from 'react-icons/fa6'

const ThankYouPage = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('ThankYouPage')
  return (
    <div className='flex h-full w-full flex-col items-center justify-center space-y-10'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('description')}
      </h2>
      <p className='text-xl text-muted-foreground'>{t('message')}</p>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <SocialMediaLink
          IconComponent={FaSquareXTwitter}
          text='@NextCRMapp'
          href={'https://twitter.com/NextCRMapp'}
        />
        <SocialMediaLink
          IconComponent={FaReddit}
          text='/r/NextCRM'
          href={'https://reddit.com/r/NextCRM'}
        />
        <SocialMediaLink
          IconComponent={FaDiscord}
          text='NextCRM Discord'
          href={'https://discord.gg/Dd4Aj6S4Dz'}
        />
        <SocialMediaLink
          IconComponent={FaGithub}
          text='NextCRM Github'
          href={'https://github.com/pdovhomilja/nextcrm-app'}
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
