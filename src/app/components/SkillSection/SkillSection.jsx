"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import next from "../../../../public/assets/nextjs.png"

const skillsData = {
  Frontend: [
    { name: "HTML", img: "https://i.ibb.co/HPwNMnc/html-5132b1f6.png" },
    { name: "CSS", img: "https://i.ibb.co/Ch52yML/css-7c2f7af3.png" },
    { name: "JavaScript", img: "https://i.ibb.co/SvHdfrH/js-6b71920c.png" },
    {
      name: "Tailwind CSS",
      img: "https://i.ibb.co/Y3Cz4Cx/tailwind-0ab529d8.png",
    },
    {
      name: "Bootstrap",
      img: "https://i.ibb.co/x8kN08J/bootstrap-ff4ba441ec3324145fde.png",
    },
    { name: "React.js", img: "https://i.ibb.co/X3rPmcR/react-462ddb5a.png" },
    {
      name: "Next.js",
      img: next,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      img: "https://www.nazmussakib.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduuwqmunp%2Fimage%2Fupload%2Fv1726062862%2Fundefined-1726062859219.png&w=256&q=75",
    },
    {
      name: "Express.js",
      img: "https://www.nazmussakib.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduuwqmunp%2Fimage%2Fupload%2Fv1726062849%2Fundefined-1726062846796.png&w=256&q=75",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      img: "https://www.nazmussakib.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduuwqmunp%2Fimage%2Fupload%2Fv1726062831%2Fundefined-1726062829048.png&w=256&q=75",
    },
  ],
};

const SkillSection = () => {
      const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <section id='skill' className="py-14 scroll-mt-20">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-10">
          {/* top */}
          <h4 className="text-3xl lg:text-5xl dark:text-text text-center font_outfit">
            Skills & Familiarity
          </h4>
          {/* bottom */}
          <div className=" flex flex-col md:flex-row gap-10 md:gap-0">
            {/* button */}
            <div className="flex items-center justify-between md:flex-col md:gap-10 md:w-[30%] md:items-start md:h-80">
              {["Frontend", "Backend", "Database"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-semibold text-xs rounded-3xl py-[10px] px-[25px] md:px-[30px] lg:size-72 tracking-wide md:text-[25px] capitalize ${
                    activeTab === tab
                      ? "bg-[#000000] text-white hover:shadow-2xl duration-300 hover:bg-[#000000d2]"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* skill */}
            <div className="mx-auto flex justify-center md:justify-start flex-wrap gap-7 md:w-[70%]">
              {skillsData[activeTab].map((skill, index) => (
                <div
                  key={index}
                  className="dark:text-text size-44 flex flex-col items-center justify-center gap-5 skill_card border border-[#D8D8D8] rounded-lg"
                >
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={64}
                    height={64}
                  />
                  <h3 className="font-semibold text-xl">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection
