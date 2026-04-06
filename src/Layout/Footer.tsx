import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <div className='text-gray-300  bg-[#11192b] flex justify-around text-[14px] p-8 min-h-scre'>
            <div>
                <p className='text-xl text-white font-bold'>Salahudeen Abdulazeez F.</p>
                <p className='text-[17px] '>Frontend Engineer</p>
                <span className='text-[12px] '>
                    Passionate about creating new beautiful, functional and user- <br /> centered digital experiences. Always exploring new <br />technologies and pushing the boundaries of what's possible on<br /> the web.
                </span>
            </div>
            <div>
                <h3 className='text-white font-bold mb-5'>Get in touch</h3>
                <span className='flex flex-col gap-1'>
                    <span className='flex gap-1'>
                        <CiMail size={20} />
                        salahudeenabdulazeezfemi@gmail.com
                    </span>
                    <span className='flex gap-1'>
                        <CiLocationOn size={20} />
                        Lagos, Nigeria
                    </span>

                </span>
            </div>
            <div>
                <h3 className='text-white mb-5 font-bold'>Connect</h3>

                <div className='flex gap-3'>
                    <a 
                    href="https://github.com/Salahudeen-femi1" 
                    target="_blank"
                    className='rounded-full cursor-pointer border border-white p-2 '>
                        <LuGithub size={18} />

                    </a>
                    <a href="https://www.linkedin.com/in/abdulazeezsalahudeen-40b160248" 
                    target="_blank"
                    className='rounded-full cursor-pointer border border-white p-2 '>
                        <LuLinkedin size={18} />

                    </a>
                    <a href="https://twitter.com/femi_salahudeen" 
                    target="_blank"
                    className='rounded-full cursor-pointer border border-white p-2 '>
                        <CiTwitter size={18} />

                    </a>
                </div>

            </div>
        </div>
    )
}
