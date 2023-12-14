import React from 'react'
import Image from 'next/image';
import Work from "@/images/remix.png"
const Project = () => {
  return (
    <section className="w-full mx-auto">
        <main className='pt-[1rem] pb-[2rem] w-[85%] sm:w-[90%]  mx-auto'>
            <h2 className='py-[2rem]'>Project</h2>
            <div className='grid gap-6 sm:grid-cols-2  lg:grid-cols-3'>
                {[1,2,3].map((work,index)=>{
                    return(
                        <div className='shadow py-4 px-4 rounded-lg' key={index}>
                            <div className='mb-2 flex gap-1'>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                            </div>
                            <div className='cursor-pointer relative group'>
                                <Image src={Work} alt='work' className=' w-full h-[10rem] rounded-md '/>
                                <div className='absolute bottom-0 left-0 right-0 bg-[#ffc0cb99] group-hover:top-0'></div>
                            </div>
                        </div>)
                })}
            </div>
        </main>
    </section>
  )
}

export default Project