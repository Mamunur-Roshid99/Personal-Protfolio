import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef, useState } from 'react'

const skillsData = {
  Frontend: [
    { name: "HTML", img: "https://i.ibb.co/HPwNMnc/html-5132b1f6.png" },
    { name: "CSS", img: "https://i.ibb.co/Ch52yML/css-7c2f7af3.png" },
    { name: "JavaScript", img: "https://i.ibb.co/SvHdfrH/js-6b71920c.png" },
    { name: "React", img: "https://i.ibb.co/X3rPmcR/react-462ddb5a.png" },
    {
      name: "Tailwind CSS",
      img: "https://i.ibb.co/Y3Cz4Cx/tailwind-0ab529d8.png",
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

const Skills = () => {

  const [activeTab, setActiveTab] = useState("Frontend");

  const titleRef = useRef(null);

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
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);  

  return (
    <section className="">
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14 mb-1">
        {/* left */}
        <div ref={titleRef} className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text">Skills & Familiarity</h1>
          <div className="bg-[#11a59b9e] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-[15px] text-[#D1D5DB]">
            Below is the list of skills and technologies that I have used until
            now. The assumptions are made based on my thinking and confidence.
          </p>
        </div>
        {/* right */}
        <div className=" flex flex-col md:flex-row gap-10 md:gap-0">
          {/* button */}
          <div className="flex items-center justify-between md:flex-col md:gap-10 md:w-[30%] md:items-start md:h-80 md:border-r-2 border-r-gray-400">
            {["Frontend", "Backend", "Database"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold text-[12px] rounded-3xl py-[10px] px-[30px] lg:size-72 tracking-wide md:text-[25px] transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-[#11A59B] text-white hover:shadow-2xl duration-300 hover:bg-[#11a59bd2]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* skill */}
          <div className="mx-4 flex justify-center flex-wrap gap-5 md:w-[70%]">
            {skillsData[activeTab].map((skill, index) => (
              <div
                key={index}
                className="text-white size-44 flex flex-col items-center justify-center gap-1.5 hover:shadow-2xs hover:shadow-[#5EF38C] hover:scale-105 duration-300"
              >
                <img src={skill.img} alt={skill.name} className="size-20" />
                <h3 className="font-semibold text-xl">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
