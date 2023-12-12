import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="max-w-[1440px] w-[90%] xl:w-[85%] mx-auto">
        <Hero/>
        <About />
        <Experience/>
        <Project/>
      </main>
    </>
  )
}
