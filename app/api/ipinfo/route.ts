import { NextResponse } from 'next/server'
import IPinfoWrapper, { IPinfo, AsnResponse } from 'node-ipinfo'

export async function GET(request: Request) {
  const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN as string)

  // Create an empty object to store headers
  const headers: { [key: string]: string } = {}

  // Iterate over each header and add it to the headers object
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  const ip = request.headers.get('cf-connecting-ip') as string
  const ip2 = request.headers.get('x-forwarded-for') as string
  const ipFromHeader = request.headers.get('x-forwarded-for') as string

  console.log(headers, 'HEADERS')
  console.log(ip, 'IP')
  console.log(ip2, 'IP2')
  console.log(ipFromHeader, 'IP From Header')

  const ipinfoResult = ipinfoWrapper
    .lookupIp('145.224.105.165')
    .then((response: IPinfo) => {
      console.log(response, 'IP Response')
      return response
    })

  /*  ipinfoWrapper.lookupASN('AS7922').then((response: AsnResponse) => {
    console.log(response) 
  })
*/
  return NextResponse.json({
    ip: ip,
    ip2: ip2,
    ipFromHeader: ipFromHeader,
    ipinfoResult
  })
}
