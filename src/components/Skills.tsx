import React from 'react'
import {skills} from "@/data/data"
const Skills = () => {
  return (
    <section className="w-full xl:w-[90%] mx-auto grid place-items-center">
        <main className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto'>
        <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Skills </>"}</h1>
            <div className='flex flex-wrap justify-center items-center gap-4 pt-[4rem] pb-[10rem]'>
                {skills.map((skill,index)=>{
                    return (
                        <button className='shadow py-2 min-w-[2.9rem] grid place-items-center' key={index}>
                            {skill.icon}
                        </button>
                    )
                })}
            </div>
        </main>
    </section>
  )
}

export default Skills