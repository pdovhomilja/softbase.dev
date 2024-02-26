import React, { Suspense } from 'react'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex h-20 items-center justify-between px-10 text-xs text-muted-foreground'>
      <div>
        <Link
          href={'/login'}
          className='rounded-full border p-2 px-3'
          aria-label='Administration section'
        >
          A
        </Link>
      </div>
      {new Date().getFullYear()} &copy; Softbase
    </footer>
  )
}

export default Footer
