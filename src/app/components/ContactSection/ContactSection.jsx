import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className='w-full py-10 scroll-mt-20'
    >
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        <div className="space-y-10">
          {/* top */}
          <h4 className="text-3xl lg:text-5xl text-[#242424] text-center font_outfit">
            Get in touch
          </h4>
          {/* form */}
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
rounded-md bg-white placeholder:text-[#B3B3B3] font_outfit"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
rounded-md bg-white placeholder:text-[#B3B3B3] font_outfit"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full p-4 outline-none border-[0.5px] border-[#A4A4A4]
rounded-md bg-white mb-6 placeholder:text-[#B3B3B3] font_outfit"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-[#202020] text-white rounded-full mx-auto hover:bg-black/80 duration-500 cursor-pointer font_outfit"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
