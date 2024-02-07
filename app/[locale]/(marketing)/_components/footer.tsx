import React, { Suspense } from 'react'
import SessionInfo from '@/components/session-info'

const Footer = () => {
  return (
    <footer className='flex h-20 items-center justify-end px-10 text-xs text-muted-foreground'>
      <Suspense fallback={<div></div>}>
        <SessionInfo />
      </Suspense>
      {new Date().getFullYear()} &copy; Softbase
    </footer>
  )
}

export default Footer
