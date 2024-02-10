import { prisma } from '@/lib/prisma'
import React from 'react'

interface VisitorDetailPageProps {
  params: {
    id: string
  }
}

const VisitorPage = async ({ params }: VisitorDetailPageProps) => {
  const { id } = params

  const data = await prisma.visitors.findUnique({
    where: {
      id: id
    }
  })

  return (
    <div>
      {id}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default VisitorPage
