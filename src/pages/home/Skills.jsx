import React from 'react'

const Skills = () => {
  return (
    <section className="bg-[#F8F9FF]">
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* left */}
        <div className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-[24px] md:text-4xl text-center font-semibold text-regal-blue">
            Skills & Familiarity
          </h1>
          <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-regal-gray">
            Below is the list of skills and technologies that I have used until
            now. The assumptions are made based on my thinking and confidence.
          </p>
        </div>
        {/* right */}
        <div className='mx-4 flex justify-center flex-wrap gap-5'>
          {/* html */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="https://i.ibb.co/HPwNMnc/html-5132b1f6.png"
              alt="html"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">HTML</h3>
          </div>
          {/* css */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="http://i.ibb.co/Ch52yML/css-7c2f7af3.png"
              alt="css"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">CSS</h3>
          </div>
          {/* js */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="https://i.ibb.co/SvHdfrH/js-6b71920c.png"
              alt="js"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">JavaScript</h3>
          </div>
          {/* react */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="https://i.ibb.co/X3rPmcR/react-462ddb5a.png"
              alt="react"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">React</h3>
          </div>
          {/* tailwind css */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="https://i.ibb.co/Y3Cz4Cx/tailwind-0ab529d8.png"
              alt="tailwind css"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">Tailwind CSS</h3>
          </div>
          {/* bootstrap */}
          <div className="bg-white size-52 flex flex-col items-center justify-center gap-1.5 shadow-2xs hover:scale-105 duration-300">
            <img
              src="https://i.ibb.co/x8kN08J/bootstrap-ff4ba441ec3324145fde.png"
              alt="bootstrap"
              className="size-24"
            />
            <h3 className="font-semibold text-xl">Bootstrap</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
