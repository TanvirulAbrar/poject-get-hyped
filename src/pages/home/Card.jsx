import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Button from "../../components/FancyHoverButton";
import { IoMdArrowForward } from "react-icons/io";

const Card = ({ i, total, scrollYProgress, emoji, color }) => {
  const step = 1 / total;
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // optional reset
    }
  };
  // const { scrollYProgress } = useScroll();
  const cardData = [
    {
      imageSrc:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
      Videosrc: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
      borderColor: "#fcb8fa",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",

      Videosrc: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
      borderColor: "#33c791",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
      Videosrc: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
      borderColor: "#0d8dff",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp",
      Videosrc: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
      borderColor: "#ea580c",
    },
  ];
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });
  console.log(
    "🚀 ~ file: Card.jsx:8 ~ Card ~ scrollYProgress:",
    scrollYProgress.get(),
  );
  const start = i * step;
  const end = (i + 1) * step;

  const exitStart = end;
  // const exitStart = end + step * 0.3;
  const exitEnd = Math.min((i + 2) / total, 1);
  const y = useTransform(scrollYProgress, [start, end], [200, 0]);

  const isLast = i === total - 1;
  const RotationY = [-15, 15, 0, 0];

  // scale
  const scale = useTransform(
    scrollYProgress,
    [start, end, exitStart, exitEnd],
    isLast ? [1, 1, 1, 1] : [1, 1, 1, 0.5],
  );

  // rotate
  const rotateX = useTransform(
    scrollYProgress,
    [start, end, exitStart, exitEnd],
    isLast ? [0, 0, 0, 0] : [0, 0, 0, 20],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [start, end, exitStart, exitEnd],
    isLast ? [0, 0, 0, 0] : [0, 0, 0, RotationY[i]],
  );

  // opacity
  const opacity = useTransform(
    scrollYProgress,
    [start, end, exitStart, exitEnd],
    isLast ? [1, 1, 1, 1] : [1, 1, 1, 0],
  );

  return (
    <motion.div
      className=" mx-5 flex-col gap-7   "
      style={{
        position: "sticky",
        top: `${i * 1}px`, // 🔥 KEY FIX
        height: "100vh",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        zIndex: i, // 🔥 KEY FIX
        perspective: 1000,
      }}
    >
      <motion.div
        onClick={() =>
          window.open(
            "https://www.gethyped.nl/expertises/social-strategie",
            "_blank",
          )
        }
        className={`${color} rounded-3xl justify-between relative  p-12 h-[90%] w-full`}
        style={{
          // borderRadius: 20,
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // fontSize: 120,
          y,
          scale,
          rotateX,
          rotateY,

          // opacity,
        }}
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      >
        <div className="flex flex-col justify-between  ">
          <div className="">
            <div
              className={`rounded-[6px]  ${i === 0 ? "bg-[#f6e2c8]" : "bg-white"} font-medium text-center w-fit py-1 px-4 `}
            >
              Expertise
            </div>
            <h1 className="text-[clamp(1rem,15vh,8rem)] font-semibold">
              Social strategy
            </h1>
          </div>
          <div className="">
            <h2 className="font-semibold my-3 text-[clamp(1rem,5vh,8rem)]">
              Slimme strategie. Sterke start.
            </h2>
            <p className="text-[clamp(1rem,2vh,8rem)] font-[500] my-3 max-w-[40%]">
              We duiken diep in jouw merk, doelgroep en doelen. En vertalen data
              naar een duidelijk plan met formats die écht impact maken. Zo weet
              je precies waarom het werkt.
            </p>
            <Button
              children="meet over social strategy "
              textcolor={i === 0 ? "text-white" : "text-black"}
              bgColor={`bg-${i === 0 ? "orange-600" : "white"}`}
              icon={<IoMdArrowForward color={i === 0 ? "#000" : "#fff"} />}
              iconColor={`"text-${i === 0 ? "black" : "white"}"`}
              iconboxColor={`bg-${i === 0 ? "white" : "black"}`}
            />
          </div>
        </div>
        {/* <div>{progress.toFixed(2)}</div> */}
        <div className="">
          {" "}
          <h1
            className={`text-5xl lg:text-9xl font-medium text-end self-start  ${i === 0 ? "text-[#f6e2c8]" : "text-white/40"}`}
          >
            0{i + 1}
          </h1>
          <div
            className={`absolute w-70 h-90 rotate-5 bottom-10 right-10 overflow-hidden rounded-3xl border-10  ${i === 0 ? "border-orange-600" : "border-white"}`}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={cardData[i].Videosrc}
              // autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
