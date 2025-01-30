import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[#F8F9FF] border-b-1 border-b-gray-300">
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* top */}
        <div className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl text-center font-semibold text-regal-blue">
            Contact Me
          </h1>
          <div className="bg-[#5c7bf87f] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-regal-gray">
            You can contact me by the form below or send email to
            web.dev.anas5@gmaill.com
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col items-center justify-center">
          <div className="lg:w-[50%] w-[90%] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-regal-black">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type your name"
                className="border-b-1 text-sm py-2 focus:outline-none focus:border-b-regal-skyblue border-regal-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-regal-black">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="border-b-1 text-sm py-2 focus:outline-none focus:border-b-regal-skyblue border-regal-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-regal-black">
                Your Message
              </label>
              <textarea
                name="mssage"
                placeholder="Type your message"
                className="border-b-1 text-sm py-2 focus:outline-none focus:border-b-regal-skyblue border-regal-black"
              ></textarea>
            </div>
            <a
              href="#"
              className="bg-regal-blue text-center text-white font-semibold text-[15px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-regal-hover tracking-wide cu"
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
