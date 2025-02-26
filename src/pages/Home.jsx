import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { FaFacebookSquare, FaLinkedin, FaReact, FaVuejs, FaPython } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileSqlDuotone } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import avatar from '../assets/images/avt.jpg';

const Home = () => {
    const { t } = useTranslation();
    const [showCVModal, setShowCVModal] = useState(false);

    // Danh sách công nghệ sử dụng
    const techIcons = useMemo(() => [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaVuejs />, name: 'Vue.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <PiFileSqlDuotone />, name: 'SQL' },
        { icon: <FaPython />, name: 'Python' }
    ], []);

    // Danh sách mạng xã hội
    const socialLinks = useMemo(() => [
        { href: 'https://www.facebook.com/share/18ar5BNgAx/', icon: <FaFacebookSquare />, name: 'Facebook' },
        { href: 'https://www.linkedin.com/', icon: <FaLinkedin />, name: 'LinkedIn' },
        { href: 'https://www.youtube.com/', icon: <IoLogoYoutube />, name: 'YouTube' },
        { href: 'https://www.tiktok.com/', icon: <AiFillTikTok />, name: 'TikTok' }
    ], []);

    return (
        <>
            <Helmet>
                <title>{t('home.seo_title')}</title>
                <meta name="description" content={t('home.seo_title')} />
            </Helmet>

            <section name='home'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left */}
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-8 order-2 md:order-1'>
                        <span className='text-xl'>{t("home.welcome")}</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>{t('home.hello')}</h1>
                            <ReactTyped
                                className='text-red-700 font-bold '
                                strings={useMemo(() => ["Developer", "Coder"], [])}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </div>

                        <p className='text-sm md:text-md text-justify'>{t("home.title")}</p>

                        {/* Media Icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2 text-center md:text-left'>
                                <span>{t("home.network")}</span>
                                <ul className='flex space-x-5'>
                                    {socialLinks.map((social, index) => (
                                        <li key={index}>
                                            <a href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                                                {React.cloneElement(social.icon, { className: 'text-2xl cursor-pointer' })}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='space-y-2 text-center md:text-left'>
                                <span>{t("home.technology")}</span>
                                <ul className='flex space-x-5'>
                                    {techIcons.map((tech, index) => (
                                        <li key={index} aria-label={tech.name}>
                                            {React.cloneElement(tech.icon, { className: 'text-xl md:text-3xl hover:scale-110 duration-200' })}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CV Buttons */}
                        <div className='mt-8'>
                            <div className='flex justify-center space-x-4'>
                                {/* Nút tải CV */}
                                <a
                                    href=''
                                    download
                                    className='px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105'
                                    aria-label='Download Resume'
                                >
                                    {t("home.downloadcv")}
                                </a>

                                {/* Nút mở CV hình ảnh */}
                                <a
                                    href=''
                                    target='_blank' 
                                    className='px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full shadow-lg hover:from-green-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105'
                                    aria-label='View Resume Image'
                                >
                                    {t("home.viewcv")}
                                </a>
                            </div>

                            {/* Modal xem CV hình ảnh */}
                            {showCVModal && (
                                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                                    <div className='bg-white p-6 rounded-lg max-w-lg'>
                                        <button
                                            onClick={() => setShowCVModal(false)}
                                            className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
                                        >
                                            &times;
                                        </button>
                                        <img
                                            src='/path/to/your/cv-image.jpg'
                                            alt='CV Image'
                                            className='w-full h-auto rounded-lg'
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right */}
                    <div className='flex justify-center items-center md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img
                            src={avatar}
                            className='rounded-full md:w-[450px] md:h-[450px] w-[300px] h-[300px] object-cover aspect-square transition-transform duration-300 ease-in-out hover:scale-105'
                            alt={t('home.avatarAlt')}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <hr className="border-gray-300 border-opacity-50 mt-5" />
        </>
    );
}

export default Home;
