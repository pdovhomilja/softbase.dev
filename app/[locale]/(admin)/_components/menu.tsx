import React from 'react'
import { useTranslations } from 'next-intl'

import MenuClient from './menu-client'
import MenuMobile from './menu-mobile'

const MenuComponent = () => {
  const t = useTranslations('NavigationAdmin')

  const routes = [
    { name: t('dashboard'), path: '/dashboard', active: true },
    { name: t('visitors'), path: '/dashboard/visitors', active: true }
  ]

  return (
    <>
      <MenuClient routes={routes} />
      <MenuMobile routes={routes} />
    </>
  )
}

export default MenuComponent
