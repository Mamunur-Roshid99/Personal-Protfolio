import React from "react";

import './project.css'

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectCard = ({ id, title, imageUrl, description }) => {

  return (
    <div className="image">
      <img className="image__img" src={imageUrl} alt="website" />
      <div className="image__overlay image__overlay--primary flex flex-col gap-4">
        <h3 className="title-color fw-bold text-regal-blue font-bold text-2xl">
          {title}
        </h3>
        <p className="subTitle-color text-sm text-gray-300">{description.slice(0, 80)}...</p>
        <Link className="btn myMenu3 ms-0" to={`/details${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}

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



  return (
    <section>
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* top */}
        <div className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl text-center font-semibold text-regal-blue">
            My Projects
          </h1>
          <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-regal-gray">
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
