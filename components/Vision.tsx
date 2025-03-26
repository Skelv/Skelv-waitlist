
import Image from 'next/image'
import React from 'react'
import { OutLineButton } from './Button'

const Vision = () => {
  return (
    <div className="grid max-xl:grid-cols-1 grid-cols-2 gap-10 max-[1302px]:mx-10 max-sm:mx-5 mx-40" id='vision'>
      <div className=' ' >
      <Image src='/assets/vision.png' width={800} height={800} className='w-full max-[1302px]:h-full h-[80%] object-cover ' alt='Vision illustration' />
      </div>
      <div>
     <h3 className='text-2xl font-Monteserrat-bold my-5' >OUR VISION</h3>
     <p className='my-3' >
     We envision a world where aspiring professionals no longer struggle to gain real-world experience and build strong portfolios.
 Skelv is creating an ecosystem where talents can showcase their skills through meaningful projects, and businesses can connect
 with fresh, motivated professionals ready to grow.

      
     </p>

     <p className='my-3' >
     By making experience more accessible, we empower talents to launch their 
careers with confidence and help businesses find innovative solutions.
</p>

<OutLineButton link='/waitlist' className="border-orange-500 text-orange-500 max-md:w-full w-[60%] my-5 mx-auto font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 " text="Get Early Access" />
      </div>
    </div>
  )
}


export default Vision
