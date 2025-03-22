'use client'
import Image from "next/image";
import React from "react";
import { OutLineButton } from "./Button";
import {Link} from 'react-scroll'

const nav = [
  { name: "About", route: "mission" },
  { name: "How it works", route: 'howitworks'  },
  { name: "Launching strategy", route: "vision" },
  { name: "FAQs", route: "faq" },
];

const Header = () => {
  return (
    <div className="h-20 shadow-sm border-b-2 border flex items-center justify-between px-32" id='header' >
      <div>
        <p className="text-2xl font-Monteserrat-bold" >SKLEV</p>
      </div>

      <nav className="flex  justify-between w-[40%] flex-row">
        {nav.map((nav, index) => (
          <ul key={nav.name} className="flex">
            <Link to={nav.route}  activeClass="active"
              smooth={true}
              spy={true}
              key={index}
              offset={-150}>
              <li className="cursor-pointer " >{nav.name}</li>
            </Link>
          </ul>
        ))}
      </nav>

      <OutLineButton className="border-orange-500 text-orange-500  font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 " text="Get Early Access" />
    </div>
  );
};

export default Header;
