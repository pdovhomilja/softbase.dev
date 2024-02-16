import { GeistSans } from 'geist/font/sans'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { locales } from '@/navigation'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

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

const RootLayout = ({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  return (
    <html lang={locale} className={GeistSans.className}>
      <body className={'h-screen overflow-hidden'}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
