import React, {useState} from 'react'
import Logo from "../public/images/Logo.png"
import Image from "next/image"
import NavLinks from './NavLinks'
import Buttons from './Buttons'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Navbar5() {
    const [open, setOpen] = useState(false)

    const list = [{name:"PET"}, {name:"Glass"}, {name:"Bottle"}]
  return (
    <nav className='bg-white'>
        <div className='flex items-center font-medium justify-around'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                <Image src={Logo} className="md:cursor-pointer h-12 w-[100px]" />
                <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)} >
                    {!open ? (
                        <AiOutlineMenu /> 
                    ) : (<AiOutlineClose />)}
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                <li className='py-7 px-3 inline-block'>
                    Home
                </li>
                <li className='py-7 px-3 inline-block'>
                    About Us
                </li>
                <li className='py-7 px-3 inline-block'>
                    Contact Us
                </li>
                
                <NavLinks />
            </ul>
            <div className='md:block hidden'>
                <Buttons />
            </div>
            {/* Mobile Nav */}
            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`} >
                <li className='py-3 px-3'>
                    Home
                </li>
                <li className='py-3 px-3 '>
                    About Us
                </li>
                <li className='py-3 px-3'>
                    Contact Us
                </li>
                <NavLinks />
                <div className='py-5'>
                    <Buttons />
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar5