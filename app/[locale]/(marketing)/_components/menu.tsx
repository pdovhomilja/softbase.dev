import React from 'react'
import { useTranslations } from 'next-intl'

import MenuClient from './menu-client'
import MenuMobile from './menu-mobile'

const MenuComponent = () => {
  const t = useTranslations('Navigation')

  const routes = [
    { name: t('home'), path: '/', active: true },
    { name: t('about'), path: '/about', active: false },
    { name: t('service'), path: '/service', active: false },
    { name: t('product'), path: '/product', active: false },
    { name: t('contact'), path: '/contact', active: true }
  ]

  return (
    <>
      <MenuClient routes={routes} />
      <MenuMobile routes={routes} />
    </>
  )
}

export default MenuComponent
