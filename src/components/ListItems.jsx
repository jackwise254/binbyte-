import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiCheckCircle, FiShoppingCart, FiLoader } from "react-icons/fi";
import { PiPlusCircleBold } from "react-icons/pi";

export default function ListItems() {
  // return (
  //   <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-3 md:gap-7 ">
  //     <Item title="Custom Software Development" description = "yooo" Icon={FiLoader}/>
  //     <Item title="E-commerce Solutions" description = "yooo" Icon={FiShoppingCart} />
  //     <Item title="Software as a Service Development" description = "yooo" Icon={FiCheckCircle}/>
  //     <Item title=" Cross-Platform App Development" Icon={PiPlusCircleBold}  description = "yooo"/>
  //   </div>
  // );
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-3 md:gap-7 ">
      <Item 
        title="Custom Software Development" 
        description="Tailored solutions built to power your business forward." 
        Icon={FiLoader}
      />
      <Item 
        title="E-commerce Solutions" 
        description="Boost sales with a seamless shopping experience." 
        Icon={FiShoppingCart} 
      />
      <Item 
        title="Software as a Service Development" 
        description="Scalable SaaS platforms that grow with your users." 
        Icon={FiCheckCircle}
      />
      <Item 
        title="Cross-Platform App Development" 
        description="Build once, launch everywhere—apps that work on any device." 
        Icon={PiPlusCircleBold}
      />
    </div>
  );
  
}

function Item({
  Icon = FaRegClock,
  title = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <div className="flex w-max translate-y-[50%] items-center gap-3 rounded-[12px] bg-gradient-to-tl from-[#584910] to-[#776F4A] px-[18px] py-2 text-white md:max-w-[290px]">
      <div>
        <Icon className="size-[38px]" />
      </div>
      <div>
        <h3 className="font-poppins text-lg font-medium">{title}</h3>
        <p className="font-sora text-xs">{description}</p>
      </div>
    </div>
  );
}
