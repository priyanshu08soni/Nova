import React from "react";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import WaterWave from "react-water-wave";

import heroImg from "../assets/foot.jpg";
import { Link } from "react-router-dom";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshus20k4@gmail.com",
    href: "mailto:priyanshus20k4@gmail.com",
    color: "text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/priyanshu08soni",
    href: "https://github.com/priyanshu08soni/",
    color: "text-red-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshu-soni-180219257",
    href: "https://www.linkedin.com/in/priyanshu-soni-180219257/",
    color: "text-red-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.app.goo.gl/qJkXwjmwW8yG1KUZ6",
    color: "text-red-400",
  },
];
const Contact = () => {
  return (
    <div className="relative">
      <WaterWave
        imageUrl={heroImg}
        style={{
          height:"100vh",
          width:"100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        options={{
          perturbance: 0.01,
          dropRadius: 10,
          resolution: 512,
          interactive: true,
          crossOrigin: "",
        }}
      >
        {() => (
          <div className="h-screen flex backdrop-blur-sm border border-teal-50/20 rounded-2xl">
            <div className="left w-[20%] relative">
              <div className="flex flex-col justify-between">
                <div className="uphead md:-rotate-90 text-white absolute top-52 left-10 md:-left-10">
                  <h1 className="contact-head text-8xl font-semibold">Nova</h1>
                  <p className="text-xl">Creative Art Agency</p>
                </div>
                
              </div>
            </div>
            <div className="right w-[80%] flex items-center md:justify-center flex-wrap">
              <div className={`space-y-8 transition-all duration-1000 delay-600`}>
                <Card className="bg-gray-300/20 border-teal-50/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <Link
                          key={info.label}
                          href={info.href}
                          className="flex items-center p-4 rounded-xl bg-gray-500/40 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group"
                        >
                          <div
                            className={`p-3 rounded-full bg-gray-200/20 mr-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className={`w-5 h-5 ${info.color}`} />
                          </div>
                          <div>
                            <div className="text-white text-sm">
                              {info.label}
                            </div>
                            <div className="text-white font-medium group-hover:text-red-300 transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
              <div className="lowhead text-white">
                  <div className="p-10">
                    <div className="reachout my-10">
                      <div className="my-6">
                        <h3 className="text-white font-semibold mb-6">
                          Contact Us
                        </h3>
                        <p className="w-[200px] text-sm">
                          By reaching out to connect with us, you're taking the
                          first step toward unlocking the full potential of your
                          creative presence.
                        </p>
                      </div>
                    </div>
                    <button className="flex gap-20 border border-teal-50/20 bg-gray-500/20 px-4 py-2 rounded-xl mt-2 hover:bg-gray-900/20">
                      <a href="/" className="flex gap-20">
                        <p>Go Back</p>
                        <ArrowRight />
                      </a>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Contact;
