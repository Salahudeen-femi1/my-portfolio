import Project from '../Components/Project'

export default function Portfolio() {
  return (
    <div className='p-7 md:mt- bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 '>
      <div className='text-center'>
        <h2 className='font-bold text-5xl text-white mb-2'>My portfolio</h2>
        <p className='text-gray-300 font-medium'>A collection of projects that showcase my skills and creativity</p>

      </div>

      <div className='mt-10'>
        <Project />
      </div>
    </div>
  )
}
