import React from 'react'
import { useTranslations } from 'next-intl'

import MenuClient from './menu-client'
import MenuMobile from './menu-mobile'

const MenuComponent = () => {
  const t = useTranslations('Navigation')

  const routes = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('service'), path: '/service' },
    { name: t('product'), path: '/product' },
    { name: t('contact'), path: '/contact' }
  ]

  return (
    <>
      <MenuClient routes={routes} />
      <MenuMobile routes={routes} />
    </>
  )
}

export default MenuComponent
