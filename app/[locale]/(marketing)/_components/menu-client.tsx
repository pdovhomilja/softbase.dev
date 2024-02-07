import { Button } from '@/components/ui/button'
import Link from 'next/link'

const MenuClient = ({
  routes
}: {
  routes: { name: string; path: string; active: boolean }[]
}) => {
  return (
    <div className=' hidden gap-2 md:flex'>
      {routes
        .map(route => {
          return (
            <Link key={route.path} href={route.path} aria-label={route.name}>
              <Button variant={'outline'}>{route.name}</Button>
            </Link>
          )
        })
        .filter((route, index) => routes[index].active === true)}
    </div>
  )
}

export default MenuClient
