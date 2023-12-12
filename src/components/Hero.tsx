import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-[3rem]  py-[7rem]'>
        <h1 className='text-center'>Hello 👋</h1>
        <div className='tracking-normal w-[70%] max-w-[31rem] mx-auto'>
            <p>{`try {`}</p>
            <p className='pl-6'>console.log("I write code")</p>
            <p>{`} catch() {`}</p>
            <p className='pl-6'>console.log("I debug")</p>
            <p>{`} finally {`}</p>
            <p className='pl-6'>console.log("I build responsive and scalable web application")</p>
            <p>{`}`}</p>
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