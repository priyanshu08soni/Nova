import React from "react";
import ContactDesktop from "../components/ContactDesktop"
import ContactMobile from "../components/ContactMobile"
const Contact = () => {
  return (
    <>
    <div className="md:hidden">
      <ContactMobile/>
    </div>
    <div className="hidden md:flex">
      <ContactDesktop/>
    </div>
    </>
  );
};

export default Contact;
