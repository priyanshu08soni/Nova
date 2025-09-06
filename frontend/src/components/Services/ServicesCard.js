"use client";
import React from "react";

const services = [
  {
    title: "Video Editing",
    description:
      "Transform raw footage into cinematic masterpieces with professional editing, color grading, and seamless transitions that captivate your audience.",
    icon: "🎬",
    bgImage: "/services/video1.png",
    bgColor: "bg-gradient-to-br from-orange-200 to-pink-200",
    textColor: "text-gray-800", // 5. Adjusted text color for better readability
  },
  {
    title: "Web Development",
    description:
      "Build lightning-fast, responsive websites and web applications using cutting-edge technologies that deliver exceptional user experiences.",
    icon: "💻",
    bgImage: "/services/video2.png",
    bgColor: "bg-gradient-to-br from-purple-200 to-pink-200",
    textColor: "text-gray-800",
  },
  {
    title: "Graphic Design",
    description:
      "Create stunning visual identities, logos, and brand assets that make lasting impressions and communicate your message effectively.",
    icon: "🎨",
    bgImage: "/services/video3.png",
    bgColor: "bg-gradient-to-br from-yellow-200 to-orange-200",
    textColor: "text-gray-800",
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your brand's reach with data-driven marketing strategies, social media campaigns, and targeted advertising that converts.",
    icon: "📈",
    bgImage: "/services/video4.png",
    bgColor: "bg-gradient-to-br from-pink-200 to-purple-200",
    textColor: "text-gray-800",
  },
  {
    title: "Ads & Promos",
    description:
      "Craft compelling promotional content and advertising campaigns that stop the scroll and drive meaningful engagement with your brand.",
    icon: "🎥",
    bgImage: "/services/video5.png",
    bgColor: "bg-gradient-to-br from-orange-200 to-yellow-200",
    textColor: "text-gray-800",
  },
];


const ServicesCard = () => {
  return (
    <section className="relative w-full my-16">
      <div className="flex flex-wrap justify-center gap-5 px-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`snap-center flex-shrink-0 flex flex-col md:flex-row items-center backdrop-blur-sm border border-gray-500/20 rounded-xl p-5 ${service.bgColor} w-[90vw] max-w-[450px]`}
          >
            <div className="left md:mr-4 flex-shrink-0 ">
              {/* This is the corrected part for CRA */}

              <img
                src={service.bgImage} // This works directly in CRA
                alt={service.title}
                className="rounded-xl w-80 h-32 md:w-40 md:h-40 object-cover"
                loading="lazy" // 1. Add lazy loading
              />
            </div>
            <div className="right">
              <div className="heading-services flex justify-center ">
                <span>{service.icon}</span>
                <h2 className={`font-bold text-lg mb-2 ${service.textColor}`}>
                  {service.title}
                </h2>
              </div>
              <p className={`text-sm ${service.textColor}`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;