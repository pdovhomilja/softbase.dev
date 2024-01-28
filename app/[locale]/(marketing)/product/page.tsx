import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

const ProductPage = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Product')
  return (
    <div className='space-y-10 overflow-y-auto'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
    </div>
  )
}

export default ProductPage
