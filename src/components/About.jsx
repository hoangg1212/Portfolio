import React from 'react'

const About = () => {
    return (
        <>
            <section name='Giới thiệu' className='max-w-screen-2xl container w-full mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-5'>
                    Giới thiệu
                </h1>
                <p className='text-justify'>
                    Chào bạn, tôi là Lê Huy Hoàng, một sinh viên năm cuối chuyên ngành Kỹ thuật phần mềm tại Trường Đại học Nguyễn Tất Thành.
                    Với niềm đam mê và nỗ lực học hỏi, tôi luôn tìm cách phát triển bản thân trong lĩnh vực công nghệ thông tin.
                    Tôi đã tích lũy cho mình những kỹ năng vững vàng và kinh nghiệm thực tế, với mục tiêu trở thành một Frontend Developer,
                    đóng góp vào sự phát triển của công ty và không ngừng nâng cao kỹ năng cá nhân.
                </p>
                <br />
                <h1 className='text-green-600 font-bold text-xl'>
                    Trình độ học vấn
                </h1>
                <span className='text-justify'>
                    - Chuyên ngành: Kỹ thuật phần mềm, Trường Đại học Nguyễn Tất Thành
                </span>
                <br />
                <h1 className='text-green-600 font-bold text-xl'>
                    Kỹ năng & chuyên môn
                </h1>
                <span className='text-justify'>
                    - Thành thạo các ngôn ngữ lập trình: HTML, CSS, JavaScript, Python <br />
                    - Có kinh nghiệm phát triển giao diện người dùng với ReactJS, VueJS <br />
                    - Quen thuộc với Node.js, ExpressJS trong phát triển backend <br />
                    - Kinh nghiệm làm việc với cơ sở dữ liệu NoSQL MongoDB và SQL <br />
                    - Kỹ năng làm việc nhóm, giải quyết vấn đề, và quản lý thời gian hiệu quả <br />
                    - Tinh thần học hỏi không ngừng và đam mê thử thách với công nghệ mới.
                </span>
                <br />
                <h1 className='text-green-600 font-bold text-xl'>
                    Kinh nghiệm chuyên môn
                </h1>
                <span className='text-justify'>
                    - Trong quá trình học tập và thực hiện các dự án cá nhân, tôi đã áp dụng các công nghệ hiện đại để phát triển các dự án như:
                    <ul className='list-inside pl-0'>
                        <li className='pl-4'>+ Web thương mại điện tử sử dụng ReactJS và MongoDB, với giao diện người dùng thân thiện, khả năng tìm kiếm và lọc sản phẩm linh hoạt, tích hợp giỏ hàng và thanh toán.</li>
                        <li className='pl-4'>+ Web trắc nghiệm tiếng Anh sử dụng ReactJS và SQL Server, giúp người dùng thực hiện các bài kiểm tra tiếng Anh với hệ thống câu hỏi đa dạng và tính năng theo dõi kết quả thi.</li>
                    </ul>
                    - Những dự án này không chỉ giúp tôi phát triển kỹ năng lập trình mà còn rèn luyện khả năng làm việc với cơ sở dữ liệu và xử lý các yêu cầu của người dùng.
                </span>
                <br />
                <h1 className='text-green-600 font-bold text-xl'>
                    Thành tựu & Giải thưởng
                </h1>
                <span className='text-justify'>
                    - Giải Khuyến khích trong cuộc thi "Kỹ thuật phần mềm" tổ chức ngày 17/05/2024<br />
                    - Giải Khuyến khích trong cuộc thi "Kỹ thuật phần mềm" tổ chức ngày 17/05/2024
                </span>
                <br />
                <h1 className='text-green-600 font-bold text-xl'>
                    Mong muốn
                </h1>
                <span className='text-justify'>
                    - Tôi mong muốn có cơ hội được gia nhập một môi trường làm việc năng động, nơi tôi có thể áp dụng kỹ năng lập trình, học hỏi từ những người đồng nghiệp giỏi
                    và cùng nhau tạo ra các sản phẩm công nghệ chất lượng, phục vụ cho sự phát triển của công ty và cộng đồng.
                </span>
                <br />
            </section>


            <section className='flex max-w-screen-2xl container w-full mx-auto px-4 md:px-20 my-20'>
            <h2 className="text-3xl font-bold mb-5 dark:text-neutral-200">
                        Experience
                    </h2>
                <div className="flex flex-wrap gap-y-2 items-center justify-between">
                    
                    <div className="px-5 py-10">
                        {/* Experience item*/}
                        <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                            <div className="relative flex flex-col justify-start pl-12">
                                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                                    <img src="" alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                                    {" "}
                                    July 2021 · Present{" "}
                                </p>
                                <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                                    Lead Front-end Developer
                                </h3>
                                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                                    AgeCode Co. Ltd
                                </p>
                                <div className="ml-4 mb-1 text-sm font-light text-neutral-600 dark:text-neutral-400 space-y-0.5">
                                    <p>
                                        Led and contributed to over 20 projects in 3 years,
                                        ranging from small to large scale applications.
                                    </p>
                                    <p>
                                        Improved overall code quality through regular code reviews
                                        and implementation of best practices.
                                    </p>
                                    <p>
                                        Managed and mentored a team of developers, fostering a
                                        collaborative and productive work environment.
                                    </p>
                                    <p>
                                        Reduced project development time by approximately 30%
                                        through implementation of efficient workflows and
                                        automation tools.
                                    </p>
                                    <p className="mb-1 text-sm">
                                        <b className="font-medium dark:text-neutral-300">
                                            Technologies:
                                        </b>
                                        <span className="font-light text-neutral-600 dark:text-neutral-400">
                                            {" "}
                                            React, Next.js, Vue.js, Nuxt, JavaScript, TypeScript,
                                            Node.js, Confluence, GitHub Copilot, GitHub Actions,
                                            Code Review GPT{" "}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                            <div className="relative flex flex-col justify-start pl-12">
                                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                                    <img src="" alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                                    {" "}
                                    July 2021 · Present{" "}
                                </p>
                                <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                                    Lead Front-end Developer
                                </h3>
                                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                                    AgeCode Co. Ltd
                                </p>
                                <div className="ml-4 mb-1 text-sm font-light text-neutral-600 dark:text-neutral-400 space-y-0.5">
                                    <p>
                                        Led and contributed to over 20 projects in 3 years,
                                        ranging from small to large scale applications.
                                    </p>
                                    <p>
                                        Improved overall code quality through regular code reviews
                                        and implementation of best practices.
                                    </p>
                                    <p>
                                        Managed and mentored a team of developers, fostering a
                                        collaborative and productive work environment.
                                    </p>
                                    <p>
                                        Reduced project development time by approximately 30%
                                        through implementation of efficient workflows and
                                        automation tools.
                                    </p>
                                    <p className="mb-1 text-sm">
                                        <b className="font-medium dark:text-neutral-300">
                                            Technologies:
                                        </b>
                                        <span className="font-light text-neutral-600 dark:text-neutral-400">
                                            {" "}
                                            React, Next.js, Vue.js, Nuxt, JavaScript, TypeScript,
                                            Node.js, Confluence, GitHub Copilot, GitHub Actions,
                                            Code Review GPT{" "}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                            <div className="relative flex flex-col justify-start pl-12">
                                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                                    <img src="" alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                                    {" "}
                                    July 2021 · Present{" "}
                                </p>
                                <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                                    Lead Front-end Developer
                                </h3>
                                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                                    AgeCode Co. Ltd
                                </p>
                                <div className="ml-4 mb-1 text-sm font-light text-neutral-600 dark:text-neutral-400 space-y-0.5">
                                    <p>
                                        Led and contributed to over 20 projects in 3 years,
                                        ranging from small to large scale applications.
                                    </p>
                                    <p>
                                        Improved overall code quality through regular code reviews
                                        and implementation of best practices.
                                    </p>
                                    <p>
                                        Managed and mentored a team of developers, fostering a
                                        collaborative and productive work environment.
                                    </p>
                                    <p>
                                        Reduced project development time by approximately 30%
                                        through implementation of efficient workflows and
                                        automation tools.
                                    </p>
                                    <p className="mb-1 text-sm">
                                        <b className="font-medium dark:text-neutral-300">
                                            Technologies:
                                        </b>
                                        <span className="font-light text-neutral-600 dark:text-neutral-400">
                                            {" "}
                                            React, Next.js, Vue.js, Nuxt, JavaScript, TypeScript,
                                            Node.js, Confluence, GitHub Copilot, GitHub Actions,
                                            Code Review GPT{" "}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
