import React, { useState } from 'react'

import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import photo from '/public/logo.png'

const Navbar = () => {

  const [bar, setBar] =useState(<FaBars />)

  const links = (
    <ul
      className={`${
        bar
          ? "hidden"
          : "block absolute -bottom-[137px] bg-[#F8F9FF] flex flex-col gap-3 w-full"
      } lg:flex items-center justify-center lg:gap-11 font-medium text-[17px] text-regal-black`}
    >
      <Link to="/" className={"hover:text-regal-blue duration-300"}>
        Home
      </Link>
      <Link to="/about" className={"hover:text-regal-blue duration-300"}>
        About Me
      </Link>
      <Link to="/projects" className={"hover:text-regal-blue duration-300"}>
        Projects
      </Link>
      <Link to="/contact" className={"hover:text-regal-blue duration-300"}>
        Contact
      </Link>
    </ul>
  );

  return (
    <nav>
      <div className="container w-[90%] mx-auto py-[20px] relative flex items-center justify-between">
        <a href="#home">
          <img src={photo} alt="logo" className="w-[80%]" />
        </a>

        {links}

        <a
          className="bg-regal-blue text-white font-semibold text-[11px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-regal-hover tracking-wide md:text-[15px]"
          href="#"
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
