import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { LogoHomePage } from './_components/logo'
import { GoogleGeminiEffect } from '@/components/aceternity/google-gemini-effect'

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const t = useTranslations('Homepage')

  return (
    <main className='flex h-full flex-col items-center justify-center '>
      <div className='my-10 flex h-[300px] w-full justify-center'>
        <LogoHomePage />
      </div>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('title')}
      </h2>
      <div className='py-10'>
        {/*         <Button asChild>
          <Link href={'/about'} aria-label='More about us'>
            {t('button')}
          </Link>
        </Button> */}

        <Button asChild>
          <Link href={'/contact'} aria-label='Contact us'>
            {t('button-contact-us')}
          </Link>
        </Button>
      </div>
    </main>
  )
}
