import React from "react";
import Button, { OutLineButton } from "./Button";
import Image from "next/image";

const companiesImages = [
  { src: "img.png" },
  { src: "img.png" },
  { src: "img.png" },
  { src: "img.png" },
];

const companies = [
  { src: "/logo5c.png" },
  { src: "/logo6c.png" },
  { src: "/logo5c.png" },
  { src: "/logo6c.png" },
  { src: "/logo5c.png" },
];

const Hero = () => {
  return (
    <section className=" px-32 ">
      <div className="flex flex-row">
        <div className="left-side w-[50%]  ">
          <OutLineButton
            text="Work on real live projects"
            className="text-black my-10 border-black "
          />
          <div className="text-6xl text-black text-opacity-70  font-Monteserrat-bold ">
            <p>Get Hired,</p> <p>Gain Experience,</p> <p>Build Your <span className="text-orange-500">Portfolio</span>.</p>
          </div>
          <p className=" my-5 text-xl">
            You've got te skills, now get the experience. Work on real projects, grow your portfolio and attractthigh-playing clients.
          </p>
            <Button className="hover:bg-orange-600  " width="w-[60%]" text="Join waitlist" />
          <div className="flex items-center my-3">
            <div className="companies-images-style flex -space-x-4 ">
              {companiesImages.map((data, index) => (
                <Image
                  key={index}
                  width={40}
                  height={40}
                  className="rounded-full"
                  src={"/" + data.src}
                  alt="image"
                />
              ))}
            </div>
            <div className="mx-2">
              +206 others joined waitlist
            </div>
          </div>
        </div>
        <div className="right-side grid grid-cols-2 w-[50%] gap-x-6 scale-90 my-5 ">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/img.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/img.png"
              alt="image"
            />
          </div>
          <div className="relative">
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/img.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/img.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="companies ">
        <p className="text-center">Trusted by 200+ companies</p>
        <ul className="flex justify-center flex-wrap items-center my-10 relative ">
          {companies.map(data => (
          <li key={data.src} className="w-full max-md:max-w-28 max-w-52 mx-5 list-none relative ">
            <Image
              width={500}
              height={288}
              className=" w-full object-cover "
              src={data.src}
              alt="img_default"
            />
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
