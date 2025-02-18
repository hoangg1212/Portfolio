import React from 'react'

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <hr class="border-gray-300 border-opacity-50" />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container w-full mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaFacebookSquare size={24} />
                            <FaLinkedin size={24} />
                            <IoLogoYoutube size={24} />
                            <AiFillTikTok size={24} />
                        </div>
                        <div className='mt-8 border-t border-gray-400 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>
                                &copy; {new Date().getFullYear()} My Website. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
