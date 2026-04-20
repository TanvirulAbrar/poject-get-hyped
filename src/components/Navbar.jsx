import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../assets/gethyped.jpg";

import heroImg from "../assets/hero.png";
import Button from "./FancyHoverButton";
import SpecialButton from "./SpecialButton";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`navbar fixed top-2 left-auto max-w-[2000px] mx-auto z-50 flex justify-between 
      transition-transform duration-300 ease-in-out
      ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <img className="h-10" src={logoimg} alt="Logo" />

      <div className="flex bg-amber-50 rounded-xl h-8 overflow-hidden gap-0.5">
        <SpecialButton className="h-auto w-fit p-6 text-sm text-start" />
        <SpecialButton />
        <SpecialButton />
        <SpecialButton />
      </div>

      <Button
        children="Get Results"
        className="text-[14px]"
        textcolor="text-black"
        bgColor="bg-[#fcb8fa]"
        iconColor="text-red-500"
      />
    </div>
  );
};

export default Navbar;
