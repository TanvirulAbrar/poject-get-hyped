import React from "react";

const HeroCard = () => {
  return (
    <div className="bg-amber-200 h-90 max-w-full group relative scale-90 hover:scale-100 transition-transform duration-300 ease-out transform-gpu">
      <div
        className="absolute
      rounded-2xl lg:rounded-4xl
      bg-blue-400
      w-70 h-60
      lg:w-[clamp(8rem,60vh,25rem)]
      lg:h-[clamp(8rem,70vh,30rem)]
      p-5 flex flex-col justify-between
      
      transform-gpu will-change-transform
      transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      
      rotate-12 scale-90 translate-x-12
      group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0
    "
      >
        <div className="text-6xl font-bold">10M+</div>

        <div className="text-xl">
          <div className="font-bold">Organische views</div>
          <hr className="my-4 h-0.5 border-0 bg-black" />

          <div className="text-xs font-bold">Groeidoor slimme content</div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
