import Footer from '../_components/footer'
import Header from './_components/header'

export default async function MarketingLayout({
  children
}: {
  children: React.ReactNode
}) {
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
