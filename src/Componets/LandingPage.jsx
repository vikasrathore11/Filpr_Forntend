import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import HeroSection from "./HeroSection";
import Footer from "./Footes";
import HappyClient from "./HappyClient";
import Project from "./Project";

function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-between items-center p-4 md:px-10">
        <div className="logo font-bold text-xl">Real Trust</div>

        <nav>
          <ul className={`flex gap-6 md:flex-row flex-col md:static absolute top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 transition-all ${mobileOpen ? "flex" : "hidden md:flex"}`}>
            <li><Link to="hero" smooth duration={500} className="cursor-pointer">Home</Link></li>
            <li><Link to="features" smooth duration={500} className="cursor-pointer">Services</Link></li>
            <li><Link to="about" smooth duration={500} className="cursor-pointer">About Projects</Link></li>
            <li><Link to="testimonials" smooth duration={500} className="cursor-pointer">Testimonials</Link></li>
            <li><a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded">Contact</a></li>
          </ul>
        </nav>

        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection/>
      {/* Features */}
      <section id="features" className="flex flex-wrap justify-around gap-8 p-16 bg-gray-100 text-center">
        {[
          { title: "Potential ROI", desc: "Maximize your returns with our data-driven strategies." },
          { title: "Design", desc: "Crafting beautiful and functional spaces tailored to clients." },
          { title: "Marketing", desc: "Reach your perfect audience with targeted campaigns." },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center flex-1 min-w-[200px] p-4 bg-white rounded shadow hover:shadow-lg transition">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-blue-600 mb-2 font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl text-blue-600 mb-2">About Us</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded"></div>
        <p className="text-gray-700 mb-6">
          Fifteen years of expertise in real estate, excellent customer service and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and maintain them effectively.
        </p>
        <button className="px-6 py-2 border border-blue-600 text-blue-600 font-bold rounded hover:bg-blue-600 hover:text-white transition">
          Learn More
        </button>
      </section>

    
    <Project/>

      {/* Testimonials */}
      {/* <section id="testimonials" className="flex flex-wrap justify-center gap-6 py-16 px-4 bg-gray-100">
        {[
          { name: "Rowhan Smith", role: "CEO, Foreclosure", img: "/happy1.jpg", text: "Lorem ipsum dolor sit amet..." },
          { name: "Shipra Kayak", role: "Brand Designer", img: "/happy2.jpg", text: "Lorem ipsum dolor sit amet..." },
          { name: "John Lepore", role: "CEO, Foreclosure", img: "/happy1.jpg", text: "Lorem ipsum dolor sit amet..." },
        ].map((t, i) => (
          <div key={i} className="bg-white w-56 p-4 rounded-xl shadow relative pt-12 text-center">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 border-2 border-white"/>
            <p className="text-gray-600 text-sm mb-2">{t.text}</p>
            <h4 className="text-blue-600 font-semibold">{t.name}</h4>
            <span className="text-gray-500 text-xs">{t.role}</span>
          </div>
        ))}
      </section> */}

      {/* Happy Client  Section */}
      <HappyClient/>
      

      {/* CTA Section */}
      <section className="relative bg-[url('/footerlast.png')] bg-cover bg-center h-72 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white">
          <h2 className="mb-4">Learn more about our listing process, as well as our additional staging and design work.</h2>
          <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-gray-200 transition">Learn More</button>
        </div>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  );
}

export default LandingPage;
