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
      title: "Credit and debit cards",
      description:
        "Tailored to promote financial freedom and ease of use, our cards are designed to integrate seamlessly with your bank's existing services, offering a reliable and secure way to access funds, make purchases, and manage finances efficiently.",
    },
    {
      title: "Prepaid cards",
      description:
        "With easy loading options and controlled spending, customers can enjoy the benefits of cashless transactions without the risk of debt. Our prepaid solutions cater to a wide range of uses, from gift cards to travel budgets, ensuring versatility and user satisfaction.",
    },
    {
      title: "Sharia compliant solutions",
      description:
        "Understanding the importance of adherence to Islamic banking principles, our Sharia-compliant solutions are meticulously designed to ensure that all financial transactions and products meet the strict standards of Islamic law.",
    },
    {
      title: "Card personalization",
      description:
        "Set your financial products apart with our card personalization feature. From custom designs to enhanced security options like EMV chips and contactless technology, we empower your bank to offer personalized cards that resonate with your customers' preferences and needs. ",
    },
    {
      title: "Instant issuance",
      description:
        "Meet customer expectations for immediacy with instant card issuance, enabling them to start transacting right away.",
    },
  ];

  const accordionOptions = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text  printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Will I receive feedback on my application and what form will it take?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum is simply text  printing and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Lorem Ipsum and typesetting industry?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our card and processing solutions?",
    secondaryContent:
      "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
    primaryButtonLabel: "Contact our team",
    primaryButtonLink: "/contact",
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
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <UsedTrustedBy />
      <TestimonialSlider />
      <Faq
        title={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        accordionOptions={accordionOptions}
      />
      <PageLayout>
        <CommonCTA
          primaryContent={"Ready to revolutionize your financial transactions?"}
          primaryContentTextTarget={{
            text: ["revolutionize"],
            color: "text-brand-secondary",
          }}
          secondaryContent={"Experience the power of AFS today!"}
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact"}
        />
      </PageLayout>
    </>
  );
};

export default CardIssuingProcessing;
