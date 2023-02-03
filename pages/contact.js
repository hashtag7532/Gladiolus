import React from 'react'
import Navbar from '../components/Navbar'
function contact() {
  return (
    <div>
        <Navbar />
        <div className='h-screen flex relative flex-col md:flex-row text-center md:text-left max-w-7xl px-10 mx-auto justify-evenly items-center'>
          <h1 className='absolute top-24 uppercase tracking-[24px] text-green-500 text-2xl font-semibold'>Contact Us</h1>
          <div>
            Hello
          </div>
        </div>
    </div>
  )
}

export default contact