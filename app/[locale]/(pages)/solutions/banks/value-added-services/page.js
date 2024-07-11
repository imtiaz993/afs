import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import CommonServices from "../../../../../common/CommonServices";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSlider from "app/common/TestimonialSlider";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const ValueAddedServices = () => {
  const benefitsData = [
    {
      title: "Enhanced customer experience",
      description:
        "Providing a seamless and personalized journey  to meet individual preferences and boost customer loyalty.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/improved-trust.svg",
    },
    {
      title: "Operational agility",
      description:
        "Streamlining payment processes with efficient quick adaptation to market changes and consumer needs.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational-agility.svg",
    },
    {
      title: "Data-driven insights",
      description:
        "Utilizing advanced analytics and real-time data for actionable insights, supporting informed decisions and strategic planning.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/data-driven-insights.svg",
    },
    {
      title: "Secure and convenient payments",
      description:
        "Streamlining secure, tokenized mobile payments to boost trust and comply with modern standards.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security3.svg",
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

  const servicesData = [
    {
      title: "API services",
      description:
        "Enable seamless integration and automation of banking services, enhancing the user experience with our robust API suite.",
      image:
        "/assets/images/solutions/banks/value-added-services/api-services2.png",
    },
    {
      title: "Loyality solutions",
      description:
        "Boost customer engagement and retention with our tailored loyalty solutions designed to foster card loyalty and drive repeat business.",
      image:
        "/assets/images/solutions/banks/value-added-services/loyality-solutions2.png",
    },
    {
      title: "Installment processing services",
      description:
        "Simplify large purchases for your customers with our flexible installment payment options.",
      image:
        "/assets/images/solutions/banks/value-added-services/installment-processing2.png",
    },
    {
      title: "Data analytics & real-time streaming",
      description:
        "Leverage our advanced capabilities to gain instant insights, optimize operations, and secure a competitive advantage.",
      image:
        "/assets/images/solutions/banks/value-added-services/data-analytics2.png",
    },
    {
      title: "Tokenization solutions",
      description:
        "Enhance payment security and convenience by offering tokenized  payments, including Apple Pay, Samsung Pay, and Google Pay.",
      image:
        "/assets/images/solutions/banks/value-added-services/tokenization-solutions2.png",
    },
    {
      title: "Instant card issuance",
      description:
        "Our efficient services enable on-the-spot card issuance, providing convenience and security for your customers",
      image:
        "/assets/images/solutions/banks/value-added-services/instant-card-issuance2.png",
    },
    {
      title: "SMS Gateway",
      description:
        "Enhance customer engagement by seamlessly integrating instant SMS notifications and alerts into your payment flows.",
      image:
        "/assets/images/solutions/banks/value-added-services/sms-gateway2.png",
    },
    {
      title: "Interactive e-statement",
      description:
        "Engage customers with interactive electronic statements that offer detailed insights into their transactions and financial health.",
      image:
        "/assets/images/solutions/banks/value-added-services/interactive-statement2.png",
    },
  ];

  const servicesCTAData = {
    primaryContent: "Interested in our value added services?",
    secondaryContent:
      "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
    primaryButtonLabel: "Contact our team",
    primaryButtonLink: "/contact-team",
    lessPaddingVariant: true,
    bgColor: "bg-surface-neutral",
  };

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Value added services"}
        subtext={"Expand your capabilities with our value-added services"}
        description={
          "Enhance your offerings with our suite of value-added services, elevate your customer experience and operational efficiency in one go."
        }
        image={
          "/assets/images/solutions/banks/value-added-services/value-added-services.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Accessing this comprehensive range of value-added services empowers your business to deliver an unparalleled customer experience, offering convenience, security, and personalized engagement at every touchpoint."
        }
        data={benefitsData}
      />
      <CommonServices
        navTitle={"Services"}
        servicesData={servicesData}
        ctaData={servicesCTAData}
      />
      <UsedTrustedBy category="bank" />
      {/* <TestimonialSlider bgColor={"bg-white"} /> */}
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

export default ValueAddedServices;
