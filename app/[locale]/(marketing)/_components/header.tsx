import React from 'react'
import { LogoHeader as Logo } from './logo'
import { ThemeToggle } from '@/components/theme-toggle'
import LocaleToggle from './locale-toggle'
import MenuComponent from './menu'

const Header = () => {
  return (
    <header className='flex h-32 items-center justify-between px-10'>
      <Logo />
      <div className='flex items-center gap-5'>
        <MenuComponent />
        <LocaleToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
