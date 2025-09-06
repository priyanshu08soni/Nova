"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesHero = () => {
  // Parallax
  const { scrollY } = useScroll();

  const sunY = useTransform(scrollY, [0, 1000], [0, 900]);
  const sunRotate = useTransform(scrollY, [0, 1000], [0, 180]);
  const mountain1Y = useTransform(scrollY, [0, 1000], [0, 400]);
  const mountain1X = useTransform(scrollY, [0, 1000], [0, -800]);
  const mountain2Y = useTransform(scrollY, [0, 1000], [0, 450]);
  const mountain2X = useTransform(scrollY, [0, 1000], [0, 800]);
  const trees1Y = useTransform(scrollY, [0, 1000], [0, 600]);
  const trees1X = useTransform(scrollY, [0, 1000], [0, -250]);
  const trees2Y = useTransform(scrollY, [0, 1000], [0, 700]);
  const trees2X = useTransform(scrollY, [0, 1000], [0, 250]);

  // Fade out "Scroll to explore"
  const scrollToExploreOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.img
        src="/para/sky.png"
        alt="Sky background"
        className="fixed top-0 left-0 w-full h-full object-cover z-[0] will-change-transform"
      />
      <motion.img
        src="/para/sun.png"
        alt="Sun"
        className="fixed top-40 left-1/2 -translate-x-1/2 w-64 h-64 object-contain z-[0] will-change-transform"
        style={{ y: sunY, rotate: sunRotate }}
      />
      <motion.img
        src="/para/mountain1.png"
        alt="Mountains"
        className="fixed bottom-10 md:bottom-0 right-60 w-full h-auto object-cover z-[2] will-change-transform"
        style={{ y: mountain1Y, x: mountain1X }}
      />
      <motion.img
        src="/para/mountain2.png"
        alt="Mountains"
        className="fixed bottom-10 md:bottom-0 left-60 w-full h-auto object-cover z-[3] will-change-transform"
        style={{ y: mountain2Y, x: mountain2X }}
      />
      <motion.img
        src="/para/trees1.png"
        alt="Trees"
        className="fixed bottom-0 left-0 w-full h-auto object-cover z-[4] will-change-transform"
        style={{ y: trees1Y, x: trees1X }}
      />
      <motion.img
        src="/para/trees2.png"
        alt="Trees"
        className="fixed bottom-0 left-0 w-full h-auto object-cover z-[5] will-change-transform"
        style={{ y: trees2Y, x: trees2X }}
      />

      {/* Scroll to explore */}
      <motion.div
        className="w-full absolute bottom-0 flex flex-col items-center justify-center text-white/80 z-50 p-24"
        style={{ opacity: scrollToExploreOpacity }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full flex justify-center items-center h-full pb-40"
      >
        <h1
          className=" text-6xl md:text-8xl drop-shadow-2xl px-4 mb-6 text-balance 
               bg-gradient-to-r from-white via-orange-400 to-purple-600 
               bg-clip-text text-transparent text-center"
        >
          Solutions for You
        </h1>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
