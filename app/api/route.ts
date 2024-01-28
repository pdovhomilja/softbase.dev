import { NextResponse } from 'next/server'

export async function GET(request: Request, response: Response) {
  return NextResponse.json({ message: 'Hello World' })
}
