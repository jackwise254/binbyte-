import { ServiceCard } from "./ui";

export default function ServiceCards() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-9 pb-[80px] md:pb-[164px]">
      <ServiceCard title="Custom Software Development" imgSrc="/service1.png" description="Tailored software solutions designed to fit your unique business needs and drive growth." />
      <ServiceCard title="E-commerce Solutions" imgSrc="/service2.png" description="Elevate your online store with seamless shopping experiences and robust platforms that boost sales." />
      <ServiceCard title="SaaS Development" imgSrc="/service3.png" description="Create scalable Software as a Service applications that empower users and streamline operations." />
      <ServiceCard title="Mobile App Development" imgSrc="/service4.png" description="Craft engaging mobile applications that connect with users and enhance their everyday lives." />
      <ServiceCard title="ERP Systems" imgSrc="/service5.png" description="Optimize your business processes with integrated ERP solutions that provide real-time insights and efficiency." />
      <ServiceCard title="Maintenance and Support" imgSrc="/service6.png" description="Ensure your systems run smoothly with our reliable maintenance and support services tailored to your needs." />
    </div>
);

}
