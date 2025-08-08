import Image from "next/image";

import image from "../../../../public/assets/profile2.jpg"

import { FaCode } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

export const infoList = [
  {
    icon: <FaCode />,
    iconDark: "dfsasdfas",
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: <MdOutlineCastForEducation />,
    iconDark: "fdsfasdfa_dark",
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: <GrProjects />,
    iconDark: "fdsfasdfaicon_dark",
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-10">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div>
          {/* top */}
          <h4 className="text-3xl lg:text-5xl text-[#242424] text-center font_outfit">
            About me
          </h4>
          {/* bottom */}
          <div className="flex flex-col gap-20">
            {/* left:image */}
            <div className="md:w-64 sm:w-80 rounded-3xl max-w-none w-full">
              <Image src={image} className="w-full rounded-3xl" />
            </div>
            {/* right */}
            <div>
              <p>
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>
              <ul>
                {infoList.map((info, index) => (
                  <li key={index}>
                    <h5>{info.icon}</h5>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
