'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'

const LoginWithGoogle = () => {
  const supabase = createClient()

  const handleLoginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_SUPABASE_CALLBACK_URL
      }
    })

    if (error) {
      console.error('Error logging in with Google', error)
      return
    }
    console.log('Logged in with Google', data)
  }
  return <Button onClick={handleLoginWithGoogle}>Log in with Google</Button>
}

export default LoginWithGoogle
