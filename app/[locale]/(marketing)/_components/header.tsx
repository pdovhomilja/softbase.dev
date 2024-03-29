import React from 'react'
import { LogoHeader as Logo } from './logo'
import { ThemeToggle } from '@/components/theme-toggle'
import LocaleToggle from '../../_components/locale-toggle'
import MenuComponent from './menu'
import AvatarComponent from '../../(admin)/_components/avatar'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

const Header = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()

  return (
    <header className='flex h-32 items-center justify-between px-10'>
      <Logo />
      <div className='flex items-center gap-5'>
        <MenuComponent />
        <LocaleToggle />
        <ThemeToggle />
        {data.user && (
          <AvatarComponent avatarImg={data.user?.user_metadata?.avatar_url} />
        )}
      </div>
    </header>
  )
}

export default Header
