import React, { useState } from 'react'

import  { FaCheck } from "react-icons/fa";

const Contact = () => {

  const [popup, setPopup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit =(e) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const whatsappURL = `https://wa.me/8801973671966?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    setPopup(!popup)
    setName("")
    setEmail("")
    setMessage("")
  }


  return (
    <section className=" border-b-1 border-b-gray-300">
      {/*  */}
      <div className="container w-[90%] mx-auto py-14 flex flex-col gap-14">
        {/* top */}
        <div className="md:w-[60%] w-[80%] mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text">Contact Me</h1>
          <div className="bg-[#11a59b9e] lg:w-[10%] w-[30%] h-1 rounded-2xl"></div>
          <p className="text-sm lg:text-base text-[#D1D5DB]">
            You can contact me by the form below or send email to
            web.dev.anas5@gmaill.com
          </p>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="lg:w-[50%] w-[90%] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-regal-black">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                value={name}
                placeholder="Type your name"
                onChange={(e) => setName(e.target.value)}
                className="border-b-1 text-sm py-2 text-[#D1D5DB] focus:outline-none focus:border-b-[#11A59B] border-regal-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-regal-black">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                value={email}
                placeholder="Type your email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-1 text-sm py-2 text-[#D1D5DB] focus:outline-none focus:border-b-[#11A59B] border-regal-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-regal-black">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-b-1 text-sm py-2 text-[#D1D5DB] focus:outline-none focus:border-b-[#11A59B] border-regal-black"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="bg-[#11A59B] text-center text-white font-semibold text-[15px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-[#11a59bd2] tracking-wide"
            >
              Send
            </button>
            {popup && (
              <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center">
                <div className="bg-white p-10 w-[300px] flex items-center justify-center flex-col gap-2 rounded-lg shadow-lg">
                  <FaCheck className="text-5xl text-green-400" />
                  <h2 className="text-xl font-semibold text-regal-blue">
                    Great!
                  </h2>
                  <p className="text-sm">Message sent successfully !!</p>
                  <button
                    onClick={() => setPopup(false)}
                    className="bg-regal-blue text-white font-semibold text-[15px] rounded-3xl py-[10px] px-[30px] hover:shadow-2xl duration-300 hover:bg-regal-hover tracking-wide"
                  >
                    ok
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
