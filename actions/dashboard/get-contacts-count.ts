import { prisma } from '@/lib/prisma'

export async function getContactsCount() {
  const count = await prisma.visitors_people_by_domain.count() // prisma.visitors_people_by_domain.count is not a function
  return count
}
