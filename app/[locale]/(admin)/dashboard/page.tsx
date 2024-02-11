import { User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  getVisitorsCount,
  getVisitorsCountByMonth
} from '@/actions/dashboard/get-visitors-count'
import Link from 'next/link'
import { getContactsCount } from '@/actions/dashboard/get-contacts-count'

export default async function AdminDashboardPage() {
  const visitorsCount = await getVisitorsCount()
  const leads = await getVisitorsCount(true)
  const contacts = await getContactsCount()

  return (
    <div>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Admin Dashboard
      </h1>
      <p className='mt-4 scroll-m-20 text-lg leading-6 text-gray-500'>
        Welcome to the admin dashboard. You can manage your data here.
      </p>

      <div className='flex flex-wrap gap-2 py-5'>
        <DashboardItem
          title='Total visitors'
          content={visitorsCount}
          IconComponent={User}
        />
        <DashboardItem
          href='/dashboard/leads'
          title='Founded leads'
          content={leads}
          IconComponent={User}
        />
        <DashboardItem
          title='Founded Contacts'
          content={contacts}
          IconComponent={User}
        />
      </div>
    </div>
  )
}

const DashboardItem = ({
  href,
  title,
  content,
  IconComponent
}: {
  href?: string
  title: string
  content: string | number
  IconComponent: any
}) => (
  <Link href={href || '#'}>
    <Card className='min-w-[350px]'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <IconComponent className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-medium'>{content}</div>
      </CardContent>
    </Card>
  </Link>
)
