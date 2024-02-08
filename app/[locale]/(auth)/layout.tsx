import React from 'react'
import Header from './_components/header'
import Footer from '../_components/footer'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen flex-col overflow-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout
