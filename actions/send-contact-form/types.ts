import { z } from 'zod'
import { ActionState } from '@/lib/create-safe-action'
import { SendFromWebForm } from './schema'

type Message = {
  email: string
  phone: string
  name: string
  message: string
  newsletter: string
  terms: string
}

export type InputType = z.infer<typeof SendFromWebForm>
export type ReturnType = ActionState<InputType, Message>
