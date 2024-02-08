'use client'

import { useRouter } from 'next/navigation'
import { login } from '../login/actions'
import { Button } from '@/components/ui/button'

const Login = () => {
  const router = useRouter()

  return <Button formAction={login}>Log in</Button>
}

export default Login
