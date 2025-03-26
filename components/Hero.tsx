<<<<<<< HEAD
import React from "react";
import Button, { OutLineButton } from "./Button";
import Image from "next/image";

const companiesImages = [
  { src: "/assets/avatar1.png" },
  { src: "/assets/avatar2.png" },
  { src: "/assets/avatar3.png" },
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
    <section className="max-[1302px]:mx-5 mx-32 ">
      <div className="flex max-[1302px]:flex-col justify-start flex-row">
        <div className="left-side max-[1302px]:w-full w-[50%]  ">
          <OutLineButton
            text="Work on real live projects"
            className="text-black justify-start max-sm:rounded-xl my-10 border-black "
          />
          <div className="max-md:text-4xl text-6xl text-black text-opacity-70  font-Monteserrat-bold ">
            <p>Get Hired,</p> <p>Gain Experience,</p> <p>Build Your <span className="text-orange-500">Portfolio</span>.</p>
          </div>
          <p className=" my-5 max-sm:text-lg text-xl">
            You've got the skills, now get the experience. Work on real projects, grow your portfolio and attract high-playing clients.
          </p>
            <Button className="hover:bg-orange-600  " link="/waitlist" width="max-sm:w-full w-[60%]" text="Join waitlist" />
          <div className="flex items-center max-sm:justify-center my-3">
            <div className="companies-images-style flex -space-x-4 ">
              {companiesImages.map((data, index) => (
                <Image
                  key={index}
                  width={40}
                  height={40}
                  className="rounded-full  "
                  src={data.src}
                  alt="image"
                />
              ))}
            </div>
            <div className="mx-2">
              +206 others joined waitlist
            </div>
          </div>
        </div>
        <div className="right-side grid grid-cols-2 max-[1302px]:w-full w-[50%] max-sm:gap-x-2 gap-x-6 max-sm:scale-100 scale-75 max-sm:mb-10  my-5 ">
          <div className="">
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero1.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero2.png"
              alt="image"
            />
          </div>
          <div className="">
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero3.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero4.png"
              alt="image"
            />
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default Hero;
=======
import React from "react";
import Button, { OutLineButton } from "./Button";
import Image from "next/image";

const companiesImages = [
  { src: "/assets/avatar1.png" },
  { src: "/assets/avatar2.png" },
  { src: "/assets/avatar3.png" },
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
    <section className="max-[1302px]:mx-5 mx-32 ">
      <div className="flex max-[1302px]:flex-col justify-start flex-row">
        <div className="left-side max-[1302px]:w-full w-[50%]  ">
          <OutLineButton
            text="Work on real live projects"
            className="text-black justify-start max-sm:rounded-xl my-10 border-black "
          />
          <div className="max-md:text-4xl text-6xl text-black text-opacity-70  font-Monteserrat-bold ">
            <p>Get Hired,</p> <p>Gain Experience,</p> <p>Build Your <span className="text-orange-500">Portfolio</span>.</p>
          </div>
          <p className=" my-5 max-sm:text-lg text-xl">
            You've got the skills, now get the experience. Work on real projects, grow your portfolio and attract high-playing clients.
          </p>
            <Button className="hover:bg-orange-600  " link="/waitlist" width="max-sm:w-full w-[60%]" text="Join waitlist" />
          <div className="flex items-center max-sm:justify-center my-3">
            <div className="companies-images-style flex -space-x-4 ">
              {companiesImages.map((data, index) => (
                <Image
                  key={index}
                  width={40}
                  height={40}
                  className="rounded-full  "
                  src={data.src}
                  alt="image"
                />
              ))}
            </div>
            <div className="mx-2">
              +206 others joined waitlist
            </div>
          </div>
        </div>
        <div className="right-side grid grid-cols-2 max-[1302px]:w-full w-[50%] max-sm:gap-x-2 gap-x-6 max-sm:scale-100 scale-75 max-sm:mb-10  my-5 ">
          <div className="">
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero1.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero2.png"
              alt="image"
            />
          </div>
          <div className="">
            <Image
              width={300}
              height={300}
              className={`w-full h-[40%] my-3 object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero3.png"
              alt="image"
            />
            <Image
              width={300}
              height={300}
              className={`w-full h-[60%] object-cover rounded-3xl max-sm:rounded-xl border-spacing-3 border-opacity-10 border border-[grey]`}
              src="/assets/hero4.png"
              alt="image"
            />
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default Hero;
>>>>>>> f52cc9f (first commit)
