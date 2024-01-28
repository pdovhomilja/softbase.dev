import { z } from 'zod'

export const SendFromWebForm = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email({
      message: 'Email must be a valid email'
    }),
  phone: z.string({
    required_error: 'Phone is required',
    invalid_type_error: 'Phone must be a string'
  }),
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),
  message: z
    .string({
      required_error: 'Message is required',
      invalid_type_error: 'Message must be a string'
    })
    .min(3, {
      message: 'Message must be at least 3 characters long'
    }),
  newsletter: z.string(),
  terms: z.string()
})
