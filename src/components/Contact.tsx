import React from 'react'
import { FaGithub, FaLinkedin, FaLocationArrow, FaSearchLocation } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="w-full xl:w-[90%] mx-auto">
        <main className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[95%] mx-auto'>
        <h1 className='text-center text-2xl md:text-4xl font-bold'>{"<> Contact Me </>"}</h1>
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
            <section className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div className='bg-bgColor shadow'>
                    <FaGithub className="w-6 h-6"/>
                    <h3>Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow'>
                    <FaGithub className="w-6 h-6"/>
                    <h3>Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow'>
                    <FaGithub className="w-6 h-6"/>
                    <h3>Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
                <div className='bg-bgColor shadow'>
                    <FaGithub className="w-6 h-6"/>
                    <h3>Github</h3>
                    <p>Victoria Okonnah</p>
                </div>
            </section>
        </div>
        </main>
    </section>
  )
}

export default Contact