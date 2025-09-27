"use client";

import Image from "next/image";

import { GoArrowRight } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import profile from "../../../../public/assets/profile.png";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack Developer", "React-Js Developer", "Next-Js Developer"],
    loop: {},
  });

  return (
    <section
      id="home"
      className="py-12 pt-24 lg:pt-32 scroll-mt-20"
    >
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
            <h4 className="text-xl md:text-2xl mb-3 dark:text-text">
              Hi! I’m Mamunur Roshid Anas 👋🏻
            </h4>
          </div>
          <h1 className="text-3xl lg:text-[60px] lg:max-w-5xl dark:text-text">
            <span> {text}</span>
            <span className="font-semibold text-blue-100">
              <Cursor></Cursor>
            </span>{" "}
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base dark:text-text4">
            I am a Junior Front End Developer, passionate about creating
            stunning web applications using JavaScript, React and Next.js, eager
            to collaborate and innovate together.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
            <a
              href="#contact"
              className="px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 dark:bg-background3"
            >
              Connect With Me <GoArrowRight />
            </a>
            <a
              href="https://drive.google.com/file/d/1A1ob17C1zDRahah8hwQWm-mnuWjsvip2/view?usp=sharing"
              target="_blank"
              className="px-10 py-3 border border-[#A7A7A7] rounded-full flex items-center gap-2 dark:bg-background4"
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
