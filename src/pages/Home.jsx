import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/gethyped.jpg";
import { motion } from "framer-motion";
import roundedImg from "../assets/roundedText.png";
import StackedCards from "./home/StackedCards";
import CustomShape from "./home/CustomShape";
import VideoCard from "./home/VideoCard";
import HeroCard from "./home/HeroCard";
import FancyHoverButton from "../components/FancyHoverButton";
import { FaArrowRight } from "react-icons/fa";

// import Shape from "./home/CustomShape";
const Home = () => {
  const logos = [
    { icon: "layers", name: "Layers" },
    { icon: "all_inclusive", name: "Sisyphus" },
    { icon: "change_history", name: "Circooles" },
    { icon: "view_agenda", name: "Catalog" },
    { icon: "bubble_chart", name: "Quotient" },
  ];

  return (
    <div className=" roboto max-w-[2000px] mx-auto ">
      <Navbar />
      {/* hero */}
      <section className="p-8 max-sm:p-2">
        <div className="text-[clamp(1rem,16vh,8rem)] font-semibold  leading-[clamp(1.2rem,15vh,8rem)] tracking-tight  mt-20">
          Get Hyped. Get <br /> Noticed Get Results.
        </div>
        <div className="text-[clamp(1rem,4vh,2rem)] my-2 lg:my-8 font-semibold">
          Klaar met gokken op content <br /> die niets oplevert?
        </div>
        {/* card */}
        <div className="flex w-full bg-amber-800 justify-between">
          <HeroCard></HeroCard>
          <HeroCard></HeroCard>
          <HeroCard></HeroCard>
          <HeroCard></HeroCard>
        </div>
      </section>
      {/* dkjf */}
      <section className=" p-5 ">
        <div className="text-[clamp(1rem,10vh,3rem)] lg:p-19 lg:pl-30  font-bold">
          Wij maken content die opvalt . Die <br /> blijft hangen. Die jouw
          doelgroep <br />
          raakt en jouw merk in beweging <br /> brengt. Snel, krachitg en
          energiek.
        </div>
        <div className="flex justify-between">
          {" "}
          <div className="w-40 h-40 bg-amber-200">in</div>
          <div className="flex max-w-[50%] flex-col">
            <div className="text-xl">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meeetbaar. Zo weeet je precies wat werkt en wat niet . Nooit meer
              content zonder straregie . Nooit meer conntent zonder strategie.
              Nooit meer content zonder resultaat.{" "}
            </div>
            <FancyHoverButton
              children="leer ons kennen"
              className="mt-5 w-fit border border-black"
              textcolor="text-black"
              bgColor="bg-white"
              iconColor="text-white"
              iconboxColor="bg-black"
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </section>
      {/* Experttise */}
      <section className="bg-white/50 p-5 rounded-4xl flex"></section>
      <StackedCards></StackedCards>
      {/* Content dat scoort. */}
      <section>
        <div className="lg:w-[50%] lg:px-29">
          {" "}
          <h1 className="text-[clamp(1rem,12vh,6rem)] font-semibold">
            Content dat scoort.
          </h1>
          <p>
            We maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </p>
          <FancyHoverButton
            children="leer ons kennen"
            className="mt-5 w-fit border border-black"
            textcolor="text-black"
            bgColor="bg-none"
            iconColor="text-white"
            iconboxColor="bg-black"
            icon={<FaArrowRight />}
          />
        </div>

        <div className="flex gap-12 mt-10 justify-center">
          {[0, 1, 2].map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </section>
      {/* brand? */}

      <section className="py-12 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <h1 className="font-bold text-3xl lg:text-6xl lg:px-20 lg:max-w-[50%]">
          These brands got hyped.
        </h1>
        <section className="py-12 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="flex w-max gap-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
            >
              {/* First group */}
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 h-50 w-50  border border-gray-700 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-3xl">
                      jhdff
                    </span>
                    <span className="text-xl font-bold font-display">
                      dfdff
                    </span>
                  </div>
                ))}
              </div>

              {/* Duplicate group (important for seamless loop) */}
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => (
                  <div
                    key={i + "copy"}
                    className="flex items-center gap-2 h-50 w-50 border border-gray-700 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-3xl">
                      dffdf
                    </span>
                    <span className="text-xl font-bold font-display">
                      dffdsff
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </section>
      {/* lets? */}
      <section>
        <h1 className="text-8xl text-center p-5 lg:pt-30 font-bold">
          Let’s get hyped.
        </h1>
        <div className="flex justify-center items-center gap-5">
          <FancyHoverButton
            children="Mail ons direct"
            textcolor="text-black"
            bgColor="bg-white"
            className="border border-black"
            iconboxColor="bg-black"
            iconColor="text-white"
          ></FancyHoverButton>
          <FancyHoverButton
            children="Get result"
            bgColor="bg-orange-500"
            iconboxColor="bg-white"
            iconColor="text-red-500"
          ></FancyHoverButton>
        </div>
      </section>

      <footer>
        <img className="w-20 h-20" src={roundedImg} alt="" />
        <img className="w-20 h-10" src={logo} alt="" />
        <div className="flex">
          <div className="">
            {["Expertises", "Work", "About", "Contact"].map((item) => (
              <span
                key={item}
                className="px-3 bg-white/50 rounded-2xl text-sm font-medium cursor-pointer"
              >
                {item}
              </span>
            ))}
            <h1>
              Follow us
              <div className="btn btn-square rounded-full"></div>
            </h1>
          </div>
          <div className="">
            <div className="">
              <h1>Contact</h1> info@gethyped.nl +31 6 1533 7496
            </div>
            <div className="">
              <h1>Adres</h1> Beltrumsestraat 6, 7141 AL Groenlo
            </div>
          </div>
        </div>
        <div className="flex p-5 gap-5 justify-between text-xs font-medium text-gray-700">
          <p>© 2025 Get Hyped</p>
          <p>© Design by Dylan</p>
          <p>Privacyvoorwaarden</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
