import React from "react";
import Navbar from "../../Common/Navbar";
import HeroWithImage from "../../Common/CommonHero";
import OurPartners from "../../Common/Partners";
import WhyPartner from "./Components/WhyPartner";
import BecomePartnerForm from "./Components/BecomePartnerForm";
import Faq from "./Components/Faq";

const Partners = () => {
  return (
    <>
      <Navbar />
      <HeroWithImage
        title={"Our partners"}
        subtext={"Start your partnership journey with AFS."}
        description={
          "Seize new prospects and expand collectively by joining our collaborative ecosystem of pioneers and leading figures in the industry."
        }
        image={"/assets/images/partners/hero.png"}
        buttonText={"Become a partner"}
        buttonNavigateLink={"/partners"}
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
