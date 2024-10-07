// import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-5 px-3 pb-28 pt-28 md:flex-row md:pb-[180px] lg:gap-6 lg:px-0 lg:pt-[140px]">
      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-[#584910]">
          Services
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
        Tailored Solutions for Every Challenge
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
        We offer a comprehensive suite of software services designed to empower your business. From custom software development to innovative e-commerce solutions, our expert team is dedicated to transforming your ideas into reality. Let us partner with you to streamline processes, enhance user experiences, and drive measurable results!
        </p>
        <Button title="WhatsApp Us" Icon={FaWhatsapp} className="bg-gradient-to-tl from-[#584910] to-[#776F4A]"/>
      </div>

      <div className="max-h-[660px] max-w-[622px]">
        <img
          className="custom-animate size-[85%] object-contain md:size-full"
          src="/services.png"
          alt="About"
        />
      </div>
    </div>
  );
}
