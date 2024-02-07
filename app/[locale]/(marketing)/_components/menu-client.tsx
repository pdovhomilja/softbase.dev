'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuClient = ({
  routes
}: {
  routes: { name: string; path: string; active: boolean }[]
}) => {
  const path = usePathname()
  const pathName = path.split('/')[2]

  return (
    <div className=' hidden gap-2 md:flex'>
      {routes
        .map(route => {
          return (
            <Link key={route.path} href={route.path}>
              <Button variant={'outline'}>{route.name}</Button>
            </Link>
          )
        })
        .filter((route, index) => routes[index].active === true)}
    </div>
  )
}

export default MenuClient
