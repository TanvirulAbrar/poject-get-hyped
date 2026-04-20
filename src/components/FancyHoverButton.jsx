import React from "react";
import { HiFire } from "react-icons/hi";

const FancyHoverButton = ({
  children = "Hover Me",
  className = "",
  bgColor = "bg-amber-300",
  textcolor = "text-white",
  iconColor = "text-[#ff9102]",
  icon = <HiFire />,
  iconboxColor = "bg-white",
}) => {
  return (
    <button
      className={`relative overflow-hidden 
                  items-center
                 ${textcolor}
                  transition-all duration-300
                 group card-hover-tilt flex justify-center  rounded-xl w-fit p-[3px] ${bgColor} ${className} font-medium`}
    >
      {/* Shine layer - slides from right to left */}
      {/* <span
        className={`absolute top-0 left-0 w-full h-full 
                   bg-gradient-to-r from-transparent ${shineColor} to-transparent 
                   translate-x-full group-hover:-translate-x-full 
                   transition-transform duration-700 ease-out`}
      ></span> */}
      {/* Subtle depth overlay */}
      {/* <span className="absolute top-0 left-0 w-full h-full  group-hover:bg-white/30 transition-all duration-500"></span> */}
      <span className="relative  content-center text-center px-1 z-10">
        {children}
      </span>

      <div
        className={`rounded-[30%] text-center btn btn-square w-8 h-8 text-[1.25rem] ${iconColor}  ${iconboxColor} `}
      >
        {icon}
      </div>
    </button>
  );
};

export default FancyHoverButton;
