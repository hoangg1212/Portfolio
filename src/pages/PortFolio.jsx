import React from 'react'
import { useTranslation } from 'react-i18next';

import duan01 from '../assets/images/DuAn01.png'
import duan02 from '../assets/images/DuAn02.png'
import duan03 from '../assets/images/DuAn03.png'

const PortFolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <section name='projects' className='pt-8'>
        <h2 className='text-3xl font-bold'> {t('projects.category')} </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="w-full px-5 py-10">
            {/* Dự án 1 */}
            <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan01} alt={t('projects.toeic_test_support_website.project_img')} className="w-14 h-14 rounded-full" loading="lazy" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  {t('projects.toeic_test_support_website.duration')}
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  {t('projects.toeic_test_support_website.project_name')}
                </h2>
                <p>
                  {t('projects.toeic_test_support_website.project_type')}
                </p>
                <div className="ml-4 space-y-2 text-justify">

                  <p>
                    <b className="font-bold"> {t('projects.toeic_test_support_website.overview.title')}: </b>
                    {t('projects.toeic_test_support_website.overview.content')}
                  </p>

                  <b className="font-bold">{t('projects.toeic_test_support_website.key_features.title')} : </b>
                  <div className="ml-6">
                    {t('projects.toeic_test_support_website.key_features.features_list', { returnObjects: true }).map((feature, index) => (
                      <p key={index}>
                        - <i className='underline'>{feature.feature_name}</i>: {"  "}
                        {feature.feature_description}
                      </p>
                    ))}
                  </div>

                  <p>
                    <b className="font-bold">{t('projects.toeic_test_support_website.technologies_used.title')}: </b>
                    <span>
                      {"  "} {t('projects.toeic_test_support_website.technologies_used.technologies', { returnObjects: true }).join(', ')}
                    </span>
                  </p>

                  {t('projects.toeic_test_support_website.external_links', { returnObjects: true }).map((link, index) => (
                    <p key={index}>
                      <b className="font-bold">{link.platform}: </b>
                      <a
                        href={link.url || "#"}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.url ? link.url : "Chưa có link"}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Dự án 2 */}
            <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan02} alt={t('projects.confectionery_store_website.project_img')} className="w-14 h-14 rounded-full" loading="lazy" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  {t('projects.confectionery_store_website.duration')}
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  {t('projects.confectionery_store_website.project_name')}
                </h2>
                <p>
                  {t('projects.confectionery_store_website.project_type')}
                </p>
                <div className="ml-4 space-y-2 text-justify">

                  <p>
                    <b className="font-bold"> {t('projects.confectionery_store_website.overview.title')}: </b>
                    {t('projects.confectionery_store_website.overview.content')}
                  </p>

                  <b className="font-bold">{t('projects.confectionery_store_website.key_features.title')} : </b>
                  <div className="ml-6">
                    {t('projects.confectionery_store_website.key_features.features_list', { returnObjects: true }).map((feature, index) => (
                      <p key={index}>
                        - <i className='underline'>{feature.feature_name}</i>: {"  "}
                        {feature.feature_description}
                      </p>
                    ))}
                  </div>

                  <p>
                    <b className="font-bold">{t('projects.confectionery_store_website.technologies_used.title')}: </b>
                    <span>
                      {"  "} {t('projects.confectionery_store_website.technologies_used.technologies', { returnObjects: true }).join(', ')}
                    </span>
                  </p>

                  {t('projects.confectionery_store_website.external_links', { returnObjects: true }).map((link, index) => (
                    <p key={index}>
                      <b className="font-bold">{link.platform}: </b>
                      <a
                        href={link.url || "#"}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.url ? link.url : "Chưa có link"}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Dự án 3 */}
            <div className="border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src={duan03} alt={t('projects.cake_shop_website.project_img')} className="w-14 h-14 rounded-full" loading="lazy" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  {t('projects.cake_shop_website.duration')}
                </p>
                <h2 className="my-1 text-lg font-bold dark:text-neutral-100 uppercase">
                  {t('projects.cake_shop_website.project_name')}
                </h2>
                <p>
                  {t('projects.cake_shop_website.project_type')}
                </p>
                <div className="ml-4 space-y-2 text-justify">

                  <p>
                    <b className="font-bold"> {t('projects.cake_shop_website.overview.title')}: </b>
                    {t('projects.cake_shop_website.overview.content')}
                  </p>

                  <b className="font-bold">{t('projects.cake_shop_website.key_features.title')} : </b>
                  <div className="ml-6">
                    {t('projects.cake_shop_website.key_features.features_list', { returnObjects: true }).map((feature, index) => (
                      <p key={index}>
                        - <i className='underline'>{feature.feature_name}</i>: {"  "}
                        {feature.feature_description}
                      </p>
                    ))}
                  </div>

                  <p>
                    <b className="font-bold">{t('projects.cake_shop_website.technologies_used.title')}: </b>
                    <span>
                      {"  "} {t('projects.cake_shop_website.technologies_used.technologies', { returnObjects: true }).join(', ')}
                    </span>
                  </p>

                  {t('projects.cake_shop_website.external_links', { returnObjects: true }).map((link, index) => (
                    <p key={index}>
                      <b className="font-bold">{link.platform}: </b>
                      <a
                        href={link.url || "#"}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.url ? link.url : "Chưa có link"}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortFolio
