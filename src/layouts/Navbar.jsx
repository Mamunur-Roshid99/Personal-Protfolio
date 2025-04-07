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
          : "block absolute -bottom-[100px] bg-[#F8F9FF] flex flex-col gap-3 w-full"
      } lg:flex items-center justify-center lg:gap-11 font-medium text-[17px] lg:text-[18px] text-regal-black`}
    >
      <Link to="/" className={"hover:text-regal-blue duration-300"}>
        Home
      </Link>
      <Link to="/projects" className={"hover:text-regal-blue duration-300"}>
        Projects
      </Link>
      <Link to="/about" className={"hover:text-regal-blue duration-300"}>
        About
      </Link>
    </ul>
  );

  return (
    <nav
      className={`fixed w-full z-50 ${
        isScrolled && "border-b-1 border-b-gray-300 z-50 bg-[#FFFFFF]"
      }`}
    >
      <div
        className={`container w-[90%] mx-auto py-[14px] relative flex items-center justify-between`}
      >
        <a href="#">
          <img src={photo} alt="logo" className="w-[80%]" />
        </a>

        {links}

        <a
          className="bg-regal-blue text-white font-semibold text-[11px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-regal-hover tracking-wide md:text-[15px]"
          href="https://drive.google.com/file/d/18e6hubZlyCTzOTBru9qrlCKVJlO4uIiu/view?usp=drive_link"
          target='_blank'
        >
          Download CV
        </a>
        <div className="lg:hidden">
          {bar ? (
            <FaBars
              className="text-2xl"
              onClick={() => {
                setBar(false);
              }}
            />
          ) : (
            <FaX className="text-2xl" onClick={() => setBar(true)} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar
