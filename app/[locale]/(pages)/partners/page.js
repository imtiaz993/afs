"use client"

import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import OurPartners from "app/common/Partners";
import WhyPartner from "./components/WhyPartner";
import BecomePartnerForm from "./components/BecomePartnerForm";
import Faq from "app/common/Faq";

const Partners = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Our partners"}
        subtext={"Start your partnership journey with AFS."}
        description={
          "Seize new prospects and expand collectively by joining our collaborative ecosystem of pioneers and leading figures in the industry."
        }
        image={"/assets/images/partners/hero.png"}
        buttonText={"Become a partner"}
        onClick={() => {
          const section = document.querySelector("#partners-form");
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <OurPartners
        bg={true}
        title={"Our trusted partners"}
        subtext={"Partner with top figures in the industry."}
      />
      <WhyPartner />
      <BecomePartnerForm />
      <Faq />
    </>
  );
};

export default Partners;
