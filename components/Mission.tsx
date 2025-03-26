
import React from 'react'
import { FaSuitcase } from 'react-icons/fa'
import {MdCases, MdGroups} from 'react-icons/md'

const Mission = () => {
  return (
    <div className='max-[1302px]:mx-5 max-md:my-10 m-40' id='mission' >
     <h3 className='text-2xl font-Monteserrat-bold max-sm:my-5 my-10' >OUR MISSION</h3>
     <div className="grid max-[1302px]:grid-cols-1 justify-center items-center grid-cols-2">
     <div className='my-5' >
      <div className='text-2xl text-white bg-orange-700 rounded-full w-fit p-3 text-center' ><FaSuitcase/></div>
      <div className='text-xl my-4 font-bold' >Helping talents gain experience through real tasks</div>
      <div className='text-sm  min-[640px]:my-4 max-md:w-full w-[80%] ' >At Skelv, we bridge the gap between learning and real-world experience.
 Our platform empowers aspiring professionals by connecting them with real tasks from small businesses, allowing them to 
build skills, gain confidence, and create a portfolio that speaks for itself. By working on practical projects, talents 
transform their knowledge into hands-on expertise, setting the foundation for future career success.
</div>
     </div> 
     <div className='' >
      <div className='text-2xl text-white bg-orange-700 rounded-full w-fit p-3 text-center' ><MdGroups/></div>
      <div className='text-xl my-4 font-bold' >Helping Small Businesses Grow with Skilled Support</div>
      <div className='text-sm min-[640px]:my-4 max-md:w-full w-[80%] ' >Skelv is dedicated to assisting small-scale businesses grow by giving 
them access to skilled talents eager to contribute. Our platform offers cost-effective solutions, enabling businesses to 
get quality work done while supporting aspiring professionals in gaining real-world experience. By bridging this gap, we
 create a win-win environment where businesses thrive, and talents sharpen their skills.
</div>
     </div>
     
     </div>
    </div>
  )
}

export default Mission
