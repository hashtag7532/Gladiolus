import React from 'react'
import Navbar from '../components/Navbar'
import logo from "../public/images/Logo.png"
import Image from 'next/image'

function About() {
  return (
    <div className=''>
        <Navbar />
        <div class='h-full flex relative flex-col text-center md:text-left md:mt-32 mt-24 items-center px-5 md:px-10 mx-auto'>
            <h3 class='uppercase tracking-[20px] text-green-500 md:text-2xl text-xl font-semibold mb-20'>About Us</h3>
            <div class='flex flex-col md:flex-row justify-center items-center space-y-4'>
            <div class='my-auto md:w-1/5 '>
                <Image src={logo} alt="" width={200} height={100}/>
            </div>
            <div class='text-center space-y-4 w-full'>
                <span class='md:text-4xl text-2xl font-bold'>G</span>
                <span class='text-base md:text-lg'>ladiolus Enterprises was incorporated in 2018 to lay down a foundation stone for bringing in uniqueness and ease in use of tissues and wipes. The company launched its first product in the shape of a combo box consisting of both dry tissues and wet wipes in a single mobile handy packaging. This product was launched under our in-house brand name Aroha®. We have been working as a marketer at the same time to bring in the best quality products from across the places to give them a place in the current market trends. These products mainly include food packaging materials made up of Paper, Wooden, Sal, Areca, or Bagasse substance. Our company has associated with several well-known brands to channelize their products and is in the continuous process to find better ways to improve their methods. As we believe, it will help us to be more valuable where customers are earned with our uniqueness and loyalty.
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About