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

  //const ip2 = request.headers.get('x-forwarded-for') as string
  const ip2 = '145.224.105.165'

  const ipinfoResult = await ipinfoWrapper.lookupIp(ip2)

  /*  ipinfoWrapper.lookupASN('AS7922').then((response: AsnResponse) => {
    console.log(response) 
  })
*/
  return NextResponse.json({
    ip2: ip2,
    hostname: ipinfoResult.hostname,
    org: ipinfoResult.org
    //ipinfoResult: ipinfoResult
  })
}
