import { useTranslations } from 'next-intl'
import { LogoHomePage } from './(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { unstable_setRequestLocale } from 'next-intl/server'
import SessionInfo from '@/components/session-info'

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
      <SessionInfo />
      <div className='my-10 h-[300px] w-full'>
        <LogoHomePage />
      </div>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {t('title')}
      </h2>
      <div className='py-10'>
        <Button asChild>
          <Link href={'/about'} aria-label='More about us'>
            {t('button')}
          </Link>
        </Button>
      </div>
    </main>
  )
}
