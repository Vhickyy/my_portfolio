import React from 'react'
import { FaGithub, FaLinkedin, FaLocationArrow, FaSearchLocation } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="w-full mx-auto">
        <main className='w-[85%] md:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto'>
        <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Contact Me </>"}</h1>
        <div className='py-[4rem]'>     
            <div >
                <p>Are you in need of a developer?</p>
                <p>Do you want to collaborate on a project?</p>
                <p>Want to connect with me?</p>
            </div>
            <div>
                <FaLocationArrow/>
            </div>
            <div className='flex gap-3'>
                <FaGithub className="w-6 h-6"/>
                <FaLinkedin className="w-6 h-6"/>
            </div>
        </div>
        </main>
    </section>
  )
}

export default Contact