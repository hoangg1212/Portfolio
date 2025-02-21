import React, { useState } from 'react'
import avatar from '../assets/images/avt.jpg'
import { RiMenuSearchLine, RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-scroll'

const Header = () => {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, title: 'Trang chủ' },
        { id: 2, title: 'Giới thiệu' },
        { id: 3, title: 'Dự án' },
        { id: 4, title: 'Kinh nghiệm' },
        { id: 5, title: 'Liên hệ' },
    ];

    return (
        <>
            <header className='w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
                <div className='w-full mx-auto px-4 md:px-20 h-16 flex items-center justify-between'>

                    {/* Bên trái (Avatar + Họ tên) */}
                    <div className='flex space-x-2'>
                        <img src={avatar} alt="avatar" className='w-12 h-12 rounded-full' />
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Lê Huy <span className='text-green-500 text-2xl'>Hoàng</span>
                            <p className='text-sm'>Front-End Developer</p>
                        </h1>
                    </div>

                    {/* Laptop & iPad */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <nav className='flex space-x-4'>
                            {navItems.map(({ id, title }) => (
                                <Link 
                                    key={id} 
                                    to={title} 
                                    smooth={true} 
                                    offset={-70} 
                                    className='hover:scale-105 duration-200 cursor-pointer'>
                                    {title}
                                </Link>
                            ))}
                        </nav>

                        {/* Dropdown chọn ngôn ngữ */}
                        <select className='border-gray-200 rounded-full px-3 py-1 cursor-pointer'>
                            <option value="vn">VN</option>
                            <option value="en">EN</option>
                        </select>
                    </div>

                    {/* Mobile */}
                    <div className='flex md:hidden items-center space-x-4'>
                        {/* Dropdown chọn ngôn ngữ */}
                        <select className='border-gray-200 rounded-full px-3 py-1 cursor-pointer'>
                            <option value="vn">VN</option>
                            <option value="en">EN</option>
                        </select>

                        {/* Nút mở menu */}
                        <div onClick={() => setMenu(!menu)} className='cursor-pointer'>
                            {menu ? <RiCloseCircleFill size={24} /> : <RiMenuSearchLine size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menu && (
                    <div className='bg-white'>
                        <ul className='flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                            {navItems.map(({ id, title }) => (
                                <li key={id} className='hover:scale-105 duration-200 font-semibold cursor-pointer'>
                                    <Link onClick={() => setMenu(!menu)} to={title} smooth={true} offset={-70}>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
