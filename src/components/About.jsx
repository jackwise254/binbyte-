import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
      <div className="max-h-[900px] max-w-[586px]">
        <img
          className="custom-animate size-[90%] object-contain md:size-full"
          src="/About1.png"
          alt="About"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-[#584910]">
          About Us
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
          Empowering Innovation, One BYTE at a time
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
          At BinByte, we’re passionate innovators and problem-solvers dedicated to creating software solutions that make a real impact. Our mission is to empower businesses by turning ideas into cutting-edge digital solutions, from custom software to enterprise applications.
          With expertise in web and mobile development, AI, and cybersecurity, we’re not just a software company—we're your partners in success. Whether optimizing processes, building robust e-commerce platforms, or designing intuitive apps, we go above and beyond to exceed expectations.
          We believe technology should seamlessly enhance lives. That’s why we deliver functional, scalable, and user-friendly solutions tailored to keep you ahead in your industry.
          Join us in shaping the future of technology. Together, let’s build something extraordinary!
        </p>
        <Button title="WhatsApp Us " className="bg-gradient-to-tl from-[#584910] to-[#776F4A]" onClick={() => window.open(`https://wa.me/254798969800`, '_blank')} Icon={FaWhatsapp} />
        
      </div>
    </div>
  );
}
