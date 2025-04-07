import React from 'react'

import Photo from '/public/profile2.png'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Footer from '../pages/home/Footer';

const About = () => {
  return (
    <>
      <section>
        <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
          {/* up */}
          <div className="md:w-[60%] w-[80%] mt-12 mx-auto text-center flex flex-col justify-center items-center gap-3">
            <h1 className="text-[24px] md:text-3xl text-center font-semibold text-regal-blue">
              About Me
            </h1>
            <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
            <p className="text-sm lg:text-[15px] text-regal-gray">
              A short description of myself. My work history.
            </p>
          </div>
          {/*down  */}
          <div className="flex flex-col lg:flex-row gap-9">
            {/* left */}
            <div className="w-[100%] flex items-center justify-center">
              <div>
                <img src={Photo} className="rounded-2xl" alt="profile" />
              </div>
            </div>
            {/* right */}
            <div className="w-[100%] flex flex-col gap-8">
              <p className="text-gray-600 text-sm md:text-[18px]">
                👋 Hey there! I'm <b>Mamunur Roshid Anas</b>, an 18-year-old
                MERN Stack Developer with a passion for building full-stack web
                applications that are fast, scalable, and user-centric. <br />I
                specialize in MongoDB, Express.js, React.js, and Node.js,
                creating seamless and responsive digital solutions — from sleek
                front-end interfaces to powerful back-end APIs. I love turning
                complex problems into simple, elegant code. <br /> 🔧 Whether it’s
                building modern UIs with React & TailwindCSS, or designing
                RESTful APIs and managing databases, I thrive on solving
                challenges and learning new technologies along the way. <br /> 🚀 Let’s
                build something impactful together!
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
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About
