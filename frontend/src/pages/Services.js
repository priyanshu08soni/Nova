import React from "react";
import ServiceFish from "../components/ServiceFish";


const services = [
  {
    title: "Video Editing",
    description: "Bring your stories to life with cinematic editing and smooth transitions.",
    icon: "🎬",
  },
  {
    title: "Web Development",
    description: "Build modern, responsive, and high-performing websites with impact.",
    icon: "💻",
  },
  {
    title: "Graphic Design",
    description: "Craft unique logos, social media creatives, and branding assets.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Amplify your reach with campaigns, social media strategy, and ads.",
    icon: "📈",
  },
  {
    title: "Ads & Promos",
    description: "Create scroll-stopping ad campaigns and product promos that convert.",
    icon: "🎥",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Key Services
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceFish
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
