import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/images/avt.jpg';
import { RiMenuSearchLine, RiCloseCircleFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [menu, setMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('home'); 

    const navItems = [
        { id: 1, key: 'home' },
        { id: 2, key: 'about' },
        { id: 3, key: 'projects' },
        { id: 4, key: 'experience' },
        { id: 5, key: 'contact' },
    ];

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header className='w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
            <div className='w-full mx-auto px-4 md:px-20 h-16 flex items-center justify-between'>

                {/* Bên trái (Avatar + Họ tên) */}
                <div className='flex space-x-2'>
                    <img src={avatar} alt="avatar" className='w-12 h-12 rounded-full' />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        {t('myProfilo.last_name')} <span className='text-green-500 text-2xl'> {t('myProfilo.name')}</span>
                        <p className='text-sm'>Front-End Developer</p>
                    </h1>
                </div>

                {/* Laptop & iPad */}
                <div className='hidden md:flex items-center space-x-8'>
                    <nav className='flex space-x-4'>
                        {navItems.map(e => (
                            <Link
                                key={e.id}
                                to={e.key}
                                smooth={true}
                                offset={-70}
                                className={`relative hover:scale-105 duration-200 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 ${activeNav === e.key ? 'after:w-full' : 'after:w-0'
                                    }`}
                                onClick={() => setActiveNav(e.key)}
                            >
                                {t(`nav.${e.key}`)}
                            </Link>
                        ))}
                    </nav>

                    {/* Dropdown chọn ngôn ngữ */}
                    <select
                        className='border-gray-200 rounded-full px-3 py-1 cursor-pointer'
                        onChange={handleLanguageChange}
                        defaultValue={i18n.language || 'en'}
                    >
                        <option value="vn">VN</option>
                        <option value="en">EN</option>
                    </select>
                </div>

                {/* Mobile */}
                <div className='flex md:hidden items-center space-x-4'>
                    {/* Dropdown chọn ngôn ngữ */}
                    <select
                        className="border-gray-200 rounded-full px-3 py-1 cursor-pointer"
                        onChange={handleLanguageChange}
                        defaultValue={i18n.language || 'en'}
                    >
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
                        {navItems.map(e => (
                            <li
                                key={e.id}
                                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                            >
                                <Link
                                    onClick={() => {
                                        setActiveNav(e.key);
                                        setMenu(false);
                                    }}
                                    to={e.key}
                                    smooth={true}
                                    offset={-70}
                                    className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 ${activeNav === e.key ? 'after:w-full' : 'after:w-0'
                                        }`}
                                >
                                    {t(`nav.${e.key}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
