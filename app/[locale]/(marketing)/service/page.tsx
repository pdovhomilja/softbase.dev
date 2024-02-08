import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import InfiniteScroll from '../_components/infinite-scroll'

const ServicePage = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Service')

  const items = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' },
    { id: 7, name: 'seven' },
    { id: 8, name: 'eight' },
    { id: 9, name: 'nine' },
    { id: 10, name: 'ten' },
    { id: 11, name: 'eleven' },
    { id: 12, name: 'twelve' },
    { id: 13, name: 'thirteen' },
    { id: 14, name: 'fourteen' },
    { id: 15, name: 'fifteen' },
    { id: 16, name: 'sixteen' },
    { id: 17, name: 'seventeen' },
    { id: 18, name: 'eighteen' },
    { id: 19, name: 'nineteen' },
    { id: 20, name: 'twenty' }
  ]
  return (
    <div className='space-y-10 overflow-y-auto'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
      <InfiniteScroll items={items} />
    </div>
  )
}

export default ServicePage
