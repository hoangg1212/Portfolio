import React, { useState } from 'react'
import { motion, useScroll, useTransform, } from "framer-motion";
import { ArrowDown, Mail, } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { useTheme } from "../../context/ThemeContext";
import avt from "../../assets/images/image01.jpg";
import { containerVariants, itemVariants } from '../../utils/helper';

const HeroSection = () => {
    const { isDarkMode } = useTheme();
    const { scrollY } = useScroll();
    const heroY = useTransform[scrollY, [0, 500], [0, -100]];
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };
    return (
        <div
            className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
                }`}>
            {/* Hero Section */}
            <motion.section
                id="trang chủ"
                style={{ y: heroY }}
                className='min-h-screen flex items-center justify-center relative px-6 pt-10'
            >
                <div className='absolute invert-0 overflow-hidden'>
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                            }`}
                    />
                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            rotate: [3600, 180, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute bottom-10 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
                            }`}
                    />
                </div>

                <div className='max-w-7xl mx-auto w-full z-10'>
                    {/* Mobile */}
                    <div className='block lg:hidden mt-20'>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className='text-center'
                        >

                            {/* Proflio Image Mobile */}
                            <motion.div variants={imageVariants} className='mb-15'>
                                <div className='w-32 h-32 mx-auto relative'>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                                            } shadow-2xl`}
                                    >
                                        <img
                                            src={avt}
                                            alt='Proflio'
                                            className='w-full h-full object-cover'
                                        />
                                    </motion.div>

                                    {/* Decorative element */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className='absolute -inset-2 rounded-2xl border border-blue-500/20'
                                    />
                                </div>
                            </motion.div>

                            {/* Content - Mobile*/}
                            <motion.div
                                variants={textVariants}
                                className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                    } mb-4`}
                            >
                                Front-End Developer
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className='text-3xl md:text-5xl font-light leading-tight'
                            >
                                <span
                                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                                >
                                    Bull ding abccd
                                </span>
                                <br />
                                <span className='text-blue-500 font-medium ml-2'>
                                    expengghghshs
                                </span>
                                <br />
                                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                    tthatb bdvssvhd
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className={`text-base md:text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    } mb-4 max-w-xl mx-auto font-light leading-relaxed`}
                            >
                                I cralt dhdhj
                            </motion.p>

                            {/* Button - Mobile*/}
                            <motion.div
                                variants={itemVariants}
                                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-4'
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    Xem thêm
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border ${isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                                        } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    Liên hệ
                                </motion.button>
                            </motion.div>

                            {/* Social Links - Mobile*/}
                            <motion.div
                                variants={itemVariants}
                                className='flex justify-center space-x-6 mb-8'
                            >
                                {[
                                    { icon: FiGithub, href: "#" },
                                    { icon: FiLinkedin, href: "#" },
                                    { icon: Mail, href: "#" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className={`p-3 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                            }`}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Tech Stask - Mobile*/}
                            <motion.div
                                variants={itemVariants}
                                className='flex justify-center items-center space-x-3 text-xs uppercase tracking-widest flex-wrap pb-4'
                            >
                                <span
                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                >
                                    React
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                >
                                    ,
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                >
                                    Node.JS
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                >
                                    ,
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                >
                                    JavaScript
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                >
                                    ,
                                </span>
                                <span
                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                >
                                    SQLs
                                </span>

                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Desktop */}
                    <div className='hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center'>

                        {/* Left Colunm */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className='text-left'
                        >
                            <motion.div
                                variants={textVariants}
                                className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                    } mb-6`}
                            >
                                Front-End Developver
                            </motion.div>
                            <motion.h1
                                variants={itemVariants}
                                className='text-5xl xl:text-7xl font-light mb-8 leading-tight'
                            >
                                <span
                                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                                >
                                    Bull ding abccd
                                </span>
                                <br />
                                <span className='text-blue-500 font-medium'>
                                    expengghghshs
                                </span>
                                <br />
                                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                    tthatb bdvssvhd
                                </span>
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    } mb-12 font-light leading-relaxed max-w-lg`}
                            >
                                I cralt dhdhj
                            </motion.p>
                            {/* Button - Desktop */}
                            <motion.div
                                variants={itemVariants}
                                className='flex gap-6 mb-8'
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                                >
                                    Xem thêm
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border ${isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                                        } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                                >
                                    Liên hệ
                                </motion.button>
                            </motion.div>
                            {/* Social Links - Desktop */}
                            <motion.div
                                variants={itemVariants}
                                className='flex space-x-6 mb-12'
                            >
                                {[
                                    { icon: FiGithub, href: "#" },
                                    { icon: FiLinkedin, href: "#" },
                                    { icon: Mail, href: "#" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className={`p-3 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                            }`}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </motion.div>


                        </motion.div>

                        {/* Right Colunm */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            className='flex justify-center lg:justify-end'
                        >
                            <div className='relative'>

                                {/* Tech Stask - Desktop*/}
                                <motion.div
                                    variants={itemVariants}
                                    className='flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-20'
                                >
                                    <span
                                        className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                    >
                                        React
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                    >
                                        ,
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                    >
                                        Node.JS
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                    >
                                        ,
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                    >
                                        JavaScript
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                    >
                                        ,
                                    </span>
                                    <span
                                        className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                    >
                                        SQLs
                                    </span>
                                </motion.div>

                                {/* Proflio Image - Desktop */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                                        }shadow-2xl`}
                                >
                                    <img
                                        src={avt}
                                        alt='Proflio'
                                        className='w-full h-full object-cover'
                                    />
                                </motion.div>

                                {/* Decorative element */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className='absolute -inset-4 rounded-3xl border border-blue-500/20'
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className='absolute -inset-8 rounded-3xl border border-purple-500/10'
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator*/}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
                >
                    <ArrowDown
                        size={20}
                        className={isDarkMode ? "text-gray-600" : "text-gray-400"}
                    />
                </motion.div>

            </motion.section>
        </div>
    )
}

export default HeroSection
