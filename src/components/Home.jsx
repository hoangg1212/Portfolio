import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaReact, FaVuejs, FaPython } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileSqlDuotone } from "react-icons/pi";

import { ReactTyped } from "react-typed";
import avatar from '../assets/images/avt.jpg'

const Home = () => {
    return (
        <>
            <section name='Trang chủ'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left */}
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Chào mừng bạn đến với Profile của tôi</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Xin chào, tôi là </h1>
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text=sm md:text-md text-justify'>
                        "Success is not the key to happiness. Happiness is the key to success." — Albert Schweitzer
                        </p>
                        <br />
                        {/* Media Icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2 text-center md:text-left'>
                                <span>Available on</span>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href='https://www.facebook.com/share/18ar5BNgAx/' target='_blank'>
                                            <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/_huyy_hoangg_?igsh=N2htMTZjaDd0cHM1' target='_blank'>
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/@huyhoang3499' target='_blank'>
                                            <IoLogoYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.tiktok.com/@_huyy_hoangg_?_t=ZS-8u0x1d2fCXi&_r=1' target='_blank'>
                                            <AiFillTikTok className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2 text-center md:text-left'>
                                <span>Currently working on</span>
                                <ul className='flex space-x-5'>
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                    <FaVuejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                    <PiFileSqlDuotone className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                    <FaPython className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boder-[2px]' />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={avatar} className='rounded-full md:w-[450px] md:h-[450px] w-full h-full object-cover' alt="avatar" />
                    </div>
                </div>
            </section >
            <hr class="border-gray-300 border-opacity-50 mt-5" />
        </>
    )
}

export default Home
