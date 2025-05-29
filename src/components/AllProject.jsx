import React, {useEffect, useRef} from 'react'

import "../pages/home/project.css"

import { Link } from 'react-router-dom';
import Footer from '../pages/home/Footer';
import gsap from 'gsap';


const ProjectCard = ({ id, title, imageUrl, description }) => {
  return (
    <div className="image">
      <img className="image__img" src={imageUrl} alt="website" />
      <div className="image__overlay image__overlay--primary flex flex-col gap-4">
        <h3 className="title-color fw-bold text2">{title}</h3>
        <p className="subTitle-color text-sm text-[#D1D5DB]">
          {description.slice(0, 80)}...
        </p>
        <Link className="btn myMenu3 ms-0" to={`/details${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};


const AllProject = () => {

  const titleRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0);

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
  {
    id: 5,
    title: "Airbnb Clone Website",
    imageUrl:
      "https://i.pinimg.com/736x/a5/44/a6/a544a645adea1070932b83d64bcfed97.jpg",
    description:
      "This was a project I did for a travel agency. I used HTML,Tailwind CSS to create a responsive website.",
  },
];

  return (
    <section>
      <div ref={titleRef} className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* up */}
        <div className="md:w-[60%] w-[80%] mt-12 mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text">Projects List</h1>
          <div className="bg-[#11a59b9e] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-[15px] text-[#D1D5DB]">
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
