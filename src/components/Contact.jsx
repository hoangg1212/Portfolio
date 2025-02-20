import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const useInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/axowokgb", useInfo);
            toast.success("Gửi thành công!");
        } catch (error) {
            console.log(error);
            toast.error("Gửi thất bại! Vui lòng thử lại sau.");
        }
    };

    console.log(watch("example"));

    return (
        <>
            <section name='Liên hệ' className='max-w-screen-2xl container w-full mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>
                    Liên hệ với tôi
                </h1>
                <span>Vui lòng điền vào form dưới đây để liên hệ với tôi nhé</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/axowokgb"
                        // method="POST"
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4 text-center'>Gửi tin nhắn của bạn</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Họ tên: </label>
                            <input
                                {...register("name", { required: true })}
                                className='bg-white shadow appearance-none boder rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text"
                                id="name"
                                name='name'
                                placeholder='Nhập họ tên của bạn ' />
                            {errors.name && <span className='text-red-500'>Vui lòng điền đầy đủ thông tin !!!</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Email: </label>
                            <input
                                {...register("email", { required: true })}
                                className='bg-white shadow appearance-none boder rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="email"
                                name='email'
                                type="text"
                                placeholder='Nhập email của bạn ' />
                            {errors.email && <span className='text-red-500'>Vui lòng điền đầy đủ thông tin !!!</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Nội dung tin nhắn: </label>
                            <textarea
                                {...register("message", { required: true })}
                                className='bg-white shadow appearance-none boder rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text"
                                id="name"
                                name='message'
                                placeholder='Vui lòng nhập nội dung tin nhắn' />
                            {errors.message && <span className='text-red-500'>Vui lòng điền đầy đủ thông tin !!!</span>}
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 cursor-pointer'>Gửi</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
