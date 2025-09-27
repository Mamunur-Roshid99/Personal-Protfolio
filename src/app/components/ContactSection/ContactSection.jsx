"use client";

import React, { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "21f3f6ef-085e-44f6-81b1-183d13e917ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-10 scroll-mt-20"
    >
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-10">
          {/* top */}
          <h4 className="text-3xl lg:text-5xl dark:text-text text-center font_outfit">
            Get in touch
          </h4>
          {/* form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:bg-background5 placeholder:text-[#B3B3B3] font_outfit dark:text-text"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:bg-background5 placeholder:text-[#B3B3B3] font_outfit dark:text-text"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Enter your message"
              name="message"
              required
              className="w-full p-4 outline-none border-[0.5px] border-[#A4A4A4] rounded-md dark:bg-background5 mb-6 placeholder:text-[#B3B3B3] font_outfit dark:text-text"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-[#202020] text-white rounded-full mx-auto hover:bg-black/80 duration-500 cursor-pointer font_outfit"
            >
              Submit now
            </button>
            <p className="mt-4 dark:text-text">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;