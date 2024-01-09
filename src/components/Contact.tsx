"use client"
import { usePortfolioContext } from '@/context/PortfolioContext'
import { colors } from '@/data/data'
import React from 'react'
import { FaGithub, FaLinkedin, FaLocationArrow, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import {MdEmail} from "react-icons/md"

const Contact = () => {
    const {color} = usePortfolioContext()
  return (
    <section className="w-full xl:w-[90%] mx-auto">
        <main className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[95%] mx-auto'>
        {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Contact Me </>"}</h1> */}
            <section className='grid place-items-center gap-5'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Contact Me </>"}</h1>
                <div className='flex gap-4'>
                    
                    <div className='h-4 w-8 shadow rounded-md'></div>
                    <div className='h-4 w-8 shadow grid place-items-center rounded-md'><div className='w-1/2 h-1 bg-red-400'></div></div>
                    <div className='h-4 w-8 shadow rounded-md'></div>
                </div>
            </section>
        <div className='pt-[4rem] pb-[10rem]'>     
            <div >
                <p>Are you in need of a developer?</p>
                <p>Do you want to collaborate on a project?</p>
                <p>Want to connect with me?</p>
            </div>
            <div>
                <FaLocationArrow/>
            </div>
            {/* <div className='flex gap-3'>
                <FaGithub className="w-6 h-6"/>
                <FaLinkedin className="w-6 h-6"/>
            </div> */}
            <section className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='bg-bgColor shadow p-8 grid place-items-center gap-3 rounded-md'>
                    <FaGithub className="w-10 h-10" style={{color: `${colors[color].color}`}}/>
                    <h3 className='text-2xl font-bold text-[${colors[color].color}]' style={{color: `${colors[color].color}`}} >Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow p-8 grid place-items-center gap-3 rounded-md'>
                    <FaTwitter className="w-10 h-10" style={{color: `${colors[color].color}`}}/>
                    <h3 className='text-2xl font-bold text-[${colors[color].color}]' style={{color: `${colors[color].color}`}} >Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow p-8 grid place-items-center gap-3 rounded-md'>
                    <FaLinkedin className="w-10 h-10" style={{color: `${colors[color].color}`}}/>
                    <h3 className='text-2xl font-bold text-[${colors[color].color}]' style={{color: `${colors[color].color}`}} >Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow p-8 grid place-items-center gap-3 rounded-md'>
                    <MdEmail className="w-10 h-10" style={{color: `${colors[color].color}`}}/>
                    <h3 className='text-2xl font-bold text-[${colors[color].color}]' style={{color: `${colors[color].color}`}} >Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
            </section>
        </div>
        </main>
    </section>
  )
}

export default Contact