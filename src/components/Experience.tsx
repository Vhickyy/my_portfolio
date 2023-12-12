import React from 'react'

const Experience = () => {
  return (
    <section className='py-[4rem] w-[90%] md:w-full lg:w-[85%] xl:w-[75%] mx-auto'>
        <div>
            <h2 className='text-center'>Experience</h2>
            <div className='grid gap-6 py-[4rem] sm:grid-cols-2'> 
                <div className='shadow px-4 py-2'>
                    <p>2023-01 - Present</p>
                    <p>Tech Room</p>
                </div>
                <div className='shadow px-6 py-4'>
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
    </section>
  )
}

export default Experience