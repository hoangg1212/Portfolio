import axios from 'axios';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = useCallback(async (data) => {
        toast.success(t('contact.form.submit.success'));
        reset();

        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        try {
            await axios.post("https://getform.io/f/axowokgb", userInfo);
        } catch (error) {
            console.error(error);
            toast.error(t('contact.form.submit.error'));
        }
    }, [t, reset]);

    return (
        <section name='contact' className='pt-8'>
            <h1 className='text-3xl font-bold mb-5'>{t('contact.name')}</h1>
            <p>{t('contact.description')}</p>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-gradient-to-br from-gray-100 to-gray-200 w-96 px-8 py-6 rounded-2xl shadow-xl border border-gray-300'>
                    <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>{t('contact.form.title')}</h2>

                    {/* Họ tên */}
                    <div className='flex flex-col mb-4'>
                        <label className='text-gray-700 font-medium'>{t('contact.form.fields.name.label')}</label>
                        <input
                            {...register("name", { required: true })}
                            className='bg-white shadow-md rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200'
                            type="text"
                            placeholder={t('contact.form.fields.name.placeholder')}
                            aria-label={t('contact.form.fields.name.label')}
                        />
                        {errors.name && <span className='text-red-500 text-sm'>{t('contact.form.fields.name.error')}</span>}
                    </div>

                    {/* Email */}
                    <div className='flex flex-col mb-4'>
                        <label className='text-gray-700 font-medium'>{t('contact.form.fields.email.label')}</label>
                        <input
                            {...register("email", { required: true })}
                            className='bg-white shadow-md rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200'
                            type="email"
                            placeholder={t('contact.form.fields.email.placeholder')}
                            aria-label={t('contact.form.fields.email.label')}
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{t('contact.form.fields.email.error')}</span>}
                    </div>

                    {/* Nội dung tin nhắn */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 font-medium'>{t('contact.form.fields.message.label')}</label>
                        <textarea
                            {...register("message", { required: true })}
                            className='bg-white shadow-md rounded-lg py-2 px-4 text-gray-700 h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200'
                            placeholder={t('contact.form.fields.message.placeholder')}
                            aria-label={t('contact.form.fields.message.label')}
                        />
                        {errors.message && <span className='text-red-500 text-sm'>{t('contact.form.fields.message.error')}</span>}
                    </div>

                    {/* Nút Gửi */}
                    <button
                        type='submit'
                        className='bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl px-5 py-3 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-700 hover:to-blue-900 active:scale-95'>
                        <FaLocationArrow className="transition-transform duration-300 group-hover:rotate-45" />
                        {t('contact.form.submit.text')}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
