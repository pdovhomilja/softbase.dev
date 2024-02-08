import { LogoHeader } from '../../(marketing)/_components/logo'
import LocaleToggle from '../../_components/locale-toggle'
import { ThemeToggle } from '@/components/theme-toggle'

const Header = async () => {
  return (
    <header className='flex h-32 items-center justify-between px-10'>
      <LogoHeader />
      <div className='flex items-center gap-5'>
        <LocaleToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
