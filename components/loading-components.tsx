import { Loader } from 'lucide-react'

const LoadingComponent = () => {
  return (
    <div className='flex h-full w-full items-center justify-center gap-5'>
      <Loader className='animate-spin' />
    </div>
  )
}

export default LoadingComponent
