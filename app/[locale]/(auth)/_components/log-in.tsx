'use client'

import { useFormStatus } from 'react-dom'
import { login } from '../login/actions'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

const Login = () => {
  const { pending } = useFormStatus()
  console.log(pending, 'pending')
  return (
    <Button formAction={login} disabled={pending}>
      {pending ? <Loader className='animate-spin' /> : 'SignIn'}
    </Button>
  )
}

export default Login
