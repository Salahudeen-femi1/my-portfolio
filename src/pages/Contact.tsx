import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";

export default function Contact() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden '>
      <div className='text-center mt-25 flex flex-col gap-3'>
        <small className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg font-medium'>Let's connect</small>
        <h2 className='text-7xl font-bold text-white'>Get in <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Touch</span></h2>
        <p className='text-gray-200 text-[16px] md:text-[16px] md:  w-1/2 text-center mx-auto'>
          Ready to bring your visiion to life? I'm always excited to discuss new project, creative ideas and opportunities to create something amazing together.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <div className='p-8 relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 flex flex-col gap-3'>
          <div className='rounded-lg bg-blue-500 w-12 h-12 font-bold p-2 flex justify-center items-center text-white'>
            <CiMail size={25} />
          </div>
          <p className='font-medium text-white text-2xl '>Email</p>
          <p className='text-gray-300 text-lg'>Drop me a message anytime</p>
          <p className='bg-gradient-to-r from-purple-400 to-pink-400  bg-clip-text text-transparent'>salahudeenabdulazeezfemi@gmail.com</p>
        </div>
        <div className='p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 flex flex-col gap-3 transition-all duration-300'>
          <div className='rounded-lg bg-green-500 w-12 h-12 font-bold p-2 justify-center items-center text-white'>
            <IoIosCall size={25} />
          </div>
          <p className='font-medium text-white text-2xl '>Phone</p>
          <p className='text-gray-300 text-lg'>Let's have a quick chat</p>
          <p className='bg-gradient-to-r from-purple-400 to-pink-400  bg-clip-text text-transparent'>
            (+234) 7049193149
          </p>
        </div>
        <div className='p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 flex flex-col gap-3'><div className='rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 w-12 h-12 font-bold p-2 justify-center items-center text-white flex flex-col gap-3'>
          <IoLocationOutline size={25} />
        </div>
          <p className='font-medium text-white text-2xl '>Location</p>
          <p className='text-gray-300 text-lg'>Available for local meetups</p>
          <p className='bg-gradient-to-r from-purple-400 to-pink-400  bg-clip-text text-transparent'>
            Lagos, Nigeria
          </p>
        </div>

        <div className='flex flex-col items-center min-w-screen justify-center gap-10'>
          <h2 className=' text-white text-[30px] font-medium'>Connect on Socials </h2>
          <div className='flex gap-9'>
            <a
              href="https://github.com/Salahudeen-femi1"
              target="_blank"
              className='rounded-full cursor-pointer gap-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 '>
              <LuGithub size={30} />

            </a>
            <a href="https://www.linkedin.com/in/abdulazeez-salahudeen-40b160248/"
              target="_blank"
              className='rounded-full cursor-pointer gap-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 '>
              <LuLinkedin size={30} />

            </a>
            <a href="https://twitter.com/femi_salahudeen"
              target="_blank"
              className='rounded-full cursor-pointer gap-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 '>
              <CiTwitter size={30} />

            </a>
          </div>
          <div className='inline-flex gap-2 cursor-pointer items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group'>
            <CiMail size={25} />
            Start a Conversation
          </div>

          <p className='text-white font-medium mb-30'>Usually responds within 24 hours</p>
        </div>
      </div>
    </div>
  )
}
