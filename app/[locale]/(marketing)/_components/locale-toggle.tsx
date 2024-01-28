import LocaleSwitcher from '@/components/locale-switcher'
import { Link } from '@/navigation'
import React from 'react'

const LocaleToggle = () => {
  return (
    <div className='flex gap-2'>
      <LocaleSwitcher />
    </div>
  )
}

export default LocaleToggle
