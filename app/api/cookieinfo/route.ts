import { NextResponse } from 'next/server'
import { parse } from 'cookie'

export async function GET(request: Request) {
  //return user cookie info
  const cookie = request.headers.get('cookie')

  const parsedCookie = parse(cookie || '')

  console.log(parsedCookie)

  return NextResponse.json(
    { parsedCookie },
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}
