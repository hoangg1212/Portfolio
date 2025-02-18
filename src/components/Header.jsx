import React, { useState } from 'react'

import avatar from '../assets/images/avt.jpg'
import { RiMenuSearchLine } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";

import { Link } from 'react-scroll'
const Header = () => {

    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            title: 'Trang chủ',
        },
        {
            id: 2,
            title: 'Giới thiệu',
        },
        {
            id: 3,
            title: 'Dự án',
        },
        {
            id: 4,
            title: 'Kinh nghiệm',
        },
        {
            id: 5,
            title: 'Liên hệ',
        },

    ]

    return (
        <>
            {/* Header */}
            <header>
                <div className='max-w-screen-2xl container w-full mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
                    <div className='flex justify-between items-center h-16'>
                        <div className='flex space-x-2'>
                            <img src={avatar} alt="avatar" className='w-12 h-12 rounded-full' />
                            <h1 className='font-semibold text-xl cursor-pointer'>Lê Huy <span className='text-green-500 text-2xl'>Hoàng</span>
                                <p className='text-sm'>Front-End Developer</p>
                            </h1>
                        </div>
                        {/* Laptop */}
                        <div>
                            <ul className='hidden md:flex space-x-8'>
                                {
                                    navItems.map(({ id, title }) => (
                                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                            <Link
                                                to={title}
                                                smooth={true}
                                                offset={-70}
                                                activeClass='active'>
                                                {title}
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                            <div onClick={() => setMenu(!menu)} className='md:hidden'>
                                {menu ? <RiCloseCircleFill size={24} /> : <RiMenuSearchLine size={24} />}
                            </div>

                        </div>
                    </div>
                    {/* Mobile */}
                    {
                        menu && (
                            <div className='bg-white'>
                                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                                    {
                                        navItems.map(({ id, title }) => (
                                            <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                                                <Link
                                                    onClick={() => setMenu(!menu)}
                                                    to={title}
                                                    smooth={true}
                                                    offset={-70}
                                                    activeClass='active'>
                                                    {title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }

                </div>
            </header>
        </>
    )
}

export default Header
