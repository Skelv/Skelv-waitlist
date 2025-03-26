'use client'
import React, { useState } from "react";
import { OutLineButton } from "./Button";
import Link from 'next/link';
import {Link as ScrollLink} from 'react-scroll'
import { BiMenuAltRight, BiX } from "react-icons/bi";

const nav = [
  { name: "About", route: "mission" },
  { name: "How it works", route: 'howitworks'  },
  { name: "FAQs", route: "faq" },
];


const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div role="banner" className="h-20 z-[9999] shadow-sm border-b-2 border flex items-center justify-between max-[1302px]:px-5 px-32" id='header' >
      
      
      <Link className="text-2xl w-[20%] font-Monteserrat-bold cursor-pointer "  href='/'>
      <p   >SKELV</p>
      </Link>
      

     <div className="flex max-sm:shadow-2xl flex-1 items-center flex-row max-[1302px]:flex-col max-[1302px]:absolute left-0 right-0 top-20 max-[1302px]:bg-white px-0 max-[1302px]:w-full  justify-between " >
       <nav role="navigation" className={` ${open? 'flex  max-[1302px]:py-10 ' : 'hidden'}  min-[1302px]:flex max-[1302px]:flex-col max-[1302px]:w-full max-[1302px]:items-center text-center  justify-between w-[60%] text-xl flex-row`}>
        {nav.map((nav, index) => (
          <ul key={nav.name} role="tablist" className="flex">
            <ScrollLink to={nav.route}  activeClass="active"
              smooth={true}
              spy={true}
              key={index}
              offset={-150}>
              <li className="cursor-pointer max-[1302px]:my-5 focus:font-Monteserrat-bold " role="tab" tabIndex={0}  >{nav.name}</li>
            </ScrollLink>
          </ul>
        ))}
      </nav>

    <OutLineButton link="/waitlist" className={`border-orange-500 ${open? 'flex  max-[1302px]:my-10 ' : 'hidden'} min-[1302px]:flex block text-orange-500 font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 w-full `} text="Get Early Access" />
    
    
      </div>
      {open? <BiX onClick={()=> setOpen(!open)} className="text-3xl text-end min-[1302px]:hidden block  " /> : <BiMenuAltRight onClick={()=> setOpen(!open)} className="text-3xl text-end min-[1302px]:hidden block  " />}
    </div>
  );
};

export default Header;
