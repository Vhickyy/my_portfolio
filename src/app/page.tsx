import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* <div className='absolute h-[20rem] w-[20rem] bg-blue-500 opacity-20 top-[40rem] z-[-1]'></div> */}
      {/* <div className='absolute h-[10rem] w-[20rem] bg-blue-500 opacity-20 top-[90rem] right-0 z-[-1]'></div> */}
      <Header/>
      <Hero/>
      {/* <main className="max-w-[1440px] w-[90%] xl:w-[85%] mx-auto"> */}
        <About />
        <Experience/>
        <Project/>
      {/* </main> */}
    </>
  )
}
