"use client";
import Navbar from "../components/Layout/Navbar";
import ServicesContent from "../components/Services/ServicesContent";

import ServicesHero from "../components/Services/ServicesHero";

const Services = () => {

  
  return (
    <div className="relative h-[270vh]">
      <Navbar />

      <ServicesHero/>
      <ServicesContent/>
      
    </div>
  );
};

export default Services;
