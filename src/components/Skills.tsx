import React from 'react'
import {skills} from "@/data/data"
import { FaHtml5 } from 'react-icons/fa'
const Skills = () => {
  return (
    <section className="w-full xl:w-[90%] mx-auto grid place-items-center">
        <main className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto'>
        {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Skills </>"}</h1> */}
            <section className='grid place-items-center gap-5'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Skills </>"}</h1>
                <div className='flex gap-4'>
                    
                    <div className='h-4 w-8 shadow rounded-md'></div>
                    <div className='h-4 w-8 shadow grid place-items-center rounded-md'><div className='w-1/2 h-1 bg-red-400'></div></div>
                    <div className='h-4 w-8 shadow rounded-md'></div>
                </div>
            </section>
            <div className='flex flex-wrap justify-center items-center gap-4 pt-[4rem] pb-[10rem]'>
                {skills.map((skill,index)=>{
                    return (
                        <button className='shadow py-2 min-w-[2.9rem] grid place-items-center' key={index}>
                            <FaHtml5 className="text-yellow-500 h-[2rem] w-[2rem]"/>
                        </button>
                    )
                })}
            </div>
        </main>
    </section>
  )
}

export default Skills