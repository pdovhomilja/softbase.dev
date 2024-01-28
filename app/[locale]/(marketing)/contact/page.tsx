import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import LeadForm from './_components/lead-form'
import {
  Calendar,
  Coins,
  Landmark,
  MapPin,
  PhoneCall,
  SendHorizonal
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ContactPage = ({
  params: { locale }
}: {
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Contact')
  return (
    <div className='h-full space-y-10 overflow-hidden'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {t('title')}
      </h1>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {t('message')}
      </blockquote>
      <div className='mx-auto flex w-full flex-wrap items-start justify-center gap-5 md:flex-row'>
        <div className='mx-auto h-full w-full min-w-[400px] space-y-10 md:w-1/3'>
          <Card className='w-full'>
            <CardTitle className='px-5 py-10'>{t('contactTitle')}</CardTitle>
            <CardContent>
              <p className='font-bold'>SoftBase s.r.o</p>
              <div className='my-2 flex'>
                <div className='mr-2'>
                  <MapPin className='mr-1 h-6 w-6 text-gray-500' />
                </div>
                <div className='mt-2'>
                  <p>Švábova 772/18, Prague 5, 152 00</p>
                </div>
              </div>
              <div className='my-2 flex'>
                <div className='mr-2'>
                  <PhoneCall className='mr-1 h-6 w-6 text-gray-500' />
                </div>
                <div className='mt-2'>
                  <p className='font-bold'>+420 774 960 960</p>
                </div>
              </div>
              <div className='my-2 flex'>
                <div className='mr-2'>
                  <SendHorizonal className='mr-1 h-6 w-6 text-gray-500' />
                </div>
                <div className='mt-2'>
                  <Link href={'mailto:hi@softbase.dev'} className='font-bold'>
                    hi@softbase.dev
                  </Link>
                </div>
              </div>
              <div className='my-2 flex'>
                <div className='mr-2'>
                  <Coins className='mr-1 h-6 w-6 text-gray-500' />
                </div>
                <div className='mt-2'>
                  <p className='font-bold'>Fio Bank</p>
                  <p>2902352127/2010</p>
                  <p>IBAN:CZ1620100000002902352127</p>
                  <p>SWIFT/BIC:FIOBCZPPXXX</p>
                </div>
              </div>
              <div className='my-2 flex'>
                <div className='mr-2'>
                  <Landmark className='mr-1 h-6 w-6 text-gray-500' />
                </div>
                <div className='mt-2'>
                  <p className='font-bold'>VAT:17197031</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardTitle className='px-5 py-10'>
              {t('contactMeeting.title')}
            </CardTitle>
            <CardHeader>{t('contactMeeting.description')}</CardHeader>
            <CardContent>
              <div className='flex items-center justify-center gap-2'>
                <Calendar className='h-6 w-6 text-gray-500' />
                <span> cal.com/Softbase</span>
                <Button>{t('contactMeeting.buttonLabel')}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='md:2/3 mx-auto w-full min-w-[400px] max-w-[750px]'>
          <Card>
            <CardTitle className='px-5 py-10'>
              {t('contactForm.formTitle')}
            </CardTitle>
            <CardContent>
              <LeadForm
                email={t(`contactForm.email`)}
                phone={t(`contactForm.phone`)}
                name={t(`contactForm.name`)}
                message={t(`contactForm.message`)}
                messagePlaceholder={t(`contactForm.messagePlaceholder`)}
                buttonLabel={t(`contactForm.buttonLabel`)}
                termsCheckboxLabel={t(`contactForm.termsCheckboxLabel`)}
                newsletterCheckboxLabel={t(
                  `contactForm.newsletterCheckboxLabel`
                )}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
