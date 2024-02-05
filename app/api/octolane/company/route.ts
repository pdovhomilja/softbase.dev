import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const url = process.env.OCTL_API_URL! + 'company'

  const headers = {
    'x-api-key': '<token>'
  }

  const urlParams = new URLSearchParams(request.url.split('?')[1])
  const domain = urlParams.get('domain')

  const body = {
    //get from url ?domain=example.com

    domain: domain
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
