import React, { useState } from "react";
import img1 from "/public/Untitled-1.jpg";
import img2 from "/public/Untitled-2.jpg";
import img3 from "/public/Untitled-3.jpg";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, description }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="group relative overflow-hidden w-[384px] rounded-2xl cursor-pointer"
      onClick={() => setShowText(!showText)}
    >
      {/* Overlay */}
      <div className="group-hover:opacity-60 group-hover:bg-[#4D5360] absolute w-full h-full z-40 transition-all duration-500"></div>

      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Title */}
      <div className="absolute left-7 -bottom-full group-hover:bottom-36 z-50 text-amber-200 transition-all duration-500 font-bold text-2xl">
        {title}
      </div>

      {/* Description */}
      <div className="absolute left-7 -bottom-full group-hover:bottom-24 text-sm z-50 text-gray-200 transition-all duration-500 w-80">
        {description}
      </div>

      {/* Details Button */}
      <div className="absolute left-7 -bottom-full group-hover:bottom-[50px] z-50 text-white bg-regal-blue transition-all duration-500 font-semibold text-[15px] rounded-tl-2xl rounded-br-2xl rounded-sm py-[6px] px-[20px] hover:shadow-2xl hover:bg-regal-hover tracking-wide">
        <Link>Details</Link>
      </div>

      {/* Mobile Click Effect */}
      {showText && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-start justify-center p-6">
          <h2 className="text-amber-200 font-bold text-2xl">{title}</h2>
          <p className="text-gray-200 text-sm mt-2">{description}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Airbnb Clone Website",
      image: img1,
      description:
        "This is an Airbnb Clone Project. Still, we are working on this project.",
    },
    {
      title: "Lending Page Design",
      image: img2,
      description:
        "This is a Lending page design project. We are still working on this.",
    },
    {
      title: "Traveling Website",
      image: img3,
      description:
        "This is a Traveling Website Project. More features coming soon.",
    },
  ];

  return (
    <section>
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* Header */}
        <div className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl text-center font-semibold text-regal-blue">
            My Projects
          </h1>
          <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-regal-gray">
            Here are the top projects that I have done or am doing:
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
