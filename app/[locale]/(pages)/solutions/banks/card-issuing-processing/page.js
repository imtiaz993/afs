import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";

const CardIssuingProcessing = () => {
  const benefitsData = [
    {
      title: "Versatility and customization",
      description:
        "Meet the diverse needs of your customer base with a broad spectrum of card options",
    },
    {
      title: "Operational efficiency",
      description:
        "Our streamlined processes and advanced technology significantly reduce the complexity and time.",
    },
    {
      title: "Security and compliance",
      description:
        "Benefit from a platform that prioritizes security and adherence to financial regulations.",
    },
    {
      title: "Market expansion opportunities",
      description:
        "With the ability to offer a variety of card types and customized solutions, your bank can attract a wider customer base.",
    },
  ];
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Card issuing & processing"}
        subtext={"Enhance efficiency with streamlined card management"}
        description={
          "Our service revolutionizes bank card operations by enhancing efficiency and streamlining processes. We offer a comprehensive solution that simplifies card issuance and processing, making complex tasks more manageable."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "Our all-encompassing solution transforms the way banks issue and manage cards, catering to a wide range of needs with credit, debit, and prepaid card services for both consumers and businesses."
        }
        data={benefitsData}
      />
      <Features />
    </>
  );
};

export default CardIssuingProcessing;
