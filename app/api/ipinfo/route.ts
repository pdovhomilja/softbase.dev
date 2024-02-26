import { prisma } from '@/lib/prisma'
import axios from 'axios'
import { NextResponse } from 'next/server'
import IPinfoWrapper from 'node-ipinfo'

export async function GET(request: Request) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json(
      {
        message: 'Development mode - nothing to track!'
      },
      {
        status: 200
      }
    )
  }
  const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN as string)

  // Create an empty object to store headers
  const headers: { [key: string]: string } = {}

  // Iterate over each header and add it to the headers object
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  const ip2 = request.headers.get('x-forwarded-for') as string
  const referrer = request.headers.get('referer') as string
  //const ip2 = '77.75.77.222'

  if (!ip2) {
    return NextResponse.json(
      {
        message: 'No IP address found!'
      },
      {
        status: 400
      }
    )
  }

  const ipinfoResult = await ipinfoWrapper.lookupIp(ip2)
  console.log(ipinfoResult, 'ipinfoResult')

  if (!ipinfoResult || ipinfoResult.bogon) {
    return NextResponse.json(
      {
        message: 'No IP info found!'
      },
      {
        status: 400
      }
    )
  }

  try {
    const visitor = await prisma.visitors.findUnique({
      where: {
        ip: ip2
      }
    })

    if (
      visitor?.updatedAt &&
      new Date().getTime() - visitor.updatedAt.getTime() < 1000 * 60 * 60 * 24
    ) {
      return NextResponse.json(
        {
          message: 'Visitor already updated!'
        },
        {
          status: 200
        }
      )
    }

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
          host: process.env.NEXT_PUBLIC_APP_URL,
          referrer: referrer,
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

      await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/octolane/iptocompany?ip=${ip2}`
      )

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
