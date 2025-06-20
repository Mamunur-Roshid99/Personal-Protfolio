import React, {useEffect, useRef} from 'react'

import Footer from '../../pages/home/Footer';

import img1 from "/public/details3.png";
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Details3 = () => {
  const location = useLocation();
  const project = location.state?.project;
  const titleRef = useRef(null);

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

  if (!project) {
    return <p>No project data available</p>;
  }

  return (
    <>
      <section>
        <div
          ref={titleRef}
          className="container w-[90%] mx-auto py-14 flex flex-col gap-14 lg:flex-row lg:justify-between"
        >
          {/* img */}
          <div className="md:w-[100%] lg:w-[55%] w-[80%] mt-20 mx-auto -z-50 relative h-80 md:h-96 shadow-xl rounded-2xl overflow-hidden">
            {project.detailsimg && (
              <img
                src={project.detailsimg}
                alt={`${project.title} details`}
                className="absolute w-full h-auto animate-scroll"
              />
            )}
          </div>
          {/* text */}
          <div className="mt-2 lg:mt-20 lg:w-[45%] text-center flex flex-col gap-3">
            <div className="md:w-[60%] lg:w-full w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
              <h1 className="text-[25px] md:text-3xl lg:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5EF38C] to-[#7371AB]">
                {project.title}
              </h1>
              <div className="bg-[#11a59b9e] lg:w-[20%] lg:mt-3 w-[30%] h-1 rounded-2xl"></div>
            </div>
            <p className="text-xl md:text-[23px] font-medium text-[#FFFFFF]">
              Project Details:
            </p>
            <p className="text-base md:text-xl lg:text-base text-[#D1D5DB]">
              {project.description}
            </p>
            <p className="text-xl md:text-[23px] font-medium text-[#FFFFFF]">
              Technology:
            </p>
            <p className="text-base md:text-xl lg:text-base lg:-mt-0 text-[#D1D5DB] -mt-3">
              React.js & Tailwind CSS
            </p>
            <div className="mt-5 w-[90%] md:w-[50%] lg:w-[60%] mx-auto flex items-center justify-center gap-5">
              <a
                href="https://furniro-e-commerce-website-bay.vercel.app/"
                target="_blank"
                className="myMenu3"
              >
                Live
              </a>
              <a
                href="https://github.com/Mamunur-Roshid99/Furniro-eCommerce-Website"
                target="_blank"
                className="myMenu3"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Details3
