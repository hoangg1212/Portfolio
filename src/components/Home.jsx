import React, { useMemo } from 'react';
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
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
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
                        <br />
                        <p className='text-sm md:text-md text-justify'>{t("home.title")}</p>
                        <br />

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
                    </div>

                    {/* Right */}
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img
                            src={avatar}
                            className='rounded-full md:w-[450px] md:h-[450px] w-full h-full object-cover'
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
