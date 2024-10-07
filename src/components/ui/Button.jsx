import { LuPhoneCall } from "react-icons/lu";

export default function Button({
  title = "+254 798 969800",
  Icon = LuPhoneCall,
  className = "bg-gradient-to-tl from-[#584910] to-[#776F4A]",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-lr flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3 ${className}`}
    >
      <Icon className="size-6 " />
      {title}
    </button>
  );
}
