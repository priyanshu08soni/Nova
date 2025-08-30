import React from "react";
import Navbar from "../components/Navbar";
import FooterHome from "../components/FooterHome";
import WaterWave from "react-water-wave";
import heroImg from "../assets/hero4.png";

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
                  top: "20%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  width: "100%",
                }}
              >
                <div className="p-8">
                  <h1 className="hero-heading text-5xl sm:text-6xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    YOUR VISION, OUR CREATION
                  </h1>
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
