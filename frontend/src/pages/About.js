import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute bottom-96">
          <div className="text-center">
            <h1
              className="text-5xl sm:text-6xl font-extrabold mb-6 
                  bg-gradient-to-r from-blue-500 via-white to-cyan-400 
                  bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              WHERE IMAGINATION FLOWS
            </h1>
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-6 
               bg-gradient-to-r from-blue-500 via-white to-cyan-400 
               bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              DESIGN . CREATE . INSPIRE
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
