import React from 'react'

const Projects = () => {
  return (
    <section>
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* left */}
        <div className="w-[60%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl text-center font-semibold text-regal-blue">
            My Projects
          </h1>
          <div className="bg-[#5c7bf87f] w-[10%] h-1 rounded-2xl"></div>
          <p className="text-sm text-regal-gray">
            Here are the top projects that I have done or am doing:
          </p>
        </div>
        {/* right */}
        <div>
        </div>
      </div>
    </section>
  );
}

export default Projects
