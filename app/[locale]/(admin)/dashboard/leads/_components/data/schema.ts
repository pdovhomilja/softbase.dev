import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const visitorsSchema = z.object({
  id: z.string(),
  company_name: z.string().nullable(),
  domain: z.string().nullable(),
  visits: z.number(),
  country: z.string().nullable(),
  industry: z.string().nullable(),
  updatedAt: z.date()
})

export type Visitor = z.infer<typeof visitorsSchema>
