import { useState } from "react";

function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
              const API_BASE_URL = import.meta.env.VITE_BACKEND_URL

      const response = await fetch(`${API_BASE_URL }/api/landing/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      alert(data.message || "Thank you! Your request has been submitted.");
      setFormData({ fullName: "", email: "", phone: "", city: "" });
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-start md:items-center justify-between mt-16 px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/main 1.svg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content/Text */}
      <div className="relative z-10 hero-text w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          Consultation,<br />Design,<br />& Marketing
        </h1>
      </div>

      {/* Form */}
      <div className="relative z-10 hero-form bg-amber-950 bg-opacity-60 p-6 rounded-md w-full max-w-md md:w-80">
        <h2 className="text-xl mb-4 font-semibold text-center md:text-left">
          Get a Free Consultation
        </h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="p-2 rounded text-white placeholder-white bg-transparent border border-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded text-white placeholder-white bg-transparent border border-white"
          />
          <input
            type="tel"
            required
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 rounded text-white placeholder-white bg-transparent border border-white"
          />
          <input
            type="text"
            name="city"
            required
            placeholder=" City"
            value={formData.city}
            onChange={handleChange}
            className="p-2 rounded text-white placeholder-white bg-transparent border border-white"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold p-2 rounded mt-2 hover:bg-orange-600 transition"
          >
            Get Quick Quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
