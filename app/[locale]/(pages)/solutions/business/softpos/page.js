import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const SoftPOS = () => {
  const benefitsData = [
    {
      title: "No new hardware",
      description:
        "Use your existing Android devices without the need for additional hardware or complex configurations.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
    },
    {
      title: "Secure transactions",
      description:
        "Our solution is built with 3D secure technology, ensuring every transaction is protected against fraud.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/protection.svg",
    },
    {
      title: "Flexibility and mobility",
      description:
        "Conduct transactions on the go. Ideal for businesses that require mobility without compromising on functionality.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
    {
      title: "Enhanced customer experience",
      description:
        "With AFS Pay, enhance your customer interactions by offering a seamless and swift checkout process.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security.svg",
    },
  ];

  const featuresData = [
    {
      title: "Convenient and mobile",
      description:
        "Accept payments anywhere, any time with a secure and convenient means of payment for customers.",
      image: "/assets/images/solutions/business/soft-pos/convineant.png",
    },
    {
      title: "Broad payments acceptance",
      description:
        "Accept multiple local and international payment methods, from contactless credit and debit cards, Samsung Pay, Apple Pay, Google Pay, and Smart Link payments via email, SMS.",
      image:
        "/assets/images/solutions/business/soft-pos/broad-payment-acceptance.png",
    },
    {
      title: "Electronic receipts",
      description:
        "Opt out of paper receipts and enjoy the convenience of electronic receipts (eReceipts). Share eReceipts with customers via SMS and email. Give customers the convenience of a faster, paperless shopping experience.",
      image:
        "/assets/images/solutions/business/soft-pos/electronic-payment-receipt.png",
    },
    {
      title: "Comprehensive merchant portal",
      description:
        "Our advanced merchant portal helps you review transaction reports, see detailed transaction history and review transactions made on each device. With AFS Pay you can also raise a ticket for queries and do much more.",
      image:
        "/assets/images/solutions/business/soft-pos/comprehensive-merchant-portal.png",
    },
    {
      title: "Easy download and setup",
      description:
        "Get started in no time! Simply download the AFS Pay softPOS app from the Google Play Store, set up your account, and you’re good to go.",
      image: "/assets/images/solutions/business/soft-pos/easy-download.png",
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

  return (
    <>
      <Navbar />
      <CommonHero
        title={"SoftPOS"}
        subtext={
          "Transform your Android device into a smart point-of-sale terminal"
        }
        description={
          "Whether it is in-store purchases, home delivery or on the go, our AFS Pay Android application is your dedicated softPOS solution that ensures you are ready to accept digital payments for every customer scenario."
        }
        image={"/assets/images/solutions/business/soft-pos/soft-pos.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "AFS Pay app effortlessly turns any Android mobile phone or tablet into a sophisticated payment terminal, enabling your business to handle transactions in a variety of modern ways."
        }
        data={benefitsData}
      />
      <Features
        data={featuresData}
        commonCTAData={{
          bgColor: "bg-surface-neutral",
          primaryContent:
            "Want to learn more about AFS Pay, our softPOS solution?",
          primaryButtonLabel: "Contact our team",
          primaryButtonLink: "/contact-team",
        }}
      />
    </>
  );
};

export default SoftPOS;
