import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

const AboutPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('About')
  return (
    <div className='h-full space-y-10 overflow-y-auto'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('weAre')}
      </blockquote>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('weDo')}
      </h2>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('weDoMessage')}
      </blockquote>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('ourValues')}
      </h2>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('ourValuesMessage')}
      </blockquote>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('ourTechStack')}
      </h2>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('ourTechStackMessage')}
      </blockquote>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('hiring')}
      </h2>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('hiringMessage')}
      </blockquote>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('perfectFit')}
      </h2>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('perfectFitMessage')}
      </blockquote>
      <div>
        <Button asChild>
          <Link href={'/contact'} aria-label={t('contactButton')}>
            {t('contactButton')}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default AboutPage
