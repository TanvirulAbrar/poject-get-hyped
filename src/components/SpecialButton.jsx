import React from "react";

function SpecialButton({ text = "Hover Me", className = "" }) {
  return (
    <button
      className={` rounded-sm
        relative overflow-hidden cursor-pointer select-none touch-manipulation
        bg-white text-[#18181a] font-medium grid place-items-center
        before:content-[''] before:absolute before:bottom-[-50%] before:left-0
        before:w-[110%] before:h-full before:bg-[#ff5900]
        before:origin-bottom before:skew-y-[-20.3deg] before:scale-y-0
        before:transition-transform before:duration-400
        before:ease-[cubic-bezier(0.48,0,0.12,1)]

        after:content-[''] after:absolute after:bottom-[-50%] after:left-0
        after:w-[110%] after:h-full after:bg-[#18181a]
        after:origin-bottom after:skew-y-[-20.3deg] after:scale-y-0
        after:transition-transform after:duration-600
        after:ease-[cubic-bezier(0.48,0,0.12,1)]

        hover:before:scale-y-200 hover:before:skew-y-[9.3deg]
        hover:after:scale-y-200 hover:after:skew-y-[9.3deg]

        ${className}
      `}
    >
      {/* Front text */}
      <span
        className="
          relative z-10 block
          transition-all duration-300
          ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          hover:-translate-y-[50px]
          hover:text-white
        "
      >
        {text}
      </span>

      {/* Hover text */}
      <span
        className="
          absolute left-1/2 top-1/2 z-50 block
          opacity-0 translate-y-[225%] -translate-x-1/2
          text-white
          transition-all duration-600
          ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          hover:opacity-100 hover:translate-y-[-10%]
        "
      >
        {text}
      </span>
    </button>
  );
}

export default SpecialButton;
