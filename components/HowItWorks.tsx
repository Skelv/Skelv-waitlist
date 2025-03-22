"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const actionBtns = ["1","2","3","4"]

const worksContent = [
    {id:0, title:'Businesses Post Tasks', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/img.png'},
    {id:1, title:'Talents Accept & Complete Tasks', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/img.png'},
    {id:2, title:'Works Gets Done', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/img.png'},
    {id:3, title:'Growth for Everyone', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis corporis blanditiis itaque officia praesentium tenetur quia accusantium aperiam? Iusto pariatur voluptas laudantium amet praesentium ipsum aliquam sunt dicta numquam!', imageSrc:'/img.png'},
]

const HowItWorks = () => {
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const filteredWorksContent = worksContent.filter((data) => data.id === selectedIndex);

  return (
    <div className='my-40 max-w-[70%] mx-auto ' id='howitworks' >
     <h3 className='text-2xl font-Monteserrat-bold my-10' >HOW IT WORKS</h3>

     <div className='flex items-center ' >
     <div className='h-80 flex justify-between flex-col w-[20%] ' >
        {actionBtns.map((data, index) => (
            <div key={data} onClick={()=> setSelectedIndex(index)} className={` hover:cursor-pointer ${selectedIndex === index? 'bg-orange-700' : 'bg-slate-400'} text-white px-5 py-3 rounded-full w-fit `} >{data}</div>
        ))}
     </div>
     <div className="content">
        {filteredWorksContent.map(data => (
            <div key={data.id}>
                
            <div className='text-3xl font-Monteserrat-bold my-5' >{data.title}</div>
            <div className='text-xl w-full my-10 ' >{data.description}</div>
            <div><Image src={data.imageSrc} alt='image' className='w-[800px] h-[400px] object-cover ' width={100} height={100} /></div>
            </div>
        ))}
     </div>
     </div>
     </div>
  )
}

export default HowItWorks