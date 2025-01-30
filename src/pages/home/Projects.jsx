import React, {useState} from "react";

import img1 from "/public/Untitled-1.jpg";
import img2 from "/public/Untitled-2.jpg";
import img3 from "/public/Untitled-3.jpg";

import { Link } from "react-router-dom";
const Projects = () => {

  const [showText, setShowText] = useState(false);

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
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          {/* project1 */}
          <div className="group relative overflow-hidden w-[384px] rounded-2xl ">
            {/* overploy */}
            <div className="group-hover:opacity-60 group-hover:bg-[#4D5360] absolute w-full h-full z-40 transition-all duration-500"></div>
            {/* img */}
            <img src={img1} alt="project1" />
            {/* title */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-36 z-50 text-amber-200 transition-all duration-500 font-bold text-2xl">
              Airbnb Clone Website
            </div>
            {/* description */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-24 text-sm z-50 text-gray-200 transition-all duration-500 w-80">
              This is an Airbnb Clone Project. Still, we are working on this
              project. Here, an a...
            </div>
            {/* details */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-[50px] z-50 text-white bg-regal-blue transition-all duration-500 font-semibold text-[15px] rounded-tl-2xl rounded-br-2xl rounded-sm py-[6px] px-[20px] hover:shadow-2xl hover:bg-regal-hover tracking-wide">
              <Link>Details</Link>
            </div>
          </div>
          {/* project2 */}
          <div
            className="group relative overflow-hidden w-[384px] rounded-2xl"
            onClick={() => setShowText(!showText)}
          >
            {/* overploy */}
            <div className="group-hover:opacity-60 group-hover:bg-[#4D5360] absolute w-full h-full z-40 transition-all duration-500"></div>
            {/* img */}
            <img src={img2} alt="project2" />
            {/* title */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-36 z-50 text-amber-200 transition-all duration-500 font-bold text-2xl">
              Lending Page Design
            </div>
            {/* Desktop Hover Effect */}
            <div className="absolute inset-0 bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg"></p>
            </div>

            {/* Mobile Click Effect */}
            {showText && (
              <div className="absolute inset-0 bg-opacity-80 flex items-center justify-center">
                <p className="text-white text-lg"></p>
              </div>
            )}
            {/* description */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-24 text-sm z-50 text-gray-200 transition-all duration-500 w-80">
              This is an Lending page design project. Still, we are working on
              this project. Here, an a...
            </div>
            {/* details */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-[50px] z-50 text-white bg-regal-blue transition-all duration-500 font-semibold text-[15px] rounded-tl-2xl rounded-br-2xl rounded-sm py-[6px] px-[20px] hover:shadow-2xl hover:bg-regal-hover tracking-wide">
              <Link>Details</Link>
            </div>
          </div>
          {/* project3 */}
          <div className="group relative overflow-hidden w-[384px] rounded-2xl ">
            {/* overploy */}
            <div className="group-hover:opacity-60 group-hover:bg-[#4D5360] absolute w-full h-full z-40 transition-all duration-500"></div>
            {/* img */}
            <img src={img3} alt="project3" />
            {/* title */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-36 z-50 text-amber-200 transition-all duration-500 font-bold text-2xl">
              Travaling Website
            </div>
            {/* description */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-24 text-sm z-50 text-gray-200 transition-all duration-500 w-80">
              This is an Travaling Website Project. Still, we are working on
              this project. Here, an a...
            </div>
            {/* details */}
            <div className="absolute left-7 -bottom-full group-hover:bottom-[50px] z-50 text-white bg-regal-blue transition-all duration-500 font-semibold text-[15px] rounded-tl-2xl rounded-br-2xl rounded-sm py-[6px] px-[20px] hover:shadow-2xl hover:bg-regal-hover tracking-wide">
              <Link>Details</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
