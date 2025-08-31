"use client";

import Image from "next/image";
import { CiDark } from "react-icons/ci";
import { FaRegSun } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import MenubarDrawer from "../components/MenubarDrawer";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import image from "../../../public/assets/navbar.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);

  // Scroll effect for shadow and backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    // Navbar fade in
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Links fade in stagger
    gsap.from(linksRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`w-full fixed z-50 transition-all ${
          isScroll
            ? "backdrop-blur-lg shadow-sm dark:shadow-white/50 dark:bg-background2 dark:text-text"
            : ""
        }`}
      >
        <nav className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto py-5 flex items-center justify-between">
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
            {["Home", "About me", "Skills", "My work", "Contact"].map(
              (link, index) => (
                <li key={index} ref={(el) => (linksRef.current[index] = el)}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* dark & menu icon */}
          <div className="flex gap-5 lg:items-center">
            {/* dark mode toggle */}
            <div
              onClick={() => {
                setIsDark(!isDark);
                document.documentElement.classList.toggle("dark");
              }}
              className="text-2xl cursor-pointer dark:text-text"
            >
              {isDark ? <FaRegSun /> : <CiDark />}
            </div>

            {/* menu drawer */}
            <div className="text-xl lg:hidden dark:text-text">
              <MenubarDrawer />
            </div>

            {/* contact button */}
            <a
              href="#contact"
              className="opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto border border-[#A7A7A7] px-6 py-2 rounded-full flex items-center gap-2 dark:text-text3 cursor-pointer font_outfit hover:scale-105 duration-500 dark:bg-red"
            >
              <p>Connect</p>
              <GoArrowUpRight className="text-lg" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
