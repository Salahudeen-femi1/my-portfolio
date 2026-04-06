
export default function Experiences() {
  return (
    <>

      <div className='relative h-full p-5 bg-white '>
      <h1 className='text-[50px] font-bold text-center mb-5'>Experiences</h1>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px h-230 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div>
        <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 top-60 '></div>

        <div className='ml-16 md:ml-0 md:w-1/2 md:pr-8 mb-0'>
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

        <div className='relative p-5 md:flex md:justify-end'>
          {/* <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div> */}
          <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10 top-40 '></div>

          <div className='ml-16 md:ml-0 md:pr-8'>
            <div className='bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group w-100 m-10 flex flex-col gap-3'>
              <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold w-60 '>
                November 10 - Still a staff
              </div>

              <p className='font-semibold'>Frontend Web Developer</p>
              <span className='text-blue-500 font-medium'>Sunmence</span>

              <div className='flex gap-3'>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>React</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Tailwind</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Rest APIs</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Git</span>
              </div>

            </div>
          </div>

        </div>


        <div className='relative p-5 md:flex md:justify-start'>
          {/* <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div> */}
          <div className='absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full border-4 border-white shadow-lg z-10 top-40 '></div>

          <div className='ml-16 md:ml-0 md:pr-8'>
            <div className='bg-gradient-to-br ffrom-green-50 to-teal-50  p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group w-100 m-10 flex flex-col gap-3'>
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold w-60 ">
                Jan 1st - Feb 10th
              </div>

              <p className='font-semibold'>Frontend Web Developer</p>
              <span className='text-blue-500 font-medium'>Affirment</span>

              <div className='flex gap-3'>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>React</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Tailwind</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Rest APIs</span>
                <span className='rounded-full px-2 py-1 text-[13px] bg-white border border-blue-500 text-blue-500 font-medium'>Git</span>
              </div>

            </div>
          </div>
        </div>
        
      </div>

    </>
  )
}
