import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const images = [
  {
    src: '/images/product/nextcrm/nextcrm-web.png'
  },
  {
    src: '/images/product/nextcrm/nextcrm-app-dark.png'
  },
  {
    src: '/images/product/nextcrm/nextcrm-github.png'
  }
]

const ProductPage = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Product')
  return (
    <div className=' space-y-10 overflow-y-auto'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
      <p className='text-xl text-muted-foreground'>{t('description')}</p>
      <div className='flex w-full justify-between'>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          NextCRM
        </h2>
        <Button>
          <Link href={'/product/nextcrm'}> {t('detailButton')}</Link>
        </Button>
      </div>
      <div className='flex flex-wrap justify-center  '>
        <div className='w-1/2 min-w-[500px] '>text</div>
        <div className='relative h-[600px] w-1/2 min-w-[500px] items-center justify-center'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={images[0].src}
                  fill
                  alt='NextCRM Web image'
                  className='relative h-full w-full object-contain p-5'
                />
              </TooltipTrigger>
              <TooltipContent className='h-[60vh] w-[80vh]' align={'center'}>
                <Image
                  src={images[0].src}
                  fill
                  alt='NextCRM Web image'
                  className='relative h-full w-full object-contain p-5'
                />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
