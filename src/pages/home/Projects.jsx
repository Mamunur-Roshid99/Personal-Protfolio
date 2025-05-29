import React from "react";

import './project.css'

import { Link } from "react-router-dom";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ id, title, imageUrl, description, index }) => {
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
      className="image transform transition duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl overflow-hidden"
    >
      <img
        className="image__img w-full h-[200px] object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="image__overlay image__overlay--primary flex flex-col gap-4 p-4 bg-[#000000a6] backdrop-blur-md">
        <h3 className="title-color text-white text-xl font-semibold">
          {title}
        </h3>
        <p className="subTitle-color text-sm text-[#D1D5DB]">
          {description.slice(0, 80)}...
        </p>
        <Link
          className="btn myMenu3 ms-0 bg-[#11a59b] text-white py-2 px-4 rounded hover:bg-[#0f8e88] transition"
          to={`/details${id}`}
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
      title: "Travel Agency Website",
      imageUrl:
        "https://i.pinimg.com/736x/eb/7a/6f/eb7a6f571264754a1eecf91c6a32fba1.jpg",
      description:
        "This was a project I did for a travel agency. I used HTML CSS to create a responsive website.",
    },
    {
      id: 2,
      title: "Comfea Website",
      imageUrl:
        "https://i.pinimg.com/736x/23/93/6b/23936b845fb786059339d48bb3618345.jpg",
      description:
        "This was a project I did for a Comfea Website. I used HTML CSS and JavaScript to create a responsive website.",
    },
    {
      id: 3,
      title: "Nexcent Website",
      imageUrl:
        "https://i.pinimg.com/736x/3e/52/58/3e52585767cc17da215c557c17e5d0d5.jpg",
      description:
        "This was a project I did for a Nexcent Website. I used HTML, Tailwind CSS, JavaScript and React to create a responsive website.",
    },
    {
      id: 4,
      title: "News Website",
      imageUrl:
        "https://i.pinimg.com/736x/59/36/79/59367941f4d27899f520871e569adf78.jpg",
      description:
        "This was a project I did for a News Website. I used HTML, Tailwind CSS and React.js to create a responsive website.",
    },
  ]

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:gap-14 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
