

import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

      const response = await fetch(`${API_BASE_URL}/api/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert(data.message || "Subscription successful!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Top section with image background */}
      <div
        className="relative h-64 md:h-80 w-full flex flex-col items-center justify-center text-center text-white p-6 rounded mb-6"
        style={{
          backgroundImage: "url('/src/assets/Rectangle.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded"></div>
        <div className="relative z-10 max-w-xl">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer section */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-6">
        <div className="flex flex-wrap justify-between mb-6">

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#features" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">Projects</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          {/* Subscribe Box */}
       <div className="flex items-center gap-2 mt-4 md:mt-0 flex-col md:flex-row w-full md:w-auto">
  <input
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="p-2 rounded-lg md:rounded-l-lg md:rounded-r-none text-white placeholder-gray-300 
               border border-gray-600 focus:outline-none focus:ring-2 
               focus:ring-orange-500 bg-gray-800 w-full md:w-auto"
  />

  <button
    onClick={handleSubscribe}
    className="bg-orange-500 text-white px-3 py-2 rounded-lg md:rounded-r-lg md:rounded-l-none 
               font-bold hover:bg-orange-600 transition w-full md:w-auto"
  >
    Subscribe
  </button>
</div>

        </div>

        {/* Bottom Area */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4 text-sm">

          <div>© All Rights Reserved 2025</div>

      <div className="logo">
 <img
  src="/src/assets/logo.svg"
  className="h-10 w-auto invert brightness-200"
  alt="Real Trust Logo"
/>

</div>


          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg 
                bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4]
                hover:scale-110 transform transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg 
                hover:brightness-110 transform hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white shadow-lg 
                hover:brightness-110 transform hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg 
                hover:brightness-110 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
