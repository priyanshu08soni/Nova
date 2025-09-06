import React from "react";
import ServicesCard from "../Services/ServicesCard";
import { motion } from "framer-motion";

const ServicesContent = () => {
  return (
    <div className="relative z-0 flex flex-col items-center justify-center text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl"
      >
        <h1
          className="text-6xl md:text-8xl drop-shadow-2xl px-4 mb-6 text-balance 
           bg-gradient-to-r from-white via-orange-400 to-purple-600 
           bg-clip-text text-transparent"
        >
          Our Services
        </h1>
        <p className="text-md md:text-2xl px-4 text-white">
          We craft digital experiences that inspire, engage, and deliver
          exceptional results for your brand
        </p>
      </motion.div>

      <ServicesCard />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1
          className="text-4xl md:text-7xl px-4 drop-shadow-2xl mb-6 mt-40 text-balance
           bg-gradient-to-r from-orange-500 via-orange-400 to-purple-600 
           bg-clip-text text-transparent"
        >
          Where Creativity Meets Strategy
        </h1>

        <h1
          className="text-4xl md:text-7xl px-4 drop-shadow-2xl mt-6 mb-16 text-balance
           bg-gradient-to-r from-orange-500 via-orange-400 to-purple-600 
           bg-clip-text text-transparent"
        >
          Design . Inspire . Deliver
        </h1>
      </motion.div>
    </div>
  );
};

export default ServicesContent;
