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
  routes: { name: string; path: string }[]
}) => {
  return (
    <div className='visible md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='mt-1'>
          {routes.map(route => {
            return (
              <Link
                key={route.path}
                className='text-sm text-gray-400 hover:text-gray-700 hover:underline'
                href={route.path}
              >
                <DropdownMenuItem>{route.name}</DropdownMenuItem>
              </Link>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MenuMobile
