import { prisma } from '@/lib/prisma'
import axios from 'axios'
import { NextResponse } from 'next/server'
import { env } from 'process'

export async function GET(request: Request) {
  const url = process.env.OCTL_API_URL! + 'ip-to-company'
  console.log(url, 'url')

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.OCTL_TOKEN!
  }

  const urlParse = new URL(request.url)
  const urlParams = new URLSearchParams(urlParse.search)

  let ip: string | undefined

  ip = (await urlParams.get('ip')) as string

  if (process.env.NODE_ENV === 'development') {
    ip = '145.224.105.187'
  }

  console.log(ip, 'ip from urlParams - IP to Company')

  try {
    const AxiosResponse = await axios.get(url + '?ip=' + ip, { headers })

    const response = AxiosResponse.data

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
      //console.log(ip, 'ip')
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

      //console.log(updateResponse, 'updateResponse')

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
