import { useState } from "react";

const ProjectCard = ({ title, image, description }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="relative group bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
      onClick={() => setShowText(!showText)}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* Desktop Hover Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white text-lg">{description}</p>
      </div>

      {/* Mobile Click Effect */}
      {showText && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <p className="text-white text-lg">{description}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Landing Page",
      image: "/project1.jpg",
      description: "A modern landing page design",
    },
    {
      title: "Portfolio",
      image: "/project2.jpg",
      description: "A sleek portfolio website",
    },
    {
      title: "E-commerce",
      image: "/project3.jpg",
      description: "A simple e-commerce site",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
