import React from 'react'
import { FaSuitcase } from 'react-icons/fa'

const Miission = () => {
  return (
    <div className='m-32' >
     <h3 className='text-xl font-Monteserrat-bold my-10' >OUR MISSION</h3>
     <div className="grid grid-cols-2">
     <div className='' >
      <div className='text-2xl text-white bg-orange-700 rounded-full w-fit p-3 text-center' ><FaSuitcase/></div>
      <div className='text-xl my-4 font-bold' >Helping talents gain experience through real tasks</div>
      <div className='text-sm my-4 w-[80%] ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam eaque quidem, provident sequi earum, cumque dolore aperiam impedit deleniti quo? Porro perspiciatis quaerat corporis natus. Doloribus quo maxime deleniti?</div>
     </div> 
     <div className='' >
      <div className='text-2xl text-white bg-orange-700 rounded-full w-fit p-3 text-center' ><FaSuitcase/></div>
      <div className='text-xl my-4 font-bold' >Helping talents gain experience through real tasks</div>
      <div className='text-sm my-4 w-[80%] ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quibusdam eaque quidem, provident sequi earum, cumque dolore aperiam impedit deleniti quo? Porro perspiciatis quaerat corporis natus. Doloribus quo maxime deleniti?</div>
     </div>
     
     </div>
    </div>
  )
}

export default Miission