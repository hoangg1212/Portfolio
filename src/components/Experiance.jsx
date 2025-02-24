import React from 'react'
import { useTranslation } from 'react-i18next';

import html from '../assets/images/html.jpg'
import css from '../assets/images/css.jpg'
import javascript from '../assets/images/javascript.png'
import tailwind from '../assets/images/tailwind.png'

import reactjs from '../assets/images/reactjs.png'
import vuejs from '../assets/images/vuejs.png'
import nodejs from '../assets/images/nodejs.png'

import mongodb from '../assets/images/mongodb.png'
import sqls from '../assets/images/sqls.png'

import python from '../assets/images/python.png'
import asp from '../assets/images/asp.png'
import java from '../assets/images/java.png'


const Experiance = () => {
    const { t } = useTranslation();
    const cardItems = [
        {
            id: 1,
            logo: html,
            name: 'HTML'
        },
        {
            id: 2,
            logo: css,
            name: 'CSS'
        },
        {
            id: 3,
            logo: javascript,
            name: 'JavaScript'
        },
        {
            id: 4,
            logo: tailwind,
            name: 'Tailwind CSS'
        },
        {
            id: 5,
            logo: reactjs,
            name: 'ReactJS'
        },
        {
            id: 6,
            logo: vuejs,
            name: 'VueJS'
        },
        {
            id: 7,
            logo: nodejs,
            name: 'NodeJS'
        },
        {
            id: 8,
            logo: mongodb,
            name: 'MongoDB'
        },
        {
            id: 9,
            logo: sqls,
            name: 'SQL Server'
        },
        {
            id: 10,
            logo: python,
            name: 'Python'
        },
        {
            id: 11,
            logo: asp,
            name: 'C#'
        },
        {
            id: 12,
            logo: java,
            name: 'Java'
        },
    ]

    return (
        <>
            <section name='experience' className='pt-8'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'> {t('experience.name')}  </h1>
                    <p>
                    {t('experience.description')}
                    </p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {
                            cardItems.map(({ id, logo, name }) => (
                                <div className='flex flex-col items-center justify-center  rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={logo} className='w-[150px] rounded-full' alt='' />
                                    <div>
                                        <div>{name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experiance
