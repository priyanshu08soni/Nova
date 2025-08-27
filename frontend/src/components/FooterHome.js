import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
const FooterHome = () => {
  return (
    <footer className="pb-10 px-10 w-full absolute bottom-0">
      <div className="max-w-full px-4 py-12 sm:px-6 lg:px-8  backdrop-blur-sm rounded-2xl border border-teal-100/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="logo">Nova</span>
            </div>
            <p className="text-white text-sm">Digital Creative Agency</p>
          </div>

          <div>
            <h3 className=" text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <a href="/" className="navigation-links">
                  Home
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <a href="/about" className="navigation-links">
                  About
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <a href="/services" className="navigation-links">
                  Services
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <a href="/contact" className="navigation-links">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 navigation-links">
                <Mail className="h-4 w-4" />
                <span>priyanshus20k4@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 navigation-links">
                <Phone className="h-4 w-4" />
                <span>+91 8000643228</span>
              </li>
              <li className="flex items-center gap-2 navigation-links">
                <Github className="h-4 w-4" />
                <a href="https://github.com/priyanshu08soni/">
                  priyanshu08soni
                </a>
              </li>
              <li className="flex items-center gap-2 navigation-links">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/in/priyanshu-soni-180219257">
                  priyanshu-soni-180219257
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-white text-sm flex items-center justify-center">
            Made by Priyanshu Soni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
