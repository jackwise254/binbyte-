// import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookAnAppointment() {
  return (
    <div className="mx-auto mb-[130px] max-w-screen-xl px-3 pt-[80px] md:mb-[213px] md:pt-[148px]">
      <p className="mb-3 text-center font-poppins text-[22px] font-medium text-[#584910]">
        Request a demo
      </p>

      <div className="flex h-auto flex-col items-center justify-center rounded-[32px] bg-gradient-to-tl from-[#584910] to-[#776F4A] p-8 text-white md:h-[315px] md:p-4">

      {/* <div className="flex h-auto flex-col items-center justify-center rounded-[32px] bg-gradient-to-tl from-primary-start to-primary-end p-8 text-white md:h-[315px] md:p-4"> */}
        <h3 className="font-poppins text-2xl font-semibold md:text-[32px]">
          Unlock Your Potential—Request a Demo Today!
        </h3>
        <p className="mb-6 mt-[11px] max-w-[676px] md:text-center">
            Experience the power of our innovative solutions firsthand. Schedule a demo with us to see how we can transform your business and elevate your operations. Don’t miss out—let’s embark on this journey together!
        </p>

        <button
        className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-lg font-medium text-primary-start shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)] transition hover:-rotate-3 md:px-7 md:py-4"
        onClick={() => window.location.href = 'tel:+254798969800'}
      >
        <FaWhatsapp className="size-6" />
        Request a demo
      </button>

      </div>
    </div>
  );
}
