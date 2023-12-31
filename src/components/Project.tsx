"use client"
import React from 'react'
import Image from 'next/image';
import { usePortfolioContext } from '@/context/PortfolioContext';
import { colors, projects } from '@/data/data';
const Project = () => {
    const {color} = usePortfolioContext()
    const borderStyle = {borderTop: `2px solid ${colors[color].gradient}`, borderLeft: `2px solid ${colors[color].gradient}`, borderBottom:`2px solid ${colors[color].color}`,borderRight:`2px solid ${colors[color].color}` }
  return (
    <section className="w-full xl:w-[90%] mx-auto">
        <main className='pt-[1rem] pb-[2rem] w-[80%] sm:w-[90%] lg:w-[80%] xl:w-[95%] mx-auto'>
        {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Projects </>"}</h1> */}
            <section className='grid place-items-center gap-5'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Projects </>"}</h1>
                <div className='flex gap-4'>
                    <div className='h-4 w-8 shadow grid place-items-center rounded-md'><div className='w-1/2 h-1 bg-red-400'></div></div>
                    <div className='h-4 w-8 shadow rounded-md'></div>
                    <div className='h-4 w-8 shadow rounded-md'></div>
                </div>
            </section>
            <div className='grid gap-6 lg:gap-8 pt-[4rem] pb-[10rem] sm:grid-cols-2 xl:grid-cols-3' >
                {projects.map((work,index)=>{
                    return(
                        <div className='shadow py-4 px-4 rounded-lg r' key={index} style={{}}>
                            <div className='mb-2 flex gap-1'>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                                <div className='w-4 h-4 rounded-full bg-red-400'></div>
                            </div>
                            <div className='cursor-pointer relative group'>
                                <Image src={work.img} alt='work' className=' w-full h-[10rem] rounded-md '/>
                                <div className='absolute bottom-0 left-0 right-0 bg-[#ffc0cb99] group-hover:top-0'></div>
                            </div>
                            <div className='mt-4'>
                                <p>{work.title}</p>
                                <p>{work.description}</p>
                                <div className='mt-4 flex gap-4'>
                                    <a href="#">Live Project</a>
                                    <a href="#">Source Code</a>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </main>
    </section>
  )
}

export default Project