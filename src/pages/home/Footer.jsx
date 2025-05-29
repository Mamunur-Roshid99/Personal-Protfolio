import React from 'react'

import photo from '/public/logo.png'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" border-t-1 border-t-gray-300">
      {/*  */}
      <div className="container w-[90%] mx-auto py-3 flex gap-6 flex-row items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-3">
          <img src={photo} alt="logo" className="w-[60%] md:w-[15%]" />
          <p className="hidden md:block md:text-[15px] text-sm text-[#D1D5DB]">
            Copyright © 2025 - All right reserved by Mamunur Roshid
          </p>
        </div>
        {/* right */}
        <div className="flex items-center gap-3  text-xl text-white">
          <a
            href="https://github.com/Mamunur-Roshid99"
            target="_blank"
            className="bg-[#11A59B] p-2 md:p-[11px] rounded-full hover:shadow-2xl duration-500 hover:bg-[#11a59bd2]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamunur-roshid99/"
            target="_blank"
            className="bg-[#11A59B] p-2 md:p-[11px] rounded-full hover:shadow-2xl duration-500 hover:bg-[#11a59bd2]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mamunur.roshid.655427"
            target="_blank"
            className="bg-[#11A59B] p-2 md:p-[11px] rounded-full hover:shadow-2xl duration-500 hover:bg-[#11a59bd2]"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
