import React from 'react'
import MenuClient from './menu-client'

const Footer = () => {
  return (
    <footer className='flex h-20 items-center justify-end px-10 text-xs text-muted-foreground'>
      {new Date().getFullYear()} &copy; Softbase
    </footer>
  )
}

export default Footer
