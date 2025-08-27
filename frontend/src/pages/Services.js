"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import FooterOther from "../components/FooterOther";
import ServiceFish from "../components/ServiceFish";

// Assets
import skyImg from "../assets/para/sky.png";
import sunImg from "../assets/para/sun.png";
import mountain1Img from "../assets/para/mountain1.png";
import mountain2Img from "../assets/para/mountain2.png";
import trees1Img from "../assets/para/trees1.png";
import trees2Img from "../assets/para/trees2.png";

// Services data
const services = [
  {
    title: "Video Editing",
    description:
      "Bring your stories to life with cinematic editing and smooth transitions.",
    icon: "🎬",
  },
  {
    title: "Web Development",
    description:
      "Build modern, responsive, and high-performing websites with impact.",
    icon: "💻",
  },
  {
    title: "Graphic Design",
    description:
      "Craft unique logos, social media creatives, and branding assets.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your reach with campaigns, social media strategy, and ads.",
    icon: "📈",
  },
  {
    title: "Ads & Promos",
    description:
      "Create scroll-stopping ad campaigns and product promos that convert.",
    icon: "🎥",
  },
];

const Services = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax layers (tweak for stronger depth)
  const skyY = useTransform(scrollY, [0, 1000], [0, 200]); // far back (slightly faster)

  // Sun (sets much faster)
  const sunY = useTransform(scrollY, [0, 1000], [0, 1200]);

  // Mountain 1 (down + stronger left drift)
  const mountain1Y = useTransform(scrollY, [0, 1000], [0, 400]);
  const mountain1X = useTransform(scrollY, [0, 1000], [0, -200]);

  // Mountain 2 (down + stronger right drift)
  const mountain2Y = useTransform(scrollY, [0, 1000], [0, 450]);
  const mountain2X = useTransform(scrollY, [0, 1000], [0, 200]);

  // Trees 1 (down + stronger left drift)
  const trees1Y = useTransform(scrollY, [0, 1000], [0, 600]);
  const trees1X = useTransform(scrollY, [0, 1000], [0, -250]);

  // Trees 2 (down + stronger right drift, fastest)
  const trees2Y = useTransform(scrollY, [0, 1000], [0, 700]);
  const trees2X = useTransform(scrollY, [0, 1000], [0, 250]);

  // Overlay moves opposite, a bit stronger
  const overlayY = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <>
      <Navbar />

      {/* Parallax Hero */}
      <section ref={ref} className="relative h-screen w-full overflow-hidden">
        {/* Sky */}
        <motion.img
          src={skyImg}
          alt="Sky"
          className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
          style={{ y: skyY }}
        />

        {/* Sun */}
        <motion.img
          src={sunImg}
          alt="Sun"
          className="absolute top-40 left-1/2 -translate-x-1/2 w-64 h-64 object-contain z-[1]"
          style={{ y: sunY }}
        />

        {/* Mountain 1 */}
        <motion.img
          src={mountain1Img}
          alt="Mountain 1"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[2]"
          style={{ y: mountain1Y, x: mountain1X }}
        />

        {/* Mountain 2 */}
        <motion.img
          src={mountain2Img}
          alt="Mountain 2"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[3]"
          style={{ y: mountain2Y, x: mountain2X }}
        />

        {/* Trees 1 */}
        <motion.img
          src={trees1Img}
          alt="Trees 1"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[4]"
          style={{ y: trees1Y, x: trees1X }}
        />

        {/* Trees 2 */}
        <motion.img
          src={trees2Img}
          alt="Trees 2"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-[5]"
          style={{ y: trees2Y, x: trees2X }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black/40 z-[6]"
          style={{ y: overlayY }}
        />

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-6xl font-bold drop-shadow-lg">Our Services</h1>
          <p className="mt-4 text-lg opacity-90">
            We craft digital experiences with impact
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Key Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <ServiceFish key={index} {...service} />
          ))}
        </div>
      </section>

      <FooterOther />
    </>
  );
};

export default Services;
