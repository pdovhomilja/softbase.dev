import React from 'react'

const InfiniteScroll = ({
  items
}: {
  items: { id: number; name: string }[]
}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-full max-w-screen-lg  overflow-hidden'>
        <div className='animate-skew-scroll mx-auto grid h-[15vh] w-[300px] grid-cols-1 gap-5  sm:w-[600px] sm:grid-cols-2'>
          {items.map((item, index) => (
            <div
              key={index}
              className='flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 flex-none text-violet-600'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m9 12 2 2 4-4' />
              </svg>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll
