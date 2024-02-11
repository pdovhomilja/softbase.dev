import { prisma } from '@/lib/prisma'

export async function getVisitorsCount(withData?: boolean) {
  if (withData) {
    const visitors = await prisma.visitors.count({
      where: {
        company_name: {
          not: null
        }
      }
    })
    return visitors
  } else {
    const count = await prisma.visitors.count()
    return count
  }
}

export async function getVisitorsCountByMonth() {
  const counts: any = await prisma.$queryRaw`
    SELECT DATE_TRUNC('month', "createdAt") as month, COUNT(*) 
    FROM "visitors" 
    GROUP BY month
    ORDER BY month;
  `
  const chartData = counts.map((item: any) => {
    return {
      name: item.month.toLocaleString('default', { month: 'long' }),
      Number: Number(item.count)
    }
  })
  return chartData
}
