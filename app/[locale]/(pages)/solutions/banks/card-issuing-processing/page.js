import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSlider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import CommonCTA from "app/common/CommonCTA";
import PageLayout from "app/common/PageLayout";

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

  const featuresData = [
    {
      title: "Card processing solutions",
      description:
        "Make use of our versatile card solutions, for all requirements, ensuring convenience and security in every payment, from credit, debit, prepaid, virtual, tokenized cards, Shariah compliant and more we have them all.",
    },
    {
      title: "Operational support services",
      description:
        "We deliver essential operational support for your business. Our services streamline processes and optimize performance while ensuring continuous customer assistance with digital onboarding, ATM & POS driving, back-office support, and 24/7 contact center.",
    },
    {
      title: "Sharia compliant solutions",
      description:
        "Understanding the importance of adherence to Islamic banking principles, our Shariah-compliant solutions are meticulously designed to ensure that all financial transactions and products meet the strict standards of Islamic regulation.",
    },
    {
      title: "Card personalization",
      description:
        "Set your financial products apart with our card personalization feature. From custom designs to enhanced security options like EMV chips and contactless technology, we empower your bank to offer personalized cards that resonate with your customers' preferences and needs. ",
    },
    {
      title: "Instant issuance",
      description:
        "Meet customer expectations with our instant card issuance services, enabling immediate transaction capability and providing instant access to payment cards. Our efficient process offers on-the-spot card issuance, ensuring convenience and security for your customers.",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our card issuing and processing solutions?",
    secondaryContent:
      "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
    primaryButtonLabel: "Contact our team",
    primaryButtonLink: "/contact-team",
    bgColor: "bg-surface-neutral",
  };
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Card issuing & processing"}
        subtext={"Enhance efficiency with streamlined card management"}
        description={
          "Our service revolutionizes bank card operations by enhancing efficiency and streamlining processes. We offer a comprehensive solution that simplifies card issuance and processing, making complex tasks more manageable."
        }
        image={
          "/assets/images/solutions/banks/card-issuing-processing/card-issuing-processing.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Our all-encompassing solution transforms the way banks issue and manage cards, catering to a wide range of needs with credit, debit, and prepaid card services for both consumers and businesses."
        }
        data={benefitsData}
      />
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <UsedTrustedBy />
      <TestimonialSlider bgColor={"bg-white"} />
      <PageLayout>
        <CommonCTA
          primaryContent={"Ready to revolutionize your financial transactions?"}
          primaryContentTextTarget={{
            text: ["revolutionize"],
            color: "text-brand-secondary",
          }}
          secondaryContent={"Experience the power of AFS today!"}
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact-team"}
        />
      </PageLayout>
    </>
  );
};

export default CardIssuingProcessing;
