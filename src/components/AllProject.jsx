import React, { useEffect, useState } from 'react'

import "../pages/home/project.css"

import { Link } from 'react-router-dom';
import Footer from '../pages/home/Footer';


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
};


const AllProject = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("https://portfolio-api-13s7.onrender.com/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    }, [])

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
            <ProjectCard key={index} loading={loading} error={error} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AllProject
