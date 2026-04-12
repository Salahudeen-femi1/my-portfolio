import assets from '../assets/assets'
// import { LuGithub } from "react-icons/lu";
// import { LuLinkedin } from "react-icons/lu";
// import { CiTwitter } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Scrollbar from '../Components/Scrollbar';
import { IoCodeOutline } from "react-icons/io5";
import ExperienceEducationSection from '../Components/Experiences';
import { Link } from 'react-router-dom';
import HeroCarousel from '../Components/Hero';
import OfferCard from '../Components/OfferCard';
import Project from '../Components/Project';
import { FiDatabase } from "react-icons/fi";
import { FiTool } from "react-icons/fi";

export default function Home() {

    const offers = [
        {
            icon: IoCodeOutline,
            title: "Frontend Development",
            description: " Modern responsive web application using React, Next.Js and Typescript with focus on performance and user experience.",
        },
        {
            icon: IoCodeOutline,
            title: "UI/UX Implementation",
            description: "  Pixel perfect implementation of design with smooth animations and interacting using framer motion and Tailwind."
        },
        {
            icon: IoCodeOutline,
            title: "Perfomance Optimization",
            description: " Speed optimization, code splitting, and SEO improvement to ensure your application loads fast and "
        }
    ];

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Salahudeen_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center relative">
                <HeroCarousel />
            </div>


            <div>
                <h2 className='text-center text-5xl md:text-5xl font-bold tracking-wider m-10'>About me</h2>
                <div className='m-10 md:m-20 text-[20px] text-gray-600 flex flex-col gap-7 md:flex-row justify-between w-full text-justify'>
                    <p>
                        I'm a passionate Frontend Engineer with over 3 years of experience crafting digital experiences that users love. My journey started with curiosity about how websites work, and it's evolved into a career focused on building scalable, performant, and beautiful web applications.

                        When I'm not coding, you'll find me exploring new technologies contributing to open-source projects, or sharing knowledge with the developer community. I believe in clean code, continuous learning, and creating solutions that make a real impact.
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
                    <div className='bg-white border border-gray-300 rounded-2xl '>
                        <h3 className='font-semibold text-[25px] '>Core Technology Stack</h3>
                        <div className='grid grid-cols-2 gap-5 p-4'>
                            <div className='bg-gradient-to-r from-black to-gray-700 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center'>
                                <img src={assets.next} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>Next</p>
                            </div>
                            <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 text-center text-white hover:scale-105 hover:bg-white transition-transform duration-300 curs  flex flex-col items-center cursor-pointer'>
                                <img src={assets.tailwind} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>Tailwind</p>
                            </div>
                            <div className='bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 text-center text-white hover:scale-105 hover:bg-white transition-transform duration-300 cursor-pointer  flex flex-col items-center'>
                                <img src={assets.react} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>React</p>
                            </div>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 text-center text-white hover:scale-105 hover:bg-white transition-transform duration-300 cursor-pointer  flex flex-col items-center'>
                                <img src={assets.next} alt="" className='w-10 h-10' />
                                <p className='text-[25px]'>TypeScript</p>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200'>
                        <div className='flex gap-4 mb-5'>
                            <div className='p-3 rounded-xl w-13 bg-gradient-to-br from-orange-500 text-white to-red-600'><FiDatabase size={25} /></div>
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
                        <div className='p-3 rounded-xl bg-gradient-to-br w-13 text-white from-green-500 to-teal-600'><FiTool size={25} /></div>
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

                <div className='w-full mb-10'>

                    <h1 className='text-[50px] font-bold text-center mb-5'>Featured Project</h1>

                    <Project />

                    <div className='flex justify-center'>
                        <Link to="/portfolio" className='text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold tracking-[.2rem] transition-all duration-300 hover:scale-105'>View All Projects</Link>
                    </div>
                </div>

                <div className='mb-10'>
                    <h1 className='text-[50px] font-bold text-center mb-5'>What i offer</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            offers.map((offer) => (
                                <OfferCard
                                    key={offer.title}
                                    icon={offer.icon}
                                    title={offer.title}
                                    description={offer.description}
                                />

                            ))
                        }
                    </div >
                </div>
            </div>

            <div className="bg-[#101828] text-center p-9 flex flex-col gap-4 h-100 justify-center">
                <h1 className='text-center tex-4xl font-bold md:text-6xl tracking-[5px] text-white'>Let's Work Together</h1>
                <p className='text-gray-300'>
                    Ready to bring your ideas to life? I'm always available to work on new <br /> project and collaborate with amazing people.
                </p>

                <div className='mt-6'>
                    <Link
                        to="/contact"
                        className='bg-gradient-to-r  from-purple-600 to-blue-600 text-white tracking-[2px] rounded-4xl px-6 py-4 m-5 cursor-pointer '>
                        Get in touch
                    </Link>
                    <button
                        type="button"
                        onClick={downloadCV}
                        className='border px-8 py-4 border-white mt-10 md:mt-0 rounded-4xl bg-transparent text-white tracking-[6px] hover:bg-white hover:text-black cursor-pointer'
                    >
                        Download CV
                    </button>
                </div>
            </div>

        </>
    )
}
