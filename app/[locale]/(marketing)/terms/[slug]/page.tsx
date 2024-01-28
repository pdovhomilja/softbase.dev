import React from 'react'
import { allTerms } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-conponent'

async function getDocFromParams(slug: string) {
  const term = allTerms.find(doc => doc.slugAsParams === slug)

  if (!term) notFound()

  return term
}

const TermsPage = async ({ params }: { params: { slug: string } }) => {
  const term = await getDocFromParams(params.slug)
  return (
    <div>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {term.title}
      </h1>
      <div className='py-10'>
        Valid from: <span>{term.validFrom}</span>
      </div>

      <div className='py-10'>
        <Mdx code={term.body.code} />
      </div>
    </div>
  )
}

export default TermsPage
