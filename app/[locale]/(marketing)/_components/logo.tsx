'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const LogoHeader = () => {
  const path = usePathname()
  const pathName = path.split('/')[2]

  console.log(pathName, 'pathName')

  return (
    <Link href={'/'}>
      {pathName !== undefined && (
        <Image
          src='/images/sb_logo.png'
          alt='Softbase logo'
          width={200}
          height={200}
        />
      )}
    </Link>
  )
}

export const LogoHomePage = () => {
  return (
    <div className='relative h-full w-full'>
      <Image
        src='/images/sb_logo.png'
        alt='Softbase logo'
        fill
        className='object-contain'
      />
    </div>
  )
}
