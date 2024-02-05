import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const url = process.env.OCTL_API_URL! + 'people'
  console.log(url, 'url')

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.OCTL_TOKEN!
  }

  const body = {
    seniority: ['Manager'],
    job_roles: ['Founder'],
    company_domain: 'octolane.com',
    keyword: 'software'
  }

  try {
    const response = await axios.post(url, body, { headers })
    console.log(response.data)
    return NextResponse.json(
      { message: 'success', response: response.data },
      {
        status: 200,
        headers: { 'content-type': 'application/json' }
      }
    )
  } catch (error: unknown) {
    // console.error(error)
    return NextResponse.json(
      { message: 'Something went wrong!' },
      {
        status: 500,
        headers: { 'content-type': 'application/json' }
      }
    )
  }
}
