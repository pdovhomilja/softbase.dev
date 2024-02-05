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
  console.log(ip, 'ip')

  try {
    const response = await axios.get(url + '?ip=' + ip, { headers })
    console.log(response.data)
    return NextResponse.json(
      { message: 'success', response: response.data },
      {
        status: 200,
        headers: { 'content-type': 'application/json' }
      }
    )
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
