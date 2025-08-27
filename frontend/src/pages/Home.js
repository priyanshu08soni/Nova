import React from "react";
import Navbar from "../components/Navbar";
import FooterHome from "../components/FooterHome";
import WaterWave from "react-water-wave";
import heroImg from "../assets/hero3.png";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section with WaterWave */}
      <div className="relative w-full">
        <WaterWave
          imageUrl={heroImg}
          className="w-full"
          style={{
            height: "200vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          options={{
            perturbance: 0.02,   // subtle distortion (default ~0.03)
            dropRadius: 20,      // smooth ripples, not too sharp
            resolution: 512,     // high resolution for smoother waves
            interactive: true,   // allow clicks/taps
            crossOrigin: "",
          }}
        >
          {() => (
            <>
              <section
                className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                style={{
                  top: "30%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  width: "100%",
                }}
              >
                <div className="backdrop-blur-sm p-8 rounded-2xl inline-block shadow-xl">
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    YOUR VISION, OUR CREATION
                  </h1>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    WEBSITES • ADS • BEYOND
                  </h2>
                </div>
              </section>
              <FooterHome />
            </>
          )}
        </WaterWave>
      </div>
    </div>
  );
};

export default Home;
