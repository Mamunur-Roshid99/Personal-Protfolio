import Image from "next/image";

import { GoArrowRight } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

import profile from "../../../../public/assets/profile.png"

const HeroSection = () => {
  return (
    <section id="home" className="py-12 pt-24 lg:pt-32 scroll-mt-20">
      <div className="flex items-center justify-center text-center px-4 md:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center">
          {/* top */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="rounded-full w-32">
              <Image
                src={profile}
                alt="profile"
                className="rounded-full w-full"
              />
            </div>
            <h4 className="text-xl md:text-2xl mb-3">
              Hi! I’m Mamunur Roshid Anas 👋🏻
            </h4>
          </div>
          <h1 className="text-3xl lg:text-[60px] lg:max-w-5xl text-[#242424]">
            Mern Stack Developer crafting modern web experiences.
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            I am a Junior Front End Developer, passionate about creating
            stunning web applications using JavaScript, React and Next.js, eager
            to collaborate and innovate together.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
            <a
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
            >
              Connect With Me <GoArrowRight />
            </a>
            <a
              href="https://drive.google.com/file/d/16cDrypI3mcVuIZzeeSABuVtsDFrdjeIz/view?usp=sharing"
              target="_blank"
              className="px-10 py-3 border border-[#A7A7A7] rounded-full flex items-center gap-2"
            >
              My Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
