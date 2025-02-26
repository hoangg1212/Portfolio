import React from 'react'
import { useTranslation } from 'react-i18next';
const About = () => {

    const { t } = useTranslation();

    return (
        <>
            <section name='about' className='pt-8 '>
                <h1 className='text-3xl font-bold mb-6'> {t('about.summary.title')} </h1>
                <p className='text-justify mt-2'> {t('about.summary.details')} </p>

                <article className='mt-8'>
                    <h2 className='text-green-600 font-bold text-xl mb-4'> {t('about.education.title')} </h2>
                    <p className='text-justify mt-2'> {t('about.education.details')} </p>
                </article>

                <article className='mt-8'>
                    <h2 className='text-green-600 font-bold text-xl mb-4'> {t('about.skills.title')} </h2>
                    <ul className='list-disc list-inside text-justify mt-2'>
                        <li>{t('about.skills.programming')}</li>
                        <li>{t('about.skills.frontend')}</li>
                        <li>{t('about.skills.backend')}</li>
                        <li>{t('about.skills.database')}</li>
                        <li>{t('about.skills.soft_skills')}</li>
                        <li>{t('about.skills.learning')}</li>
                    </ul>
                </article>

                <article className='mt-8'>
                    <h2 className='text-green-600 font-bold text-xl mb-4'>{t('about.experience.title')}</h2>
                    <p className='text-justify mt-2'>{t('about.experience.summary')}</p>
                    <ul className='list-disc list-inside pl-4 mt-2'>
                        <li>{t('about.experience.projects.ecommerce')}</li>
                        <li>{t('about.experience.projects.english_quiz')}</li>
                    </ul>
                    <p className='text-justify mt-2'>{t('about.experience.value')}</p>
                </article>

                <article className='mt-8'>
                    <h2 className='text-green-600 font-bold text-xl mb-4'> {t('about.awards.title')} </h2>
                    <ul className='list-disc list-inside text-justify mt-2'>
                        <li>{t('about.awards.network_competition')}</li>
                        <li>{t('about.awards.software_competition')}</li>
                    </ul>
                </article>

                <article className='mt-8'>
                    <h2 className='text-green-600 font-bold text-xl mb-4'> {t('about.desire.title')} </h2>
                    <p className='text-justify mt-2'> {t('about.desire.details')} </p>
                </article>
            </section>
        </>
    )
}

export default About
