"use client"

import Image from "next/image";

import { CiDark } from "react-icons/ci";
import { FaRegSun } from "react-icons/fa";

import { GoArrowUpRight } from "react-icons/go";

import MenubarDrawer from "../components/MenubarDrawer";

import image from "../../../public/assets/navbar.png";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    });
  }, []);

  return (
    <>
      <header
        className={`w-full fixed z-50 ${
          isScroll
            ? "backdrop-blur-lg shadow-sm dark:shadow-white/50 dark:bg-background2 dark:text-text"
            : ""
        }`}
      >
        <nav className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto py-5">
          <div className="flex items-center justify-between">
            {/* logo */}
            <a
              href="#home"
              className="flex text-2xl lg:text-4xl dark:text-text2 font_outfit font-semibold"
            >
              <h5>Mamun</h5>
              <span className="text-[#EC1552]">.</span>
            </a>
            {/* links */}
            <ul
              className={`hidden lg:flex items-center gap-8 ${
                isScroll
                  ? ""
                  : "bg-white/50 rounded-full px-12 py-3 shadow-xs dark:border dark:border-white/50 dark:bg-transparent dark:text-text"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  My work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </li>
            </ul>
            {/* dark & menu icon */}
            <div className="flex gap-5 lg:items-center">
              {/* dark */}
              <div
                onClick={() => {
                  setIsDark(!isDark);
                  document.documentElement.classList.toggle("dark");
                }}
                className="text-2xl cursor-pointer dark:text-text"
              >
                {isDark ? <FaRegSun /> : <CiDark />}
              </div>
              {/* menu */}
              <div className="text-xl lg:hidden dark:text-text">
                <MenubarDrawer />
              </div>
              {/* contact button */}
              <a
                href="#contact"
                className="hidden border border-[#A7A7A7] px-6 py-2 rounded-full lg:flex items-center gap-2 dark:text-text3 cursor-pointer font_outfit hover:scale-105 duration-500 dark:bg-red"
              >
                <p>Connect</p>
                <GoArrowUpRight className="text-lg" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;