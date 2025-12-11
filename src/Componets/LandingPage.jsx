import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import HeroSection from "./HeroSection";
import Footer from "./Footes";
import HappyClient from "./HappyClient";
import Project from "./Project";
import RealtorSection from "./RealtorSection";
import AboutUsSection from "./AboutUsSection";

function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-between items-center p-4 md:px-10">

        {/* Logo */}
        <div className="logo">
          <img
            src="/src/assets/logo.svg"
            alt="Real Trust Logo"
            className="h-10 w-auto invert brightness-200"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul
            className={`flex gap-6 md:flex-row flex-col md:static absolute top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 transition-all ${mobileOpen ? "flex" : "hidden md:flex"
              }`}
          >
            <li><Link to="hero" smooth duration={500} className="cursor-pointer">Home</Link></li>
            <li><Link to="features" smooth duration={500} className="cursor-pointer">Services</Link></li>
            <li><Link to="about" smooth duration={500} className="cursor-pointer">About Projects</Link></li>
            <li><Link to="testimonials" smooth duration={500} className="cursor-pointer">Testimonials</Link></li>
            <li><a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded">Contact</a></li>
            <li><a
              href="/admin"
              className="right-4 bg-black text-white px-4 py-2 rounded shadow-lg"
            >
              Admin
            </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger & Close Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "X" : "☰"}
        </div>

      </header>


      {/* Hero Section */}
      <HeroSection />

      <RealtorSection />

      <AboutUsSection />





      <Project />



      {/* Happy Client  Section */}
      <HappyClient />



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
