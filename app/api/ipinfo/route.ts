import { prisma } from '@/lib/prisma'
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
  //console.log(ipinfoResult, 'ipinfoResult')

  try {
    const visitor = await prisma.visitors.findUnique({
      where: {
        ip: ip2
      }
    })

    if (visitor) {
      await prisma.visitors.update({
        where: {
          ip: ip2
        },
        data: {
          visits: visitor.visits + 1
        }
      })
      return NextResponse.json(
        {
          message: 'New visitor updated!'
        },
        {
          status: 200
        }
      )
    } else {
      await prisma.visitors.create({
        data: {
          ip: ip2,
          hostname: ipinfoResult.hostname,
          city: ipinfoResult.city,
          region: ipinfoResult.region,
          country: ipinfoResult.country,
          org: ipinfoResult.org,
          postal: ipinfoResult.postal,
          timezone: ipinfoResult.timezone,
          country_code: ipinfoResult.countryCode,
          continent: ipinfoResult.continent.name,
          is_eu: ipinfoResult.isEU
        }
      })
      return NextResponse.json(
        {
          message: 'New visitor created!'
        },
        {
          status: 200
        }
      )
    }
  } catch (e) {
    console.log(e)
    return NextResponse.json('Internal Server Error', { status: 500 })
  }
}
