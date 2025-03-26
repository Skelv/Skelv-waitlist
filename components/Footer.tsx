<<<<<<< HEAD
"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link  from "next/link";
import { FaFacebookF, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
   <div className=" bg-slate-100 " >
     <div className="grid max-sm:gap-y-10 gap-x-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 grid-cols-4  max-md:px-10 px-20 items-center justify-center py-10 ">
      <div className="text-center border-r max-sm:border-none border-[#808080] px-3 h-full flex flex-col justify-center " >
        <p className="text-3xl text-orange-600 font-Monteserrat-bold" >SKLEV</p>
        <p className="text-xl my-3" >Helping talents to grow, empowering businesses to strive.</p>
      </div>
      <div className="text-center border-r max-md:border-none border-[grey] px-3 h-full flex flex-col justify-center " >
        <span className="text-2xl font-Monteserrat-bold" >Quick Links</span>
        <ul className="" >
          <ScrollLink
            to="header"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <li className="text-xl my-3" >Home</li>
          </ScrollLink>
          <ScrollLink
            to="mission"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <li className="text-xl my-3" >About Us</li>
          </ScrollLink>
          <ScrollLink
            to="howitworks"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <li className="text-xl my-3" >How it works</li>
          </ScrollLink>
          <Link href={'/'} ><li className="text-xl my-3" >Join Waitlist</li></Link>
          <ScrollLink
            to="faq"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <li className="text-xl my-3" >FAQs</li>
          </ScrollLink>
        </ul>
      </div>
      <div className="text-center border-r max-sm:border-none border-[grey] px-3 h-full flex flex-col justify-center " >
        <span className="text-2xl font-Monteserrat-bold"  >Legal & Policies</span>
        <ul>
          <Link href={'/'} ><li  className="text-xl my-3" >Terms of service</li></Link>
          <Link href={'/'} ><li  className="text-xl my-3" >Privacy Policy</li></Link>
        </ul>
      </div>
      <div className="text-center" >
        <span className="text-2xl font-Monteserrat-bold"  >Contact Information</span>
        <p className="text-xl my-3" >Follow us on</p>
        <div className="text-3xl flex justify-between mx-auto w-[30%]" ><BiLogoInstagram/> <BiLogoFacebookCircle/> <BiLogoTwitter/></div>
        <p className="text-xl my-3" >Email: <Link href={'mailto:excellenceay33@gmail.com'}>excellenceay33@gmail.com</Link></p>
      </div>
    </div>
    <p className='text-center font-Monteserrat-bold text-xl max-sm:text-sm py-10 ' >&copy; {new Date().getFullYear()} Skelv. All Right Reserved. </p>
   </div>
  );
};

export default Footer;
=======
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
>>>>>>> f52cc9f (first commit)
