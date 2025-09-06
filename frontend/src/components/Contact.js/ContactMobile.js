import React from "react";

import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import WaterWave from "react-water-wave";

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
        imageUrl="/auth/foot.png"
        style={{
          height: "100vh",
          width: "100vw",
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
          <div className="flex flex-col backdrop-blur-sm rounded-2xl">
            <div className="contact-main w-full flex justify-center flex-col items-center">
              <h1 className="contact-head text-8xl font-semibold">Nova</h1>
              <p className="text-xl">Creative Art Agency</p>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
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
                          <div className="text-white text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-red-300 transition-colors break-all max-w-[280px] sm:max-w-[320px]">
                            {info.value}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </CardContent>
              </Card>
              <div className="ms-6 text-white font-semibold">
                <button className="flex gap-20 border border-teal-50/20 bg-gray-500/60 px-4 py-2 rounded-xl mt-2 hover:bg-gray-900/20">
                  <a href="/" className="flex gap-20">
                    <p>Go Back</p>
                    <ArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Contact;
