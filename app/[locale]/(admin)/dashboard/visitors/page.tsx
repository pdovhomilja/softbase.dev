import { prisma } from '@/lib/prisma'
import React from 'react'
import { DataTable } from './_components/data-table/data-table'
import { columns } from './_components/data-table/columns'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'

const Visitors = async () => {
  //TODO: Type data
  const data: any = await prisma.visitors.findMany({
    where: {
      company_name: {
        not: null
      }
    }
  })
  return (
    <Card>
      <CardTitle className='p-5'>Visitors</CardTitle>
      <CardDescription className='p-5'>
        Visitors to your website
      </CardDescription>
      <CardContent>
        <DataTable data={data} columns={columns} />
      </CardContent>
    </Card>
  )
}

export default Visitors
