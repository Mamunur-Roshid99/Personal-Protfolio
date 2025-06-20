import React from "react";

import './project.css'

import { Link } from "react-router-dom";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import project1 from "../../../public/project1.png"
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project5 from "../../../public/project5.png";

import details1 from "../../../public/details1.png"
import details2 from "../../../public/details2.png";
import details3 from "../../../public/details3.png";
import details5 from "../../../public/details5.png";

const ProjectCard = ({ id, title, imageUrl, description, index, detailsimg }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="image transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-sm overflow-hidden lg:rounded-4xl"
    >
      <img
        className="image__img w-full h-[200px] object-cover rounded-2xl lg:rounded-4xl"
        src={imageUrl}
        alt={title}
      />
      <div className="image__overlay image__overlay--primary flex flex-col gap-4 p-4 bg-[#000000a6] rounded-2xl lg:rounded-4xl backdrop-blur-md">
        <h3 className="title-color text-white text-xl font-semibold">
          {title}
        </h3>
        <p className="subTitle-color text-sm text-[#D1D5DB]">
          {description.slice(0, 80)}...
        </p>
        <Link
          className="btn myMenu3 ms-0 bg-[#11a59b] text-white py-2 px-4 rounded hover:bg-[#0f8e88] transition"
          to={`/details${id}`}
          state={{ project: { id, title, imageUrl, description, detailsimg } }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {

const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    imageUrl: project1,
    description:
      "This was a project I did for a Admin Dashboard. I used React.js & Tailwind CSS to create a responsive website.",
    detailsimg: details1,
  },
  {
    id: 2,
    title: "Car Website",
    imageUrl: project2,
    description:
      "This was a project I did for a Car Website. I used Next.js & Tailwind CSS to create a responsive website.",
    detailsimg: details2,
  },
  {
    id: 3,
    title: "Furniro Website",
    imageUrl: project3,
    description:
      "This was a project I did for a Furniro Website. I used React.js & Tailwind CSS to create a responsive website.",
    detailsimg: details3,
  },
  {
      id: 4,
      title: "Intro Card Website",
      imageUrl: project5,
      description:
        "This was a project I did for a Intro Card Website. I used HTML, CSS to create a responsive website.",
      detailsimg: details5,
    },
];

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
  }, [])

  return (
    <section>
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* top */}
        <div ref={titleRef} className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text">My Projects</h1>
          <div className="bg-[#11a59b9e] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-[#D1D5DB]">
            Here are the top projects that I have done or am doing:
          </p>
        </div>
        {/* upper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:gap-4 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
