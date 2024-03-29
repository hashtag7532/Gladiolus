import { useState, useEffect } from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar'
import cardList from "./data"

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleButtonClick = (link) => {
    if (isMobile){
      window.open(link, "_blank")
    }
    else{
      window.open(link, "_blank")
    }
  }

  return (
    <div className=''>
      <Navbar />
      <div className="mx-auto py-36 px-8">
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
          {cardList.map(card =>(
            <div className='shadow-lg rounded-lg flex flex-col'>
              <Image src={card.img} width={620} height={427} className="rounded-t-lg" />
              <div className='p-5'>
                <h3 className='text-3xl font-bold text-slate-700 mb-3'>{card.title}</h3>
                <p className='text-lg font-normal text-gray-600 mb-5'>{card.text}</p>
                <button onClick={() => handleButtonClick(card.link)} className='bg-blue-400 p-3 justify-center mx-auto items-center rounded-lg text-white font-semibold '>{isMobile ? "Download Brochure" : "Open Brochure"}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}