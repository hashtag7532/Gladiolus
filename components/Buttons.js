import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Buttons = () => {
  return (
    <div className='px-4 py-2 space-x-2'>
        <SocialIcon url='https://www.instagram.com/gladiolusenterprises/?hl=en' />
        <SocialIcon url='https://www.facebook.com/harshit.dodia' />
        <SocialIcon network="whatsapp" url='https://wa.me/message/6H62ZN3R7645O1' />
    </div>
  )
}

export default Buttons