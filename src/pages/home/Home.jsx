import React from "react";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import photo from "/public/profile1.jpg"

const Home = () => {
  return (
    <section className="">
      {/*  */}
      <div className="container w-[90%] mx-auto pt-52 lg:flex justify-between gap-10 mb-14">
        {/* overly */}
        <div className="mt-[-40px] w-[100%] lg:w-[40%] mb-8 lg:hidden flex  justify-center">
          <div>
            <img className="rounded-full md:h-96 h-80" src={photo} alt="img" />
          </div>
        </div>
        {/* left */}
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-4 lg:gap-[20px]">
          <h5 className="font-medium text-regal-blue mb-[-10px]">
            Hey There 👋 I am
          </h5>
          <h2 className="font-semibold text-4xl md:text-5xl">Mamunur Roshid</h2>
          <p className="text-[18px] font-medium text-regal-gray">
            I am a <span className="text-regal-blue">Front-End Developer</span>
          </p>
          <p className="text-sm md:text-base text-regal-black tracking-wide">
            I am a Junior Front End Developer, passionate about creating
            stunning web applications using JavaScript, React and Tailwind CSS,
            eager to collaborate and innovate together.
          </p>
          <div className="flex items-center gap-3 lg:text-xl text-2xl text-white">
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
              href="https://www.facebook.com/mamunur.roshid.655427"
              target="_blank"
              className="bg-regal-blue p-2 rounded-full hover:shadow-2xl duration-300 hover:bg-regal-hover"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mamunur_roshid12/"
              target="_blank"
              className="bg-regal-blue p-2 rounded-full hover:shadow-2xl duration-300 hover:bg-regal-hover"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* right */}
        <div className="mt-[-40px] w-[100%] lg:w-[40%] hidden lg:block justify-center">
          <div>
            <img className="rounded-full h-96" src={photo} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
