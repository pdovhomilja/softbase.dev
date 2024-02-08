import { Button } from '@/components/ui/button'
import { login, signup } from './actions'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import { FormInput } from '@/components/ui/form/form-input'
import Login from '../_components/log-in'
import LoginWithGoogle from '../_components/login-with-google'

export default function LoginPage() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Card className='min-w-[500px] max-w-lg'>
        <CardTitle className='p-5'>Login</CardTitle>
        <CardDescription className='p-5'>
          Log in or sign up to access your account
        </CardDescription>
        <CardContent>
          <form>
            <FormInput id='email' label='Email' type='email' required />
            <FormInput
              id='password'
              label='Password'
              type='password'
              required
            />
            <div className='flex gap-2 py-5'>
              <Login />
              {/*     <Button formAction={signup}>Sign up</Button> */}
            </div>
          </form>
          <div className='flex gap-2 py-5'>
            <LoginWithGoogle />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
