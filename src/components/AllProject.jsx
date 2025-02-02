import React from 'react'

import "../pages/home/project.css"

import img1 from "/public/project1.png";
import img2 from "/public/project2.png";
import img3 from "/public/project3.png";
import img4 from "/public/project4.png";

import { Link } from 'react-router-dom';
import Footer from '../pages/home/Footer';


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
};


const AllProject = () => {

    const projects = [
      {
        id: 1,
        title: "Travel Agency Website",
        image: img1,
        description:
          "This is an Travel Agency Website. Still, we are working on this project.",
      },
      {
        id: 2,
        title: "Comfea",
        image: img2,
        description: "This is a Comfea project. We are still working on this.",
      },
      {
        id: 3,
        title: "Nexcent",
        image: img3,
        description: "This is a Nexcent Project. We are still working on this.",
      },
      {
        id: 4,
        title: "Airbnb Clone Website",
        image: img4,
        description:
          "This is a Airbnb Clone Website. We are still working on this.",
      },
    ];

  return (
    <section>
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* up */}
        <div className="md:w-[60%] w-[80%] mt-12 mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-[24px] md:text-3xl text-center font-semibold text-regal-blue">
            Projects List
          </h1>
          <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-[15px] text-regal-gray">
            Here are the projects that I have done throughout my journey in web
            development.
          </p>
        </div>
        {/* down */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:gap-14 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AllProject
