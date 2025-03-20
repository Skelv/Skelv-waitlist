import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OutLineButton } from "./Button";

const nav = [
  { name: "About", route: "/" },
  { name: "How it works", route: "/" },
  { name: "Launching strategy", route: "/" },
  { name: "FAQs", route: "/" },
];

const Header = () => {
  return (
    <div className="h-20 shadow-sm border-b-2 border flex items-center justify-between px-32">
      <div>
        <Image
          width={50}
          height={50}
          alt="logo"
          aria-valuetext="logo image"
          src={"globe.svg"}
        />
      </div>

      <nav className="flex  justify-between w-[40%] flex-row">
        {nav.map((nav, index) => (
          <ul key={nav.name} className="flex">
            <Link href={"/"}>
              <li>{nav.name}</li>
            </Link>
          </ul>
        ))}
      </nav>

      <OutLineButton className="border-orange-500 text-orange-500  font-Monteserrat-bold hover:text-white hover:bg-orange-500 transition-all ease-out duration-75 " text="Get Early Access" />
    </div>
  );
};

export default Header;
