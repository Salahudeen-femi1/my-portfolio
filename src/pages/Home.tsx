import React from 'react'
import assets from '../assets/assets'
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Scrollbar from '../Components/Scrollbar';
import { IoCodeOutline } from "react-icons/io5";
import ExperienceEducationSection from '../Components/Experiences';

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center relative">
                <img src={assets.mainbg2} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 z-1"></div>
                <div className='absolute top-60 left-40  text-white z-50 shadow-2xl'>
                    <p className='font-medium text-[30px]'>Salahudeen</p>
                    <p className='font-semibold text-4xl uppercase'>Abdulazeez F.</p>
                    <p className='text-sm tracking-[10px] uppercase '>Frontend Engineer</p>
                    <div className='flex gap-3 mt-3'>
                        <button className='rounded-full border border-white px-6 py-2 cursor-pointer'>Resume</button>
                        <button className='rounded-full border border-white px-6 py-2 cursor-pointer'>Portofolio</button>
                    </div>
                </div>

                <div className='fixed top-20 z-50 left-20 text-white'>
                    <div className='flex flex-col items-center gap-2 '>
                        <div className=' w-1 h-60 bg-gray-400 rounded-full text-white'></div>
                        <LuGithub size={20} />
                        <LuLinkedin size={20} />
                        <CiTwitter size={20} />
                    </div>
                </div>
            </div>


            <div>
                <h2 className='text-center text-6xl font-bold tracking-wider m-10'>About me</h2>
                <div className='m-20 text-[20px] text-gray-600 flex justify-between w-ful'>
                    <div>
                        <p>
                            I'm a passionate Frontend Engineer with over 3 years of experience <br /> crafting digital experiences that users love. My journey started with <br /> curiosity about how websites work, and it's evolved into a career focused <br /> on building scalable, performant, and beautiful web applications. <br /><br />

                            When I'm not coding, you'll find me exploring new technologies,<br /> contributing to open-source projects, or sharing knowledge with the <br /> developer community. I believe in clean code, continuous learning, and <br /> creating solutions that make a real impact.
                        </p>

                        <div className='flex gap-3 text-gray-600 items-center mt-8'>
                            <span className='flex items-center gap-1'><CiLocationOn size={20} /> Lagos, Nigeria</span>
                            <span className='flex items-center gap-1'><CiMail size={20} /> Available for work</span>
                        </div>


                    </div>
                    <div>
                        <img src={assets.me} alt="" className='w-[300px] h-[300px] object-cover rounded-lg ' />
                    </div>
                </div>
            </div>

            <div className='bg-[#f9fafb] p-6 w-full'>
                <div className='bg-blue-50 border-blue-200 rounded-full mb-8 text-blue-400 px-4 py-2 inline-flex self-center items-center gap-1 border justify-center '>
                    <IoCodeOutline size={20} /><p>Technical Expertise</p>
                </div>

                <div className='text-center'>
                    <div className='mb-10'>
                        <h2 className='text-[50px] font-bold '>Skills & Technologies</h2>
                        <p className='text-gray-500'>A comprehensive overview of my technical stack, tools and expertise in modern <br />web development</p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-4 mb-10'>
                        <div className='bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 font-medium text-white text-center text-2xl'> 3+ <br />Years Experience</div>
                        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 font-medium text-white text-center text-2xl"> 30+ <br />Years Experience</div>
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 font-medium text-white text-center text-2xl"> 3+ <br />Years Experience</div>
                    </div>
                </div>

                <div className='min-h-scree flex flex-col justify-center m-20'>
                    <Scrollbar />

                </div>

                <div className='grid md:grid-cols-2 gap-5 mb-8'>
                    <div className='bg-wgite border border-gray-300 rounded-2xl '>
                        <h3 className='font-semibold text-[25px] '>Core Technology Stack</h3>
                        <div className='grid grid-cols-2 gap-5 p-4'>
                            <div className='bg-gradient-to-r from-black to-gray-700 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center'>
                                <img src={assets.next} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>Next</p>
                            </div>
                            <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 curs  flex flex-col items-center cursor-pointer'>
                                <img src={assets.tailwind} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>Tailwind</p>
                            </div>
                            <div className='bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer  flex flex-col items-center'>
                                <img src={assets.react} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>React</p>
                            </div>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer  flex flex-col items-center'>
                                <img src={assets.next} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>TypeScript</p>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200'>
                        <div className='flex gap-4 mb-5'>
                            <div className='p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600'></div>
                            <div>
                                <p className='font-semibold text-[18px] '>Currently Exploring </p>
                                <p className='text-gray-500 '>Backend & Emerging Tech</p>
                            </div>
                        </div>


                        <div className='flex flex-wrap gap-3'>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">Node.Js</span>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">Express.js</span>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">SQL</span>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">MongoDB</span>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">Web3</span>
                            <span className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl hover:shadow-sm text-orange-700 font-medium border border-orange-200 px-3 py-2">ReactNative</span>

                        </div>
                    </div>
                </div>

                <div className='bg-white border border-gray-300 mb-8 p-5 rounded-2xl'>
                    <div className='flex gap-4 mb-5'>
                        <div className='p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-600'></div>
                        <div>
                            <p className='font-semibold text-[18px] '>Developer Tools </p>
                            <p className='text-gray-500 '>Professional Workflow</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-3 bg-gray-100 w-50 px-3 py-2 rounded-lg '>
                            <span className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full h-1.5 w-1.5 hover:shadow-sm"></span>
                            <span className=" text-gray-600 font-medium ">Git & Github</span>
                        </div>
                        <div className='flex items-center gap-3 bg-gray-100 w-50 px-3 py-2 rounded-lg '>
                            <span className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full h-1.5 w-1.5 hover:shadow-sm"></span>
                            <span className=" text-gray-600 font-medium ">Vs code</span>
                        </div>
                        <div className='flex items-center gap-3 bg-gray-100 w-50 px-3 py-2 rounded-lg '>
                            <span className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full h-1.5 w-1.5 hover:shadow-sm"></span>
                            <span className=" text-gray-600 font-medium ">Chrome Dev. Tools</span>
                        </div>
                        <div className='flex items-center gap-3 bg-gray-100 w-50 px-3 py-2 rounded-lg '>
                            <span className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full h-1.5 w-1.5 hover:shadow-sm"></span>
                            <span className=" text-gray-600 font-medium ">Postman</span>
                        </div>
                        <div className='flex items-center gap-3 bg-gray-100 w-50 px-3 py-2 rounded-lg '>
                            <span className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full h-1.5 w-1.5 hover:shadow-sm"></span>
                            <span className=" text-gray-600 font-medium ">Figma</span>
                        </div>

                    </div>

                </div>

                <div>
                    <ExperienceEducationSection />
                </div>


            </div>




        </>
    )
}
