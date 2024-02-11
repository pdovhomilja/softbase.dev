import { Badge } from '@/components/ui/badge'
import { badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { format, formatDistanceToNow } from 'date-fns'
import { Globe, Linkedin, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { getDomainContacts } from './actions'
import { revalidatePath } from 'next/cache'

interface VisitorDetailPageProps {
  params: {
    id: string
  }
}

const VisitorPage = async ({ params }: VisitorDetailPageProps) => {
  const { id } = await params

  const data = await prisma.visitors.findUnique({
    where: {
      id: id
    }
  })

  const contacts = await prisma.visitors_people_by_domain.findMany({
    where: {
      company_domain: data?.domain!
    }
  })

  async function handleGetDomainContacts(formData: FormData) {
    'use server'
    console.log('Server action called')
    const domain = formData.get('domain') as string
    console.log(domain, 'domain')
    if (!domain) return null
    await getDomainContacts(domain)
    revalidatePath('/admin/dashboard/leads')
  }

  if (!data) return null

  return (
    <div>
      <Card>
        <CardTitle className='p-5'>Visitor Detail</CardTitle>
        <CardDescription className='p-5'>Visitor ID: {id}</CardDescription>
        <CardContent className='flex flex-wrap justify-center gap-2 md:justify-start'>
          <Card className='min-w-[350px]'>
            <CardTitle className='p-5'>Visitor Info</CardTitle>
            <CardContent>
              <div className='flex gap-2 py-2'>
                <span>Created</span>
                <p>{format(data.createdAt, 'dd/MM//yyyy HH:MM')}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Last visited</span>
                <p>
                  {formatDistanceToNow(new Date(data.updatedAt), {
                    addSuffix: true
                  })}
                </p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Visit count:</span>
                <p>{data.visits}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Country:</span>
                <p>{data.country}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Region:</span>
                <p>{data.region}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>City:</span>
                <p>{data.city}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>TimeZone:</span>
                <p>{data.timezone}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Postal:</span>
                <p>{data.postal}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Continent:</span>
                <p>{data.continent}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>EU (GDPR):</span>
                <p>
                  {data.is_eu ? (
                    <Badge variant={'destructive'}>Yes</Badge>
                  ) : (
                    <Badge>No</Badge>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className='min-w-[350px]'>
            <CardTitle className='p-5'>IP Information</CardTitle>
            <CardContent>
              <div className='py-2'>
                <span>IP:</span>
                <p>{data.ip}</p>
              </div>
              <div className='py-2'>
                <span>Country:</span>
                <p>{data.country}</p>
              </div>
              <div className='py-2'>
                <span>Organization:</span>
                <p>{data.org}</p>
              </div>
              <div className='py-2'>
                <span>Hostname:</span>
                <p>{data.hostname}</p>
              </div>
            </CardContent>
          </Card>
          <Card className='min-w-[350px]'>
            <CardTitle className='p-5'>Company Info</CardTitle>
            <CardContent>
              <div className='flex gap-2 py-2'>
                <span>Company name</span>
                <p>{data.company_name}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Company website</span>
                <Link href={`https://${data.domain}`} target={'_blank'}>
                  {data.domain}
                </Link>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Industry</span>
                <p>{data.industry}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Founded</span>
                <p>{data.founded_at}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>HQ</span>
                <p>{data.primary_location}</p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Revenue</span>
                <p>
                  {data.estimated_annual_revenue
                    ? data.estimated_annual_revenue
                    : 'N/A'}
                </p>
              </div>
              <div className='flex gap-2 py-2'>
                <span>Employees</span>
                <p>{data.employee_size_range}</p>
              </div>
              {data.twitter_followers && (
                <div className='flex gap-2 py-2'>
                  <span>X followers:</span>
                  <p>{data.twitter_followers}</p>
                </div>
              )}

              <div className='flex gap-2 pt-2'>
                <Link
                  href={`https://${data.domain}`}
                  className={badgeVariants({ variant: 'outline' })}
                  target={'_blank'}
                >
                  <Globe className='m-1 h-4 w-4' />
                </Link>
                {data.twitter_url && (
                  <Link
                    href={`https://x.com/${data.twitter_url}`}
                    className={badgeVariants({ variant: 'outline' })}
                    target={'_blank'}
                  >
                    <X className='m-1 h-4 w-4' />
                  </Link>
                )}
                <Link
                  href={`https://linkedin.com/${data.linkedin_url}`}
                  className={badgeVariants({ variant: 'outline' })}
                  target={'_blank'}
                >
                  <Linkedin className='m-1 h-4 w-4' />
                </Link>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className='flex flex-wrap gap-2 p-5'>
          {data.tags.map((tag, index) => (
            <Badge key={index} variant={'outline'}>
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
      <div className='mt-5'>
        <form action={handleGetDomainContacts}>
          <input type='hidden' name='domain' value={data.domain!} />
          <Button type='submit'>Get contacts</Button>
        </form>
      </div>
      <Card className='mt-5'>
        <CardTitle className='p-5'>Company contacts</CardTitle>
        <CardContent>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {contacts.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{contact.full_name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex gap-2 py-2'>
                    <span>Job title:</span>
                    <p>{contact.job_title}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>Company:</span>
                    <p>{contact.current_company}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>Domain:</span>
                    <p>{contact.current_company_domain}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>Seniority:</span>
                    <p>{contact.seniority}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>Email:</span>
                    <p>{contact.email}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>Phone:</span>
                    <p>{contact.contact_number}</p>
                  </div>
                  <div className='flex gap-2 py-2'>
                    <span>LinkedIn:</span>
                    <p>{contact.linkedin_url}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VisitorPage
