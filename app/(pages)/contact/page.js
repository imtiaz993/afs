import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import ContactOption from "./components/ContactOption";
import Support from "./components/Support";
import Complaints from "./components/Complaints";
import EscalationChannels from "./components/EscalationChannels";
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
      <Support />
      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24 lg:pt-12 lg:flex justify-between">
        <Complaints />
        <EscalationChannels />
      </div>
      <Offices />
    </>
  );
};

export default Contact;
