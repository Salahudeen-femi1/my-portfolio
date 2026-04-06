import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";

export default function Socials() {
    return (
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
    )
}
