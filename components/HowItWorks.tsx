"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const actionBtns = ["1","2","3","4"]

const worksContent = [
    {id:0, title:'Businesses Post Tasks', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/assets/works1.png'},
    {id:1, title:'Talents Accept & Complete Tasks', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/assets/works2.png'},
    {id:2, title:'Works Gets Done', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/assets/works3.png'},
    {id:3, title:'Growth for Everyone', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/assets/works4.png'},
]

const HowItWorks = () => {
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const filteredWorksContent = worksContent.filter((data) => data.id === selectedIndex);

  return (
    <div className='max-md:my-5 my-40 max-[1302px]:max-w-[90%] max-w-[70%] mx-auto ' id='howitworks' >
     <h3 className='text-2xl font-Monteserrat-bold my-10' >HOW IT WORKS</h3>

     <div className='flex items-center max-md:flex-col-reverse flex-row my-5 ' >
     <div className='max-md:h-fit max-md:my-5 h-80 flex justify-between max-md:flex-row flex-col max-lg:mx-10 max-md:w-[80%] w-[20%] ' >
        {actionBtns.map((data, index) => (
            <div key={data} onClick={()=> setSelectedIndex(index)} className={` hover:cursor-pointer ${selectedIndex === index? 'bg-orange-700' : 'bg-slate-400'} text-white w-10 h-10 flex items-center justify-center rounded-full `} >{data}</div>
        ))}
     </div>
     <div className="content">
        {filteredWorksContent.map(data => (
            <div key={data.id}>
                
            <div className='text-3xl font-Monteserrat-bold my-5' >{data.title}</div>
            <div className='text-xl w-full my-10 ' >{data.description}</div>
            <div><Image src={data.imageSrc} alt='image' className='w-[800px] max-md:h-[300px] h-[400px] object-cover ' width={800} height={800} /></div>
            </div>
        ))}
     </div>
     </div>
     </div>
  )
}

export default HowItWorks