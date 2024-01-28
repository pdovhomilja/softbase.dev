import { ImageResponse } from 'next/og'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi'
import { SiPrisma, SiReact, SiOpenai } from 'react-icons/si'

export async function GET(request: Request) {
  try {
    return new ImageResponse(
      (
        <div tw='flex flex-row-reverse h-full w-full bg-neutral-800'>
          <div tw='flex h-full w-full items-center justify-center text-white'>
            test
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    )
  } catch (error: unknown) {
    console.log(error)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
