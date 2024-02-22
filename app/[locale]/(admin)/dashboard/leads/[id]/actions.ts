'use server'
import { prisma } from '@/lib/prisma'
import axios from 'axios'

export async function getDomainContacts(domain: string, jobRoles: string) {
  const url = process.env.OCTL_API_URL! + 'people'
  //console.log(url, 'url')
  //console.log(domain, 'domain')

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.OCTL_TOKEN!
  }
  //console.log(headers, 'headers')

  const body = {
    job_roles: [jobRoles],
    company_domain: domain
  }

  //console.log(body, 'body')
  try {
    const response = await axios.post(url, body, { headers })
    console.log(response.data)
    const { data } = response.data
    console.log(data, 'data')
    data.forEach(async (contact: any) => {
      await prisma.visitors_people_by_domain.create({
        data: {
          company_domain: domain,
          full_name: contact.full_name,
          first_name: contact.first_name,
          last_name: contact.last_name,
          linkedin_url: contact.linkedin_url,
          email: contact.email,
          email_verified: contact.email_verified,
          contact_number: contact.contact_number,
          job_title: contact.job_title,
          seniority: contact.seniority,
          current_company: contact.current_company,
          current_company_domain: contact.current_company_domain
        }
      })
      console.log('new contact added')
    })
    return data
  } catch (error: unknown) {
    console.error(error)
    return null
  }
}
