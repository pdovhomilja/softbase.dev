import './tailwind.css'
import { Skeleton, SVGSkeleton } from './skeleton'

const LoadingSkeleton = () => (
  <>
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-1 items-center space-x-2'>
          <div className='flex h-8 w-[150px] border border-input px-3 py-2 file:border-0 lg:w-[250px]'>
            <Skeleton className='w-[120px] max-w-full' />
          </div>
        </div>
        <div className='ml-auto hidden h-8 items-center justify-center border border-input px-3 transition-colors lg:flex'>
          <Skeleton className='w-[32px] max-w-full' />
          <SVGSkeleton className='mr-2 h-[15px] w-[15px]' />
        </div>
      </div>
      <div className='border'>
        <div className='relative w-full overflow-auto'>
          <table className='w-full caption-bottom'>
            <thead className='[&amp;_tr]:border-b'>
              <tr className='border-b transition-colors'>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[96px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[48px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[48px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[56px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[64px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <div>
                    <Skeleton className='w-[80px] max-w-full' />
                  </div>
                </th>
                <th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>
                  <Skeleton className='w-[56px] max-w-full' />
                </th>
              </tr>
            </thead>
            <tbody className='[&amp;_tr:last-child]:border-0'>
              <tr className='border-b transition-colors'>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <a aria-label='skeleton'>
                      <Skeleton className='w-[160px] max-w-full' />
                    </a>
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[88px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex justify-center'>
                    <Skeleton className='w-[14px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[112px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[168px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[136px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                    <SVGSkeleton className='h-[15px] w-[15px]' />
                  </div>
                </td>
              </tr>
              <tr className='border-b transition-colors'>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <a aria-label='skeleton'>
                      <Skeleton className='w-[168px] max-w-full' />
                    </a>
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[184px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex justify-center'>
                    <Skeleton className='w-[14px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[104px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[256px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[80px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                    <SVGSkeleton className='h-[15px] w-[15px]' />
                  </div>
                </td>
              </tr>
              <tr className='border-b transition-colors'>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <a aria-label='skeleton'>
                      <Skeleton className='w-[96px] max-w-full' />
                    </a>
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[128px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex justify-center'>
                    <Skeleton className='w-[14px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[40px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[232px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div>
                    <Skeleton className='w-[144px] max-w-full' />
                  </div>
                </td>
                <td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
                  <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                    <SVGSkeleton className='h-[15px] w-[15px]' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex items-center justify-between px-2'>
        <div className='flex-1'>
          <Skeleton className='w-[184px] max-w-full' />
        </div>
        <div className='flex items-center space-x-6 lg:space-x-8'>
          <div className='flex items-center space-x-2'>
            <p>
              <Skeleton className='w-[104px] max-w-full' />
            </p>
            <div className='[&amp;>span]:line-clamp-1 flex h-8 w-[70px] items-center justify-between border border-input px-3 py-2'>
              <span>
                <Skeleton className='w-[16px] max-w-full' />
              </span>
              <SVGSkeleton className='h-[24px] w-[24px]' />
            </div>
          </div>
          <div className='flex w-[100px] items-center justify-center'>
            <Skeleton className='w-[88px] max-w-full' />
          </div>
          <div className='flex items-center space-x-2'>
            <div className='hidden h-8 w-8 items-center justify-center border border-input p-0 transition-colors lg:flex'>
              <SVGSkeleton className='h-[15px] w-[15px]' />
            </div>
            <div className='inline-flex h-8 w-8 items-center justify-center border border-input p-0 transition-colors'>
              <SVGSkeleton className='h-[15px] w-[15px]' />
            </div>
            <div className='inline-flex h-8 w-8 items-center justify-center border border-input p-0 transition-colors'>
              <SVGSkeleton className='h-[15px] w-[15px]' />
            </div>
            <div className='hidden h-8 w-8 items-center justify-center border border-input p-0 transition-colors lg:flex'>
              <SVGSkeleton className='h-[15px] w-[15px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

const VisitorSkeleton = () => (
  <div className='flex h-full w-full justify-center p-10'>
    <LoadingSkeleton />
  </div>
)

export default VisitorSkeleton
