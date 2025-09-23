"use client";

import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import porject1 from "../../../../public/assets/project1.png";
import porject2 from "../../../../public/assets/project2.png";
import porject3 from "../../../../public/assets/project3.png";
import porject4 from "../../../../public/assets/project4.png";
import porject5 from "../../../../public/assets/porject5.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    description:
      "This was a project I did for a Admin Dashboard. I used React.js & Tailwind CSS to create a responsive website.",
    image: porject1,
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://react-dashboard-six-omega.vercel.app/",
    githubUrl: "https://github.com/Mamunur-Roshid99/React-Dashboard",
  },
  {
    id: 2,
    title: "Car Website",
    description:
      "This was a project I did for a Car Website. I used Next.js & Tailwind CSS to create a responsive website.",
    image: porject2,
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://rent-car-website-omega.vercel.app/",
    githubUrl: "https://github.com/Mamunur-Roshid99/Rent-Car-Website",
  },
  {
    id: 3,
    title: "Furniro Website",
    description:
      "This was a project I did for a Furniro Website. I used React.js & Tailwind CSS to create a responsive website.",
    image: porject3,
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://furniro-e-commerce-website-bay.vercel.app/",
    githubUrl: "https://github.com/Mamunur-Roshid99/Furniro-eCommerce-Website",
  },
  {
    id: 4,
    title: "Intro Card Website",
    description:
      "This was a project I did for a Intro Card Website. I used HTML, CSS to create a responsive website.",
    image: porject4,
    technologies: ["HTML", "CSS", "JS"],
    liveUrl: "https://intro-liard.vercel.app/",
    githubUrl: "https://github.com/Mamunur-Roshid99/Intro",
  },
  {
    id: 5,
    title: "DigiBhai Website",
    description:
      "This was a project I did for a DigiBhai Website. I used Next.js, Tailwind CSS to create a responsive website.",
    image: porject5,
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://digibhai.vercel.app/",
    githubUrl: "https://github.com/Mamunur-Roshid99/DigiBhai",
  },
];

const MyWorkSection = () => {

  useEffect(() => {
    const cards = gsap.utils.toArray(".project_card");

    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section id="work" className="py-14 scroll-mt-20">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-10">
          {/* Title */}
          <h4 className="text-3xl lg:text-5xl dark:text-text text-center font_outfit">
            My latest work
          </h4>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform overflow-hidden project_card hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-52 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#242424] mb-3 font_outfit">
                    {project.title}
                  </h3>
                  <p className="text-[#565656] mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;