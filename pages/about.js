import React from 'react'
import Navbar from '../components/Navbar'
import logo from "../public/images/Gladiolus logo.jpg"
import Image from 'next/image'

function About() {
  return (
    <div>
        <section>
            <Navbar />
        </section>
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row justify-evenly items-center px-10 mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-green-500 text-2xl font-semibold'>About Us</h3>
            <div>
                <Image src={logo} alt="" width={300} height={150} />
            </div>
            
            <div className='space-y-10 px-0 md:px-10 '>
                <span className='text-4xl font-bold'>I </span>
                <span className='text-xl '></span>
            </div>
        </div>
    </div>
  )
}

export default About