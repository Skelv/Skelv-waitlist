<<<<<<< HEAD
"use client"
import React, { useState } from 'react';
import { BiChevronDown, BiPlus } from 'react-icons/bi';

const Accordion = ({ title, text }) => {
    const [open, setOpen] = useState(false)
    return (
        <div role="tablist" className='border-spacing-3 border-opacity-10 border cursor-pointer transition-all ease-in-out duration-700 relative overflow-hidden border-grey mx-auto max-w-[1000px]  w-full py-5 rounded-xl shadow-xl my-5 px-3 sm:px-10  ' onClick={()=>{setOpen(!open)}}  >
            <div className='text-primary text-4xl flex justify-between  ' role="tab" tabIndex={0} >
                <p className='text-black text-xl sm:text-2xl font-bold my-5 ' >{title}</p> <BiChevronDown className={`${open ? 'rotate-180' : 'rotate-0'} text-black cursor-pointer  duration-500 ease-in-out transition-all `} onClick={()=>{setOpen(false)}} />
            </div>
            <div className={` ${open? 'block' : 'hidden'} my-55 sm:text-xl text-black `} role="tab" tabIndex={0} >{text}</div>
        </div>
    );
}

export default Accordion;
=======
"use client"
import React, { useState } from 'react';
import { BiChevronDown, BiPlus } from 'react-icons/bi';

const Accordion = ({ title, text }) => {
    const [open, setOpen] = useState(false)
    return (
        <div role="tablist" className='border-spacing-3 border-opacity-10 border cursor-pointer transition-all ease-in-out duration-700 relative overflow-hidden border-grey mx-auto max-w-[1000px]  w-full py-5 rounded-xl shadow-xl my-5 px-3 sm:px-10  ' onClick={()=>{setOpen(!open)}}  >
            <div className='text-primary text-4xl flex justify-between  ' role="tab" tabIndex={0} >
                <p className='text-black text-xl sm:text-2xl font-bold my-5 ' >{title}</p> <BiChevronDown className={`${open ? 'rotate-180' : 'rotate-0'} text-black cursor-pointer  duration-500 ease-in-out transition-all `} onClick={()=>{setOpen(false)}} />
            </div>
            <div className={` ${open? 'block' : 'hidden'} my-55 sm:text-xl text-black `} role="tab" tabIndex={0} >{text}</div>
        </div>
    );
}

export default Accordion;
>>>>>>> f52cc9f (first commit)
