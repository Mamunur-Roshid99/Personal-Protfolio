import React from 'react'

import Footer from '../../pages/home/Footer';

import img1 from "/public/details4.png";

const Details4 = () => {
  return (
    <>
      <section>
        <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* img */}
          <div className="md:w-[100%] lg:w-[55%] w-[80%] mt-20 mx-auto -z-50 relative h-80 md:h-96 shadow-xl rounded-2xl overflow-hidden">
            <img
              src={img1}
              alt="details1"
              className="absolute w-full h-auto animate-scroll"
            />
          </div>
          {/* text */}
          <div className="mt-2 lg:mt-20 lg:w-[45%] text-center flex flex-col gap-3">
            <div className="md:w-[60%] lg:w-full w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
              <h1 className="text-[25px] md:text-3xl lg:text-4xl text-center font-semibold text-regal-blue">
                Airbnb Clone Website
              </h1>
              <div className="bg-[#5c7bf87f] lg:w-[20%] lg:mt-3 w-[30%] h-1 rounded-2xl"></div>
            </div>
            <p className="text-xl md:text-[23px] font-medium text-gray-700">
              Project Details:
            </p>
            <p className="text-base md:text-xl lg:text-base text-regal-gray">
              This was a project I did for a travel agency. I used HTML,
              Tailwind CSS to create a responsive website.
            </p>
            <p className="text-xl md:text-[23px] font-medium text-gray-700">
              Technology:
            </p>
            <p className="text-base md:text-xl lg:text-base lg:-mt-0 text-regal-gray -mt-3">
              HTML, Tailwind CSS
            </p>
            <div className="mt-5 w-[90%] md:w-[50%] lg:w-[60%] mx-auto flex items-center justify-center gap-5">
              <a
                href="https://mamunur-roshid99.github.io/Airbnb-landing-page-clone/"
                target="_blank"
                className="myMenu3"
              >
                Live
              </a>
              <a
                href="https://github.com/Mamunur-Roshid99/Airbnb-landing-page-clone"
                target="_blank"
                className="myMenu3"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Details4
