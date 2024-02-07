import { prisma } from '@/lib/prisma'
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = process.env.OCTL_API_URL! + 'ip-to-company'
  console.log(url, 'url')

  const headers = {
    'x-api-key': process.env.OCTL_TOKEN!
  }

  const ip = request.headers.get('x-forwarded-for') as string
  //const ip = '77.75.77.222'
  //  const ip = urlParams.get('ip')
  //console.log(ip, 'ip')

  try {
    const response = await axios.get(url + '?ip=' + ip, { headers })
    console.log(response.data)

    if (!response) {
      return NextResponse.json(
        { message: 'error', response: 'No data' },
        {
          status: 200,
          headers: { 'content-type': 'application/json' }
        }
      )
    }
    try {
      const updateResponse = await prisma.visitors.update({
        where: { ip: ip },
        data: {
          domain: response.data.domain,
          company_name: response.data.company_name,
          industry: response.data.industry,
          founded_at: response.data.founded_at,
          primary_location: response.data.primary_location,
          linkedin_url: response.data.linkedin_url,
          twitter_url: response.data.twitter_url,
          twitter_followers: response.data.twitter_followers,
          estimated_annual_revenue: response.data.estimated_annual_revenue,
          employee_size_range: response.data.employee_size_range,
          tags: response.data.tags
        }
      })

      return NextResponse.json(
        { message: 'success', response: updateResponse },
        {
          status: 200,
          headers: { 'content-type': 'application/json' }
        }
      )
    } catch (error) {
      console.error(error)
      return NextResponse.json(
        { message: 'error', response: 'Updating visitors details failed' },
        {
          status: 200,
          headers: { 'content-type': 'application/json' }
        }
      )
    }
  } catch (error: unknown) {
    console.error(error)
    return NextResponse.json(
      { message: 'Something went wrong!' },
      {
        status: 500,
        headers: { 'content-type': 'application/json' }
      }
    )
  }
}
