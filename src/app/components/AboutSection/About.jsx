"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import image from "../../../../public/assets/profile2.jpg";

import { FaCode } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const infoList = [
  {
    icon: <FaCode />,
    iconDark: "dfsasdfas",
    title: "Languages",
    description: "JavaScript, React.Js, Next.Js, Node.Js",
  },
  {
    icon: <MdOutlineCastForEducation />,
    iconDark: "fdsfasdfa_dark",
    title: "Education",
    description: "Diploma Engineering (CSE)",
  },
  {
    icon: <GrProjects />,
    iconDark: "fdsfasdfaicon_dark",
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

const About = () => {

  return (
    <section id="about" className="py-10 scroll-mt-20">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-10">
          {/* top */}
          <h4 className="text-3xl lg:text-5xl text-center font_outfit dark:text-text">
            About me
          </h4>

          {/* bottom */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* left:image */}
            <div
              className="md:w-64 lg:w-96 rounded-3xl max-w-none w-full"
            >
              <Image
                src={image}
                className="w-full rounded-3xl md:h-full"
                alt="Profile"
              />
            </div>

            {/* right */}
            <div>
              <p className="max-w-2xl mb-8 dark:text-text4">
                I am an experienced MERN Stack Developer with over a decade of
                professional expertise in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>

              <ul className="grid grid-cols-2 gap-5 md:grid-cols-3">
                {infoList.map((info, index) => (
                  <li
                    key={index}
                    className="border border-[#D8D8D8] py-7 px-5 rounded-lg transition-all duration-300 skill_card"
                  >
                    <h5 className="dark:text-text5 text-2xl mb-3">
                      {info.icon}
                    </h5>
                    <h3 className="dark:text-text font_outfit font-medium text-xl mb-2">
                      {info.title}
                    </h3>
                    <p className="font_outfit text-sm dark:text-text4">
                      {info.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h1 className="dark:text-text4 text-sm mb-2">
                  Connect with me
                </h1>
                <div className="flex items-center gap-3">
                  {[FaFacebookSquare, FaInstagram, FaLinkedin, FaGithub].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href={
                          i === 0
                            ? "https://www.facebook.com/mamunur.roshid.655427"
                            : i === 1
                            ? "https://www.instagram.com/mamunur_roshid12/"
                            : i === 2
                            ? "https://www.linkedin.com/in/mamunur-roshid99/"
                            : "https://github.com/Mamunur-Roshid99"
                        }
                        target="_blank"
                        className="border border-[#848484] p-2 rounded-lg cursor-pointer bg-white"
                      >
                        <Icon
                          className={`${
                            i === 0
                              ? "text-[#1877F2]"
                              : i === 1
                              ? "text-[#E4405F]"
                              : i === 2
                              ? "text-[#0A66C2]"
                              : "text-[#181717]"
                          } text-2xl`}
                        />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
