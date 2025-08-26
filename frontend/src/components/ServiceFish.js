import React from "react";

const ServiceFish = ({ title, description, icon }) => {
  return (
    <div className="relative w-80 h-40 flex items-center justify-center text-center">
      <svg
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M20 100 C50 40, 150 40, 200 100 C150 160, 50 160, 20 100 Z 
             M200 100 C250 40, 350 40, 380 100 C350 160, 250 160, 200 100 Z"
          fill="url(#grad)"
          stroke="black"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgb(110,97,255)" }} />
            <stop offset="50%" style={{ stopColor: "rgb(160,97,255)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(97,200,255)" }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 px-4">
        <div className="text-2xl font-bold mb-2 flex justify-center">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceFish;
