'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from 'public/images/sb_logo.png'

export const LogoHeader = () => {
  const path = usePathname()
  const pathName = path.split('/')[2]

  return (
    <Link href={'/'}>
      {pathName !== undefined && (
        <Image src={logo} alt='Softbase logo' width={200} height={200} />
      )}
    </Link>
  )
}

export const LogoHomePage = () => {
  return (
    <div className='relative h-full w-full xl:w-[70vw] '>
      <Image
        src={logo}
        alt='Softbase logo'
        fill
        className='object-contain'
        placeholder='blur'
      />
    </div>
  )
}
