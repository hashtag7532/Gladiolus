import React from 'react'
import Link from 'next/link'
import { links } from "./Mylinks.js"
import {useState} from "react"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons"

function NavLinks() {
    const [heading, setHeading] = useState("")
  return (
    <>
        {links.map((link)=>(
            <div className='z-5'>
                <div className='px-3 text-left md:cursor-pointer py-3 group'>
                    <h1 className='flex justify-between items-center md:pr-0 pr-5' onClick={() => heading !== link.name ? setHeading(link.name) : setHeading("")}>
                        {link.name}
                        <span className='text-xl md:mt-1 md:ml-2 inline' >
                        </span>
                    </h1>
                    {link.submenu && 
                        <div>
                            <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                </div>
                                <div className='bg-white p-3.5 rounded-lg'>
                                {
                                    link.sublinks.map((mysublinks)=>(
                                        <div>
                                            <li className='text-sm text-gray-600 my-2.5'>
                                                <Link href={mysublinks.link} className="hover:text-blue-400 " >{mysublinks.name}</Link>
                                            </li>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {/* Mobile Menus */}
                <div className={`
                  ${heading === link.name ? 'md:hidden' : 'hidden'}
                `}>
                    {link.sublinks.map((slinks)=>(
                        <div>
                            <div>
                                <Link href={slinks.link}><h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.name}</h1></Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        ))}
    </>
  )
}

export default NavLinks