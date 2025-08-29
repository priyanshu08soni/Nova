import React from "react";
import vid1 from "../assets/video/NovaContact.mp4";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex bg-black">
      <div className="left w-[20%]">
        <div className="h-screen flex flex-col justify-between">
          <div className="uphead  md:-rotate-90 text-white absolute top-32 left-10 md:-left-10">
            <h1 className="text-8xl font-semibold">Nova</h1>
            <p className="text-xl">Creative Art Agency</p>
          </div>
          <div className="lowhead absolute bottom-0 text-white">
            <div className="p-10">
              <div className="reachout my-10">
                <div className="my-6">
                  <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                  <p className="w-[200px] text-sm">By reaching out to connect with us. you're taking the first step toward unlocking the full potential of your creative presence.</p>
                </div>
                <ul className="space-y-2 flex gap-10 items-center">
                  <li className="flex items-center navigation-links mt-2">
                    <a href="mailto:priyanshus20k4@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="flex items-center navigation-links">
                    <a href="tel:+918000643228">
                      <Phone className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="flex items-center navigation-links">
                    <a href="https://github.com/priyanshu08soni/">
                      <Github className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="flex items-center navigation-links">
                    <a href="https://www.linkedin.com/in/priyanshu-soni-180219257">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
              <button className="flex gap-20 border border-teal-50/20 bg-gray-500/20 px-4 py-2 rounded-xl mt-2 hover:bg-gray-900/20">
                <a href="/">
                  <div className="absolute left-40">Go Back</div>
                  <div className="flex justify-end w-60 md:w-80">
                    <ArrowRight />
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[80%] justify-center items-center hidden md:flex">
        <video src={vid1} alt="video" autoPlay muted />
      </div>
    </div>
  );
};

export default Contact;
