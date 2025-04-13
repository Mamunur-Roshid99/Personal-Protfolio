import React, { useState } from 'react'

import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import photo from '/public/logo.png'
import { useEffect } from 'react';

const Navbar = () => {

  const [bar, setBar] =useState(<FaBars />)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const links = (
    <ul
      className={`${
        bar
          ? "hidden"
          : "block absolute -bottom-[100px] z-50 backdrop-blur-3xl bg-white/40 flex flex-col gap-3 w-full"
      } lg:flex items-center justify-center lg:gap-11 font-medium text-[17px] lg:text-[19px] text-regal-black`}
    >
      <Link
        to="/"
        className={"text-white hover:text-[#5EF38C] duration-300"}
      >
        Home
      </Link>
      <Link to="/projects" className={"text-white hover:text-[#5EF38C] duration-300"}>
        Projects
      </Link>
      <Link to="/about" className={"text-white hover:text-[#5EF38C] duration-300"}>
        About
      </Link>
    </ul>
  );

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "py-1 border-b-1 border-b-white/30 z-50 backdrop-blur-md bg-white/10"
          : "py-3"
      }`}
    >
      <div
        className={`container w-[90%] mx-auto relative flex items-center justify-between`}
      >
        <a href="#">
          <img src={photo} alt="logo" className="w-[80%]" />
        </a>

        {links}

        <a
          className="bg-[#11A59B] text-white font-semibold text-[11px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-[#11a59bd2] tracking-wide md:text-[15px]"
          href="https://drive.google.com/file/d/18e6hubZlyCTzOTBru9qrlCKVJlO4uIiu/view?usp=drive_link"
          target="_blank"
        >
          Download CV
        </a>
        <div className="lg:hidden">
          {bar ? (
            <FaBars
              className="text-2xl text-white"
              onClick={() => {
                setBar(false);
              }}
            />
          ) : (
            <FaX className="text-2xl text-white" onClick={() => setBar(true)} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar
