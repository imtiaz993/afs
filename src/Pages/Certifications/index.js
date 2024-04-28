import React from "react";
import Navbar from "../../Common/Navbar";
import CommonHero from "../../Common/CommonHero";
import Certificates from "./Components/Certificates";
import Story from "../../Common/Story";

const Certifications = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Our certifications"}
        subtext={"Building trust through our certified excellence"}
        description={
          "Discover the rigorously earned certifications that underline our dedication to providing secure, reliable, and high-quality financial solutions."
        }
      />
      <Certificates />
      <Story bg={true} />
    </>
  );
};

export default Certifications;
