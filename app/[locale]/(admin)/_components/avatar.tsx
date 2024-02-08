'use client'
import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

const AvatarComponent = ({ avatarImg }: { avatarImg: string }) => {
  const supabase = createClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const handleSetNewPassword = async () => {
    const generatedPassword = (Math.random() + 1).toString(36).substring(7)
    alert(`Your new password is: ${generatedPassword}`)
    await supabase.auth.updateUser({
      password: generatedPassword
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatarImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} className='mt-2'>
        <DropdownMenuItem asChild>
          <Link href={'/dashboard'}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'/dashboard/profile'}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSetNewPassword}>
          Set password
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarComponent
