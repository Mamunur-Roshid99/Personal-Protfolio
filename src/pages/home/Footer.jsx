import React from 'react'

import photo from '/public/logo.png'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FF]">
      {/*  */}
      <div className="container w-[90%] mx-auto py-3 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-3">
          <img src={photo} alt="logo" className="w-[15%]" />
          <p className="text-[15px]">
            Copyright © 2025 - All right reserved by Mamunur Roshid
          </p>
        </div>
        {/* right */}
        <div className="flex items-center gap-3 text-xl text-white">
          <a
            href="https://github.com/Mamunur-Roshid99"
            target="_blank"
            className="bg-regal-blue p-2 rounded-full hover:shadow-2xl duration-300 hover:bg-regal-hover"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamunur-roshid99/"
            target="_blank"
            className="bg-regal-blue p-2 rounded-full hover:shadow-2xl duration-300 hover:bg-regal-hover"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mamunur.roshid.655427" target='_blank'
            className="bg-regal-blue p-2 rounded-full hover:shadow-2xl duration-300 hover:bg-regal-hover"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
