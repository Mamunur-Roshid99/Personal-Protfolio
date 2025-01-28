import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
      <div className="container w-[90%] mx-auto py-[20px] flex items-center justify-between">
        <a href="#home" className="text-[32px] font-semibold">
          Mamun .
        </a>

        <ul className="flex items-center justify-center gap-11 font-normal text-[17px] text-regal-black">
          <Link to="/" className="hover:text-regal-blue duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-regal-blue duration-300">
            About Me
          </Link>
          <Link to="/projects" className="hover:text-regal-blue duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-regal-blue duration-300">
            Contact
          </Link>
        </ul>

        <a
          className="bg-regal-blue text-white font-semibold text-[15px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-regal-hover tracking-wide"
          href="#"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar
