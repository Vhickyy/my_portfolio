"use client"
import { usePortfolioContext } from '@/context/PortfolioContext'
import { colors } from '@/data/data'
import React from 'react'

const Hero = () => {
    const {color} = usePortfolioContext();
  return (
    <section className='relative flex flex-col justify-center items-center gap-[3rem]  py-[7rem]'>
        <div className='absolute top-[4rem] right-0 h-[10rem] w-[40%]  z-[-3] blur-[10rem] rounded-full opacity-50' style={{backgroundColor: colors[color].color}}></div>
        <div className='absolute top-0 left-0 h-[10rem] w-[40%]  z-[-3] blur-[10rem] rounded-full opacity-50' style={{backgroundColor: colors[color].gradient}}></div>
        <h1 className='text-center'>Hello 👋</h1>
        <div className='tracking-normal w-[70%] max-w-[31rem] mx-auto'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati reprehenderit nisi nobis molestiae doloribus aut aperiam, dignissimos, illo sit veritatis vero quidem dolor doloremque optio! Est quo architecto excepturi maxime.</p>
            {/* <p>{`try {`}</p>
            <p className='pl-6'>console.log("I write code")</p>
            <p>{`} catch() {`}</p>
            <p className='pl-6'>console.log("I debug")</p>
            <p>{`} finally {`}</p>
            <p className='pl-6'>console.log("I build responsive and scalable web application")</p>
            <p>{`}`}</p> */}
        </div>
        {/* <p className='w-full max-w-[35rem] mx-auto'>I write code, fix bugs</p> */}
        <div className='flex justify-center items-center gap-4'>
            <div className={`shadow bg-bgColor  grid items-center rounded-md`}>
                <button className='border border-gray-500 p-2 rounded-md hover:bg-gradient-to-r from-[rgba(255,192,203,0.6)] to-[rgba(255,192,203,0.6)]'>
                    Resume
                </button>
            </div>
            <div className={`shadow bg-bgColor  grid items-center rounded-md`}>
                <button className='border border-gray-500 p-2 rounded-md hover:bg-gradient-to-r from-[rgba(255,192,203,0.6)] to-[rgba(255,192,203,0.6)]'>
                    Projects
                </button>
            </div>
            <div className={`shadow bg-bgColor  grid items-center rounded-md hover:bg-gradient-to-r from-[rgba(255,192,203,0.6)] to-[rgba(255,192,203,0.6)]`}>
                <button className='border border-gray-500 p-2 rounded-md'>
                    Theme
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero