"use client"
import { usePortfolioContext } from '@/context/PortfolioContext'
import { colors } from '@/data/data'
import React from 'react'

const Experience = () => {
    const {color} = usePortfolioContext()
    const borderStyle = {borderTop: `2px solid ${colors[color].gradient}`, borderLeft: `2px solid ${colors[color].gradient}`, borderBottom:`2px solid ${colors[color].color}`,borderRight:`2px solid ${colors[color].color}` }
  return (
    <section className="w-full xl:w-[90%] mx-auto">
        <main className='py-[4rem] w-[80%] sm:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto'>
            <div>
                {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Experience </>"}</h1> */}
                <section className='grid place-items-center gap-5'>
                    <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Experience </>"}</h1>
                    <div className='flex gap-4'>
                        
                        <div className='h-4 w-8 shadow rounded-md'></div>
                        <div className='h-4 w-8 shadow rounded-md'></div>
                        <div className='h-4 w-8 shadow grid place-items-center rounded-md'><div className='w-1/2 h-1 bg-red-400'></div></div>
                    </div>
                </section>
                <div className='grid gap-6 lg:gap-10 pt-[4rem] pb-[10rem] sm:grid-cols-2'> 
                    <div className='shadow px-4 py-2 rounded-md' style={borderStyle}>
                        <p>2023-01 - Present</p>
                        <p>Tech Room</p>
                    </div>
                    <div className='shadow px-6 py-4 border border-textColor rounded-md'>
                        <p>2023-01 - Present</p>
                        <p>Safe-Note</p>
                        <p>A web application that offers a safe way to keep notes and also real time collaboration on any writing project using socket.io.</p>
                    </div>
                </div>
            </div>
            {/* <div>
                <h2 className='text-center'>Education</h2> 
                <div className='grid gap-6 py-[4rem]'> 
                    <div className='shadow px-4 py-2'>
                        <p>2023-01 - Present</p>
                        <p>Uniuyo</p>
                    </div> */}
                    {/* <div className='shadow px-6 py-4'>
                        <p>2023-01 - Present</p>
                        <p>Safe-Note</p>
                        <p>A web application that offers a safe way to keep notes and also real time collaboration on any writing project using socket.io.</p>
                    </div> */}
                {/* </div> */}
            {/* </div> */}
        </main>
    </section>
  )
}

export default Experience