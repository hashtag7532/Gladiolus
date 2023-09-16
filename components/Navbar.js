import React, {useState} from 'react'
import Logo from "../public/images/Logo.png"
import Image from "next/image"
import NavLinks from './NavLinks'
import Buttons from './Buttons'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Link from "next/link"

function Navbar() {
    const [open, setOpen] = useState(false)

    const list = [{name:"PET"}, {name:"Glass"}, {name:"Bottle"}]
  return (
    <nav className='bg-white h-full'>
        <div className='flex items-center font-medium justify-around'>
            <div className=' p-5 md:w-auto w-full flex justify-between'>
                <Image src={Logo} className="md:cursor-pointer h-12 w-[100px] z-50" />
                <div className='text-3xl md:hidden z-50' onClick={()=>setOpen(!open)} >
                    {!open ? (
                        <AiOutlineMenu /> 
                    ) : (<AiOutlineClose />)}
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins] z-10'>
                <Link href="/"><li className='py-7 px-3 inline-block'>
                    Home
                </li>
                </Link>
                <Link href="/about"><li className='py-7 px-3 inline-block'>
                    About Us
                </li>
                </Link>
                <Link href="/contact"><li className='py-7 px-3 inline-block'>
                    Contact Us
                </li>
                </Link>
                <NavLinks />
            </ul>
            <div className='md:block hidden'>
                <Buttons />
            </div>
            {/* Mobile Nav */}
            <ul className={`md:hidden absolute bg-yellow-100 z-10 w-full h-screen bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`} >
                <Link href="/">
                    <li className='py-3 px-3'>
                        Home
                    </li>
                </Link>
                <Link href="/about">
                    <li className='py-3 px-3 '>
                        About Us
                    </li>
                </Link>
                <Link href="/contact">
                    <li className='py-3 px-3'>
                        Contact Us
                    </li>
                </Link>
                <NavLinks />
                <div className='py-5'>
                    <Buttons />
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar