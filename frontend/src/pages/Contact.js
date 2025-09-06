import React from "react";
import ContactDesktop from "../components/Contact.js/ContactDesktop"
import ContactMobile from "../components/Contact.js/ContactMobile"
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
