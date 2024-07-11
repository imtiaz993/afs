import React from "react";
import Navbar from "app/common/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Story from "app/common/Story";

const Certifications = () => {
  const storyContent = {
    primaryContent: [
      "At AFS we empower the region’s business and banking communities, end-users and consumers with customized payments technologies and solutions.",
    ],
    secondaryContent: [
      "Regulated by the Central Bank of Bahrain and the Central Bank of Egypt, AFS is owned by a total of 37 banks and financial institutions and serves over 60 bank clients in more than 20 countries across the Middle East and Africa region.",
      "The company provides numerous ground-breaking end-to-end digital payment products, services and solutions to banks and businesses. These include card processing services, merchant acquiring, fintech solutions and value-added services.",
    ],
    tertiaryContent: [
      "Our dedication to payments innovation and delivering cutting-edge payments technology has propelled AFS to become a market leader.",
      "We are committed to being the leading enabler for digital transaction transformation and we offer unique, future-driven payments experiences.",
      "We fast-track payments innovation and make superior digital payments experiences a more accessible, secure, convenient, and seamless reality, regionally.",
    ],
  };
  return (
    <>
      <Navbar />
      <Hero
        title={"Our certifications"}
        subtext={"Building trust through our certified excellence"}
        description={
          "Discover the rigorously earned certifications that underline our dedication to providing secure, reliable, and high-quality financial solutions."
        }
      />
      <Certificates />
      <Story bg={true} content={storyContent} />
    </>
  );
};

export default Certifications;
