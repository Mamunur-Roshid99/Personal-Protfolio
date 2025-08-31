"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // scroll e erokom porjonto trigger hobe
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className="py-5">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="">
          {/* top */}
          <div className="text-center border-b border-b-[#969696] pb-5">
            {/* logo */}
            <div className="flex text-2xl lg:text-4xl dark:text-text2 font_outfit font-semibold w-36 mx-auto mb-2 items-center justify-center">
              <h5>Mamun</h5>
              <span className="text-[#EC1552]">.</span>
            </div>
            {/* email */}
            <div className="w-max mx-auto text-[#797979] font_outfit flex items-center justify-center gap-2 text-sm">
              <MdEmail className="text-lg" />
              <p>roshidmamunur348@gmail.com</p>
            </div>
          </div>
          {/* bottom */}
          <div className="pt-5 flex items-center justify-center md:justify-between">
            <h4 className="text-[#626262] font_outfit">
              © 2025 Mamun. All rights reserved.
            </h4>
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.facebook.com/mamunur.roshid.655427"
                target="_blank"
                className="border border-[#848484] p-2 rounded-lg cursor-pointer bg-white"
              >
                <FaFacebookSquare className="text-[#1877F2] text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/mamunur_roshid12/"
                target="_blank"
                className="border border-[#848484] p-2 rounded-lg cursor-pointer bg-white"
              >
                <FaInstagram className="text-[#E4405F] text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mamunur-roshid99/"
                target="_blank"
                className="border border-[#848484] p-2 rounded-lg cursor-pointer bg-white"
              >
                <FaLinkedin className="text-[#0A66C2] text-2xl" />
              </a>
              <a
                href="https://github.com/Mamunur-Roshid99"
                target="_blank"
                className="border border-[#848484] p-2 rounded-lg cursor-pointer bg-white"
              >
                <FaGithub className="text-[#181717] text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;