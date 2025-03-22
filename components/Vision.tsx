import Image from 'next/image'
import React from 'react'
import { OutLineButton } from './Button'

const Vision = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mx-40" id='vision'>
      <div className=' ' >
      <Image src='/img.png' width={30} height={20} className='w-full h-[60%] object-cover ' alt='Vision illustration' />
      </div>
      <div>
     <h3 className='text-2xl font-Monteserrat-bold my-5' >OUR VISION</h3>
     <p className='my-3' >
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic impedit, minima harum, sapiente dolorem at dolorum vel corporis consequuntur veritatis, nemo perferendis! Quis rem soluta est suscipit laborum sit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque eius quo, odio illum, deserunt debitis et fugit eaque sit ipsam iusto velit eveniet officiis maxime? Fugit necessitatibus ducimus quibusdam!
      
     </p>

     <p className='my-3' >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio atque id, quibusdam animi facilis dicta explicabo eligendi, tempora sapiente molestiae non beatae provident ullam adipisci temporibus quos eum necessitatibus!</p>

<OutLineButton className="border-orange-500 text-orange-500 w-[60%] my-5 mx-auto font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 " text="Get Early Access" />
      </div>
    </div>
  )
}

export default Vision