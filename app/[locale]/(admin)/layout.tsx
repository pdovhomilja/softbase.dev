import React from 'react'

import Footer from '../_components/footer'
import Header from './_components/header'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }
  return (
    <div className='flex h-screen flex-col overflow-hidden'>
      <Header />
      <main className='mx-auto h-full w-full flex-grow overflow-y-scroll px-5 md:w-2/3 md:px-0'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AdminLayout
