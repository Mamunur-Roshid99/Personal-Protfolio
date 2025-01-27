import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-red-700">
      <div className="container w-[90%] mx-auto py-[30px] flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Mamun .</h1>

        <ul className='flex items-center justify-center gap-10'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <a href="#">Download CV</a>
      </div>
    </nav>
  );
}

export default Navbar
