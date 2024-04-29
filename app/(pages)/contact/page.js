import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import ContactOption from "./components/ContactOption";
import Offices from "./components/Offices";

const Contact = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Contact us"}
        subtext={"How can we help?"}
        description={
          "Whether you have a question, feedback, or concern, we are here to provide the support you need."
        }
      />
      <ContactOption />
      <Offices />
    </>
  );
};

export default Contact;
