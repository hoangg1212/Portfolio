import React from 'react'

import reactjs from '../assets/images/reactjs.png'
import vuejs from '../assets/images/vuejs.png'
import javascript from '../assets/images/javascript.png'
import nodejs from '../assets/images/nodejs.png'
import mongodb from '../assets/images/mongodb.png'
import sqls from '../assets/images/sqls.png'


const PortFolio = () => {

  const cardItems = [
    {
      id: 1,
      logo: reactjs,
      name: 'ReactJS'
    },
    {
      id: 2,
      logo: vuejs,
      name: 'VueJS'
    },
    {
      id: 3,
      logo: javascript,
      name: 'JavaScript'
    },
    {
      id: 4,
      logo: nodejs,
      name: 'NodeJS'
    },
    {
      id: 5,
      logo: mongodb,
      name: 'MongoDB'
    },
    {
      id: 6,
      logo: sqls,
      name: 'SQL Server'
    }
  ]

  return (
    <>
      <section naem='Dự án' className='max-w-screen-2xl container w-full mx-auto px-4 md:px-20 mt-10'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>
            Danh mục
          </h1>
          <span className='underline font-semibold'>Những dự án tiêu biểu tôi đã thực hiện</span>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {
              cardItems.map(({ id, logo, name }) => (
                <div className='md:w-[300px] md:h-[300px] border-[1px] border-gray-300 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[1px] border-gray-300' alt='' />
                  <div>
                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                    <p className='text-justify px-2 text-gray-700'>Haha chưa biết viết gì</p>
                  </div>
                  <div className='px-6 py-4 space-x-3 justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
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

export default PortFolio
