import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/gethyped.jpg";
import { motion } from "framer-motion";
import roundedImg from "../assets/roundedText.png";
const Home = () => {
  const logos = [
    { icon: "layers", name: "Layers" },
    { icon: "all_inclusive", name: "Sisyphus" },
    { icon: "change_history", name: "Circooles" },
    { icon: "view_agenda", name: "Catalog" },
    { icon: "bubble_chart", name: "Quotient" },
  ];
  return (
    <div className="bg-[#faf4ec] ">
      <Navbar />
      <div className="">get hyped. Get Noticed Get Results.</div>
      <div className="">Klaar met gokken op content die niets oplevert?</div>
      {/* card */}
      <div className="flex">
        <div className="rounded-2xl bg-blue-400 w-50 h-60 p-5 flex flex-col justify-between">
          <div className="text-2xl font-bold">10M+</div>
          <div className="text-xl">
            <div className="">Organische views</div>
            <div className=" underline"></div>
            <div className="text-xs">Groeidoor slimme content</div>
          </div>
        </div>
      </div>
      {/* dkjf */}
      <section>
        <div className="">
          Wij maken content die opvalt . Die blijft hangen. Die jouw doelgroep
          raakt en jouw merk in beweging brengt. Snel, krachitg en energiek.
        </div>
        <div className="w-40 h-40 bg-amber-200">in</div>
        <div className="flex flex-col">
          <div className="text-xl">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het
            meeetbaar. Zo weeet je precies wat werkt en wat niet . Nooit meer
            content zonder straregie . Nooit meer conntent zonder strategie.
            Nooit meer content zonder resultaat.{" "}
          </div>
          <div className="flex justify-between ">
            <div className="border border-black rounded-xl">
              <div className="">
                leer ons kennen{" "}
                <div className="btn btn-square rounded-xl  bg-black"></div>
              </div>
            </div>
            <div className="btn btn-square rounded-xl  border border-black"></div>
          </div>
        </div>
      </section>
      {/* Experttise */}
      <section className="bg-white/50 p-5 rounded-4xl flex">
        <div className="">
          <div className="rounded-sm bg-amber-100 font-medium text-center w-fit px-4 ">
            Expertise
          </div>
          <h1 className="text-[5rem] font-semibold">Social strategy</h1>
          <h2 className="font-semibold">Slimme strategie. Sterke start.</h2>
          <p>
            We duiken diep in jouw merk, doelgroep en doelen. En vertalen data
            naar een duidelijk plan met formats die écht impact maken. Zo weet
            je precies waarom het werkt.
          </p>
          <div className="rounded-xl w-fit p-[3px] bg-amber-300 text-white font-medium">
            <span className="px-3"> dkfjfj </span>
            <div className="rounded-[30%] btn btn-square w-8 h-8 bg-amber-100 "></div>
          </div>
        </div>
        <div className="">
          {" "}
          <h1 className="text-5xl font-bold text-[#e4dfd8]">01</h1>
          <div className="w-60 h-70 rounded-3xl border-10 border-orange-600">
            video
          </div>
        </div>
      </section>
      {/* Content dat scoort. */}
      <section>
        <h1 className="text-[6rem] font-semibold">Content dat scoort.</h1>
        <p>
          We maken content die opvalt. Die blijft hangen. Die jouw doelgroep
          raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </p>
        <div className="flex justify-between ">
          <div className="border border-black rounded-xl">
            <div className="">
              leer ons kennen{" "}
              <div className="btn btn-square rounded-xl  bg-black"></div>
            </div>
          </div>
          <div className="btn btn-square rounded-xl  border border-black"></div>
        </div>
        <div className="">
          <div className="w-60 h-70 rounded-3xl border-10 border-orange-600">
            video
          </div>
        </div>
      </section>
      {/* brand? */}

      <section>
        <h1 className="font-bold text-3xl ">These brands got hyped.</h1>
        <section className="py-12 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="flex w-max gap-1"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
            >
              {/* First group */}
              <div className="flex items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 h-30 w-30  border border-gray-700 rounded-lg"
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
              <div className="flex items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, i) => (
                  <div
                    key={i + "copy"}
                    className="flex items-center gap-1 h-30 w-30 border border-gray-700 rounded-lg"
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
        <h1 className="text-5xl text-center p-5 font-bold">Let’s get hyped.</h1>
        <div className="flex justify-center items-center gap-5">
          <div className="rounded-xl w-fit p-[3px] bg-orange-500 text-white font-medium">
            <span className="px-3"> dkfjfj </span>
            <div className="rounded-[30%] btn btn-square w-8 h-8 bg-amber-100 "></div>
          </div>
          <div className="rounded-xl w-fit p-[3px] border border-black font-medium">
            <span className="px-3"> dkfjfj </span>
            <div className="rounded-[30%] btn btn-square w-8 h-8 bg-black "></div>
          </div>
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
