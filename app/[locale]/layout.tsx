import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { locales } from '@/navigation'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

import { Inter } from 'next/font/google'

import Footer from './(marketing)/_components/footer'
import Header from './(marketing)/_components/header'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={inter.className + 'h-screen overflow-hidden'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex h-screen flex-col overflow-hidden'>
            <Header />
            <main className='mx-auto h-full w-full flex-grow overflow-y-scroll px-5 md:w-2/3 md:px-0'>
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
