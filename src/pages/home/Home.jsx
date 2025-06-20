import React, { useEffect, useRef } from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import photo from "/public/profile1.jpg"
import gsap from "gsap";

import Particles from "../../../animation/Particles/Particles";

const Home = () => {
  

  const [text] = useTypewriter({
    words: ["Front-End Developer", "React-Js Developer", "Mern-Stack Developer"],
    loop: {},
  })

  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);  

  return (
    <section id="/">
      {/*  */}
      <div
        ref={titleRef}
        className="container w-[90%] mx-auto pt-52 lg:flex justify-between gap-10 mb-14 relative"
      >
        <div style={{ width: "100%", height: "600px",}} className=" absolute top-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* overly */}
        <div className="mt-[-40px] w-[100%] lg:w-[40%] mb-8 lg:hidden flex justify-center">
          <div>
            <img className="rounded-full md:h-96 h-80" src={photo} alt="img" />
          </div>
        </div>
        {/* left */}
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-4 lg:gap-[20px]">
          <h2 className="text">Mamunur Roshid</h2>
          <p className="text-[18px] lg:text-2xl font-medium text-[#FFFFFF]">
            I am <span className="text-[#42DC97]">{text}</span>
            <span className="text-[#42DC97]">
              <Cursor></Cursor>
            </span>
          </p>
          <p className="text-sm md:text-base text-[#D1D5DB] tracking-wide">
            I am a Junior Front End Developer, passionate about creating
            stunning web applications using JavaScript, React and Tailwind CSS,
            eager to collaborate and innovate together.
          </p>
          <div className="flex items-center gap-3 lg:text-3xl text-2xl text-white">
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
            <a
              href="https://www.instagram.com/mamunur_roshid12/"
              target="_blank"
              className="bg-[#11A59B] p-2 md:p-[11px] rounded-full hover:shadow-2xl duration-500 hover:bg-[#11a59bd2]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* right */}
        <div className="mt-[-40px] w-[100%] lg:w-[40%] hidden lg:flex items-center justify-center">
          <div>
            <img className="rounded-full h-96" src={photo} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
