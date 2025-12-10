import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert(data.message || "Subscription successful!");
      setEmail(""); // reset input
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer id="contact" className="bg-blue-600 text-white py-12 px-6">
      <div className="flex flex-wrap justify-between mb-6">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">Projects</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-l-lg text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-600 px-3 rounded-r font-bold hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center border-t border-white pt-4 text-sm">
        <div>© All Rights Reserved 2025</div>
        <div className="logo font-bold">🏠 Real <span className="text-orange-400">Trust</span></div>
        <div className="flex gap-3">
          <a href="#">🔵</a>
          <a href="#">📘</a>
          <a href="#">🐦</a>
          <a href="#">💼</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
