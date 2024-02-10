import React from 'react'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { LogoHeader } from '../../(marketing)/_components/logo'
import LocaleToggle from '../../_components/locale-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import AvatarComponent from './avatar'
import MenuComponent from './menu'

const Header = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()

  return (
    <header className='flex h-32 items-center justify-between px-10'>
      <LogoHeader />
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
