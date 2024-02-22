import { prisma } from '@/lib/prisma'
import React, { Suspense } from 'react'
import { DataTable } from './_components/data-table/data-table'
import { columns } from './_components/data-table/columns'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import VisitorSkeleton from './_components/skeleton/visitors-skeleton'
import { visitors } from '@prisma/client'

const Visitors = async () => {
  const data: visitors[] = await prisma.visitors.findMany({
    where: {
      company_name: {
        not: null
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <Card>
      <CardTitle className='p-5'>Leads</CardTitle>
      <CardDescription className='p-5'>
        Leads are the visitors where AI found a company name.
      </CardDescription>
      <CardContent>
        <DataTable data={data} columns={columns} />
      </CardContent>
    </Card>
  )
}

export default Visitors
