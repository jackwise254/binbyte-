import { Button } from "./ui";

export default function Hero() {
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px] ">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
        {/* <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Dr. Matthew Anderson
        </h5> */}
        <h1 className="font-poppins text-4xl font-bold text-[#584910] md:text-4xl md:leading-[120%]">
          Welcome to BinByte. <br />
          Tailored Software Solutions

        </h1>
        <p className="max-w-[452px] text-para">

        Welcome to BinByte—where innovation meets expertise. We specialize in crafting custom software solutions that transform businesses, streamline operations, and turn bold ideas into reality. Whether you’re looking to build a robust web platform, develop a mobile app, or enhance your digital security, our team is here to ensure your success with cutting-edge technology and personalized support.
        </p>
        <Button title="Call Us Now"  className="bg-gradient-to-tl from-[#584910] to-[#776F4A]"/>
      </div>

      <div className="max-h-[506px] max-w-[678px]">
        <img
          className="custom-animate size-full object-contain"
          src="/hero22.png"
          alt="Hero"
        />
      </div>
    </div>
  );
}
