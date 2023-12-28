"use client"
import React from 'react';
import Image from 'next/image';
import MyImg from "@/images/myImg.png"
import {skills} from "@/data/data"
import { FaCss3, FaHome, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript } from "react-icons/io";
import {BiLogoTypescript } from "react-icons/bi";

import {motion} from "framer-motion"
const About = () => {
    // const skills = [
    //     {
    //         icon: <FaHtml5 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
    //         name: "HTML5"
    //     },
    //     {
    //         icon: <FaCss3 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    //     {
    //         icon: <IoLogoJavascript className="text-blue-900 h-[2rem] w-[2rem]"/>,
    //         name: "JavaScript"
    //     },
    //     {
    //         icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    //     {
    //         icon: <BiLogoTypescript className="text-blue-900 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    //     {
    //         icon: <FaHtml5 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
    //         name: "HTML5"
    //     },
    //     {
    //         icon: <FaCss3 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    //     {
    //         icon: <IoLogoJavascript className="text-blue-900 h-[2rem] w-[2rem]"/>,
    //         name: "JavaScript"
    //     },
    //     {
    //         icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    //     {
    //         icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
    //         name: "CSS3"
    //     },
    // ]
  return (
    <section className="w-full xl:w-[90%] mx-auto">
        <main className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[75%] mx-auto'>
            <h1 className='text-center'>About</h1>
            <section className='py-[4rem] flex flex-col gap-8 lg:gap-10 md:flex-row items-center '>
                <motion.aside className='relative flex justify-center items-center'
                    initial={{x: "-100px",opacity:0.1}}
                    whileInView={{x: "0px", opacity:1}}
                    transition={{duration:1}}
                >
                    <div className='absolute border-rotate w-[19rem] h-[19rem]'></div>
                    <div className='w-[20rem] h-[20rem] mx-auto rounded-full overflow-hidden border-[1.5rem]  border-bgColor shadow  flex justify-center items-center'>
                        <div className='rounded-full inset-shadow h-full w-full'>
                            <Image src={MyImg} alt='Victoria' className=' object-cover w-full h-full'/>
                        </div>
                    </div>
                </motion.aside>
                <aside className='grid gap-2'>
                    <p>My name is Victoria Okonnah and I'm a full-Stack developer. I'm skilled at building accessibile, responsive and scalable web applications using React.js on the frontend and Node.js on the backend. </p>
                    <p>I have good communication skill, I love to code.</p>
                    <div className='flex flex-wrap gap-4 mt-2'>
                    {skills.map((skill,index)=>{
                        return (
                            <button className='shadow py-2 min-w-[2.9rem] grid place-items-center' key={index}>
                                {skill.icon}
                            </button>
                            )
                        })}
                    </div>
                </aside>
            </section>
        </main>
    </section>
  )
}

export default About