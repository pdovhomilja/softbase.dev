'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuClient = ({
  routes
}: {
  routes: { name: string; path: string }[]
}) => {
  const path = usePathname()
  const pathName = path.split('/')[2]

  return (
    <div className=' hidden gap-2 md:flex'>
      {routes.map(route => {
        return (
          <Link
            key={route.path}
            className={
              'text-md text-gray-400 hover:text-gray-700 hover:underline ' +
              (pathName === route.path.split('/')[1]
                ? 'font-bold underline'
                : '')
            }
            href={route.path}
          >
            {route.name}
          </Link>
        )
      })}
    </div>
  )
}

export default MenuClient
