import React from 'react'

export default function Experiences() {
  return (
    <>
      <div className='relative h-full bg-white p-5'>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 '></div>

        <div className='ml-16 md:ml-0 md:w-1/2 md:pr-8'>
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group w-100 m-10 flex flex-col gap-3'>
            <div className='bg-linear-to-r rounded-2xl from-blue-500 to-purple-500 flex w-60 text-white px-4 py-2 font-medium '>
              March 14 - September 26
            </div>

            <p className='font-semibold'>Frontend Web Developer</p>
            <span className='text-blue-500 font-medium'>Vergold</span>

            <div className='flex gap-3'>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Next.js</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Tailwind</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Rest APIs</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Git</span>
            </div>

          </div>

        </div>
      </div>

      <div className='relative h-full bg-white p-5 flex-row-reverse'>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 '></div>

        <div className='ml-16 md:ml-0 md:w-1/2 md:pr-8'>
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group w-100 m-10 flex flex-col gap-3'>
            <div className='bg-linear-to-r rounded-2xl from-blue-500 to-purple-500 flex w-60 text-white px-4 py-2 font-medium '>
              March 14 - September 26
            </div>

            <p className='font-semibold'>Frontend Web Developer</p>
            <span className='text-blue-500 font-medium'>Vergold</span>

            <div className='flex gap-3'>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Next.js</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Tailwind</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Rest APIs</span>
              <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Git</span>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
