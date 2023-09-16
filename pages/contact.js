import React from 'react'
import Navbar from '../components/Navbar'
import {HiOutlineMail} from "react-icons/hi"

function contact() {
  return (
    <div>
        <Navbar />
        <div className='h-full flex flex-col relative  md:flex-col text-center md:text-left max-w-7xl px-5
        md:px-10 mx-auto items-center md:mt-32'>
          <h1 className='uppercase md:tracking-[24px] tracking-[12px] text-green-500 text-2xl font-semibold mb-20'>Contact Us</h1>
          <div className='flex flex-col md:flex-row gap-10'>
            <div></div>
            <div>
              <div className='uppercase font-bold text-gray-500 mb-3'>Office in India</div>
              <div>Office Address</div>
              <div className='flex flex-row'>
                <span className='my-auto'><HiOutlineMail /></span>
                <span>Email address</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default contact