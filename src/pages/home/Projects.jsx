import React from "react";

import img1 from "/public/project1.png";
import img2 from "/public/project2.png";
import img3 from "/public/project3.png";

import './project.css'

import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, image, description }) => {

  return (
    <div className="image">
      <img className="image__img" src={image} alt="website" />
      <div className="image__overlay image__overlay--primary flex flex-col gap-4">
        <h3 className="title-color fw-bold text-regal-blue font-bold text-2xl">
          {title}
        </h3>
        <p className="subTitle-color text-sm text-gray-300">{description}</p>
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
      title: "Airbnb Clone Website",
      image: img1,
      description:
        "This is an Airbnb Clone Project. Still, we are working on this project.",
    },
    {
      id: 2,
      title: "Lending Page Design",
      image: img2,
      description:
        "This is a Lending page design project. We are still working on this.",
    },
    {
      id: 3,
      title: "Traveling Website",
      image: img3,
      description:
        "This is a Traveling Website Project. More features coming soon.",
    },
  ];

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
