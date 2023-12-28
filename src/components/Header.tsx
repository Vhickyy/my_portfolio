"use client"
import React, { useEffect, useRef, useState } from 'react'
import {FaHome} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs"
import { colors, navLinks } from '@/data/data';
import { usePortfolioContext } from '@/context/PortfolioContext';

const Header = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    const [mobileMenu,setMobileMenu] = useState(false);
    const {color,toggleColor,showColor} = usePortfolioContext();
    const [position,setPosition] = useState(0)

    const scroll = () => {
        const scrolling = window.pageYOffset;
        if(headerRef.current){
            if(scrolling > position){
                headerRef.current.classList.add("sticky-cl");
            }else{
                headerRef.current.classList.remove("sticky-cl");
                headerRef.current.style.boxShadow = "2px 2px 6px gray";
            }
            if(position <= 20){
                headerRef.current.style.boxShadow = "none";
            }
            setPosition(scrolling)
        }
    }
    

    useEffect(()=>{
        window.addEventListener("scroll",scroll)
        return () => window.removeEventListener("scroll",scroll)
    },[position])

    // const links = navLinks.map((link,index)=>{
    //     return (
    //         <button className='border border-gray-500 p-2 rounded-md' key={index}>
    //             <FaHome />
    //         </button>
    //     )})

  return (
    <header className=' z-[2] bg-bgColor sticky top-0' ref={headerRef}>
        <nav className='flex justify-between items-center py-6  w-[90%] mx-auto'>
            {/* logo */}
            <div className={`shadow bg-bgColor  grid items-center rounded-md  w-[30%] max-w-[10rem] text-center`}>
                <div className='border border-gray-500 py-2 px-4 rounded-md '>
                    Victoria
                </div>
            </div>
            {/* desktop nav */}
            <section className={`shadow bg-bgColor hidden md:flex items-center rounded-md gap-6 py-2 px-8 `}>
                {navLinks.map((_link,index)=>{
                    return (
                        <button key={index} className='border border-gray-500 p-2 rounded-md' >
                            <FaHome />
                        </button>
                )})}
            </section>
            {/* third flex item */}
            <section className='flex gap-4'>
                {/* mobile nav */}
                <aside className={` shadow bg-bgColor  grid items-center rounded-md relative md:hidden`} onClick={()=>setMobileMenu(pre=>!pre)}>
                    <button className='border border-gray-500 p-2 rounded-md '>
                        <div className='h-6 w-6 bg-red-400 rounded-full'></div>
                    </button>
                    <div className={`absolute top-[100%] -left-1/2 -translate-x-[52%] px-2 shadow flex gap-2 mt-3 bg-bgColor h-0 overflow-hidden transition-all duration-500 ${mobileMenu ? "h-[3rem] " : ""}`}>
                        {navLinks.map((link,index)=>{
                            return (
                                <button key={index} className=' p-2 rounded-md' >
                                    <FaHome className="h-6 w-6"/>
                                </button>
                        )})}
                    </div>
                </aside>
                {/* theme */}
                <figure className={` shadow bg-bgColor  grid items-center rounded-md`}>
                    <button className='border border-gray-500 px-2 p-2 rounded-md'>
                        <BsSunFill className="w-6 h-6"/>
                    </button>
                </figure>
                {/* color picker */}
                <aside className={` shadow bg-bgColor grid items-center rounded-md bg-blue-300 relative`}>
                    <button className='border border-gray-500 p-2 rounded-md' onClick={()=>toggleColor()}>
                        <div className='h-6 w-6 rounded-full' style={{backgroundColor: colors[color].color}}></div>
                    </button>
                    <div className={`absolute top-[100%] left-1/2 -translate-x-1/2 rounded-md shadow grid gap-2 mt-3 bg-bgColor  transition-all duration-500 px-2 overflow-hidden h-0 ${showColor ? "h-[11rem] py-2" : ""}`}> 
                        {colors.map((c,index)=>{
                            return (
                                <button key={index} style={{backgroundColor: c.color}} className={`h-6 w-6 rounded-full`} onClick={()=>toggleColor(index)}></button>
                            )
                        })}
                    </div>
                </aside>
            </section>
        </nav>
    </header>
  )
}

export default Header