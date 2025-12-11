import React from "react";

export default function AboutUsSection() {
  return (
    <div className="w-full bg-white py-20 px-4">
      {/* Title */}
      <h2 className="text-4xl font-bold text-purple-700 mb-4 text-center mb-2">About Us</h2>
      <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-12" />

      {/* Image Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-14">
        {/* Left Image */}
        <img
          src="/assets1/pexels-fauxels-3184603.jpg"
          alt="About small 1"
          className="w-40 h-48 md:w-48 md:h-56 rounded-xl shadow-lg object-cover hover:scale-105 transition duration-300"
        />

        {/* Center Main Image */}
        <div className="relative">
          <img
            src="/assets1/pexels-karola-g-7876662.jpg"
            alt="About main"
            className="w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-xl object-cover hover:scale-105 transition duration-300"
          />

          {/* Overlay Title */}
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-2 rounded-full text-xl font-semibold shadow-lg">
            Real Trust
          </h3>
        </div>

        {/* Right Image */}
        <img
          src="/assets1/pexels-edmond-dantes-4342493.jpg"
          alt="About small 2"
          className="w-40 h-48 md:w-48 md:h-56 rounded-xl shadow-lg object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-10 px-4">
        Our expert team is dedicated to providing exceptional real estate services with honesty,
        transparency, and professionalism. We focus on understanding your needs and building long-term
        trust through clear communication and reliable support.
      </p>

      {/* Button */}
      <div className="text-center">
        <button className="px-10 py-3 border border-blue-600 text-blue-600 text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-md">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}