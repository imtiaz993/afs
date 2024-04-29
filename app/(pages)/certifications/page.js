import React from "react";
import Navbar from "../../common/Navbar";
import CommonHero from "../../common/CommonHero";
import Certificates from "./components/Certificates";
import Story from "../../common/Story";

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
