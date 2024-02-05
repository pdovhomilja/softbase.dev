import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const url = process.env.OCTL_API_URL! + 'person-by-email'
  console.log(url, 'url')

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.OCTL_TOKEN!
  }

  const urlParse = new URL(request.url)
  const urlParams = new URLSearchParams(urlParse.search)
  const email = urlParams.get('email')
  const name = urlParams.get('name')

  console.log(name, 'name')
  console.log(email, 'email')

  const body = {
    email: email,
    name: name || null
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
