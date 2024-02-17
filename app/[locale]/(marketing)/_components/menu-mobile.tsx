import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Menu } from 'lucide-react'
import Link from 'next/link'

const MenuMobile = ({
  routes
}: {
  routes: { name: string; path: string; active: boolean }[]
}) => {
  return (
    <div className='visible md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu aria-label='Menu' />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='mt-1'>
          {routes
            .map(route => {
              return (
                <Link
                  key={route.path}
                  className='text-sm text-gray-400 hover:text-gray-700 hover:underline'
                  href={route.path}
                  aria-label={route.name}
                >
                  <DropdownMenuItem>{route.name}</DropdownMenuItem>
                </Link>
              )
            })
            .filter((route, index) => routes[index].active === true)}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MenuMobile
