import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  // 🔹 Setup Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />

      {/* 🔹 Hero Section with Spline */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Spline Scene */}
        <div className="absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" />
        </div>

        <div className="relative text-center">
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
      </section>

      <Footer />
    </div>
  );
};

export default About;
