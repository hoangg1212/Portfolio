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
        <section name='contact' className='pt-8 pb-8'>
            <h1 className='text-3xl font-bold mb-5'>{t('contact.name')}</h1>
            <p>{t('contact.description')}</p>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl shadow-lg'>
                    <h2 className='text-xl font-semibold mb-4 text-center'>{t('contact.form.title')}</h2>

                    {/* Họ tên */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>{t('contact.form.fields.name.label')}</label>
                        <input
                            {...register("name", { required: true })}
                            className='bg-white shadow appearance-none rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text"
                            placeholder={t('contact.form.fields.name.placeholder')}
                            aria-label={t('contact.form.fields.name.label')}
                        />
                        {errors.name && <span className='text-red-500'>{t('contact.form.fields.name.error')}</span>}
                    </div>

                    {/* Email */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>{t('contact.form.fields.email.label')}</label>
                        <input
                            {...register("email", { required: true })}
                            className='bg-white shadow appearance-none rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="email"
                            placeholder={t('contact.form.fields.email.placeholder')}
                            aria-label={t('contact.form.fields.email.label')}
                        />
                        {errors.email && <span className='text-red-500'>{t('contact.form.fields.email.error')}</span>}
                    </div>

                    {/* Nội dung tin nhắn */}
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>{t('contact.form.fields.message.label')}</label>
                        <textarea
                            {...register("message", { required: true })}
                            className='bg-white shadow appearance-none rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder={t('contact.form.fields.message.placeholder')}
                            aria-label={t('contact.form.fields.message.label')}
                        />
                        {errors.message && <span className='text-red-500'>{t('contact.form.fields.message.error')}</span>}
                    </div>

                    {/* Nút Gửi */}
                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 cursor-pointer flex items-center justify-center gap-2'>
                        <FaLocationArrow />
                        {t('contact.form.submit.text')}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
