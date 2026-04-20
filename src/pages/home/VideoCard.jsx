import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const content = [
    "Van nul naar vol, binnen 3 weken",
    "Zacht in smaak, sterk in beeld",
    " Content die écht smaakt (en raakt)",
    " Bullit ",
    " Roasta",
    " Loco",
  ];
  const contentTags = [" Bullit ", " Roasta", " Loco"];

  const video = [
    "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
  ];

  const colors = ["#ea580c", "#0d8dff", "#33c791"];
  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // optional reset
    }
  };
  return (
    <div
      className={`w-80 perspective-[1000px] h-110 relative items-center justify-end p-3.5 flex flex-col content-center rounded-4xl border-10 overflow-hidden transition-transform duration-500 ease-out hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(10deg)_rotateZ(-3deg)_scale(1)] group`}
      style={{
        border: `8px solid ${colors[item]}`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video[item]}
        // autoPlay
        muted
        loop
        playsInline
      />

      <div className="w-full relative overflow-hidden rounded-b-2xl">
        {/* SVG background */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 429 174"
          preserveAspectRatio="none"
          className="w-full block -mb-px"
        >
          <path
            d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862Z"
            fill={colors[item]}
          />
        </svg>
        {/* TOP RIGHT ICON */}
        <div className=" absolute top-1 right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
          {/* OUTGOING ICON */}
          <MdArrowOutward
            className="text-xl absolute transition-all duration-300
               group-hover:translate-x-6 group-hover:-translate-y-6
               group-hover:opacity-0"
          />

          {/* INCOMING ICON */}
          <MdArrowOutward
            className="text-xl absolute transition-all duration-300
               -translate-x-6 translate-y-6 opacity-0
               group-hover:translate-x-0 group-hover:translate-y-0
               group-hover:opacity-100"
          />
        </div>
        {/* ABSOLUTE CONTENT OVER SVG */}
        <div className="absolute inset-0 px-4 w-[80%] flex items-center -translate-y-1.5 justify-center text-white font-bold text-[21px]">
          {content[item]}
        </div>
        {/* Content */}
        <div
          style={{ backgroundColor: colors[item] }}
          className="relative -mt-1  text-white p-4"
        >
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-white/40 rounded-sm">
              {contentTags[item]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
