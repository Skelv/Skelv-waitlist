
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
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic impedit, minima harum, sapiente dolorem at dolorum vel corporis consequuntur veritatis, nemo perferendis! Quis rem soluta est suscipit laborum sit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque eius quo, odio illum, deserunt debitis et fugit eaque sit ipsam iusto velit eveniet officiis maxime? Fugit necessitatibus ducimus quibusdam!
      
     </p>

     <p className='my-3' >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio atque id, quibusdam animi facilis dicta explicabo eligendi, tempora sapiente molestiae non beatae provident ullam adipisci temporibus quos eum necessitatibus!</p>

<OutLineButton link='/waitlist' className="border-orange-500 text-orange-500 max-md:w-full w-[60%] my-5 mx-auto font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 " text="Get Early Access" />
      </div>
    </div>
  )
}


export default Vision
