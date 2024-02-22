'use client'

import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function SubmitButton({ value }: { value: string }) {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' aria-disabled={pending}>
      {pending ? <Loader className='animate-spin' /> : value}
    </Button>
  )
}
