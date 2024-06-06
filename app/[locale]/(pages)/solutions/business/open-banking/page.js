import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import Faq from "app/common/Faq";
import { faqContentData } from "./faqContentData";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const OpenBanking = () => {
  const benefitsData = [
    {
      title: "Enhanced payment flows",
      description:
        "Enable direct bank-to-bank transactions that bypass traditional payment methods, reducing costs and simplifying processes.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
    },
    {
      title: "Personalized financial services",
      description:
        "As a fintech or third-party provider (TPP), gain secure access to customer bank account information to offer tailored financial services.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "For merchants and acquirers, reduce transaction fees significantly by accepting payments directly from bank accounts.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational.svg",
    },
    {
      title: "Secure and compliant",
      description:
        "Our solutions are designed with advanced security measures to protect customer data and reduce the risk of fraud, ensuring compliance with regulatory requirements.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security.svg",
    },
  ];

  const featuresData = [
    {
      title: "Secure data access",
      description:
        "Our APIs provide a safe conduit for businesses to access essential financial data from customers' bank accounts, enabling a wealth of innovative services and enhancing data-driven decision-making.",
      image:
        "/assets/images/solutions/business/open-banking/secure-data-access.png",
    },
    {
      title: "Direct payments",
      description:
        "Facilitate direct payments using real-time payment rails, which are not only faster but also more efficient than traditional methods.",
      secondaryDescription:
        "This ensures that transactions are smooth and immediate, enhancing customer satisfaction.",
      image:
        "/assets/images/solutions/business/open-banking/direct-payments.png",
    },
    {
      title: "Customizable financial insights",
      description:
        "Utilize the financial data accessed through Open Banking to gain valuable insights into your customers’ financial behaviors.",
      secondaryDescription:
        "Tailor your services to better fit their needs and preferences, enabling a more customized approach to service delivery.",
      image: "/assets/images/solutions/business/open-banking/customizable.png",
    },
    {
      title: "Versatile payment options",
      description:
        "Create and offer versatile payment options that make use of direct bank account access. This not only simplifies the payment process by eliminating the need for card details and extensive data entry but also enhances the overall user experience.",
      image:
        "/assets/images/solutions/business/open-banking/versatile-payment.png",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Open banking - for businesses"}
        subtext={"Set yourself apart, with new payment flows"}
        description={
          "Unlock the potential of financial innovation with our simple, integrated Open Banking APIs. Drive new payment flows and enhance your business model."
        }
        image={
          "/assets/images/solutions/business/open-banking/open-banking.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Leverage the power of Open Banking to set your business apart and provide superior value to your customers. Here’s how our Open Banking solutions can elevate your operations."
        }
        data={benefitsData}
      />
      <Features
        data={featuresData}
        commonCTAData={{
          bgColor: "bg-surface-neutral",
          primaryContent:
            "Interested in our Open Banking solution for businesses?",
          secondaryContent:
            "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
          primaryButtonLabel: "Contact our team",
          primaryButtonLink: "/contact-team",
        }}
      />
      <Faq
        title={
          "Find answers to some key questions about our Open Banking solution"
        }
        accordionOptions={faqContentData}
      />
      <PageLayout>
        <CommonCTA
          primaryContent={"Ready to revolutionize your payment services?"}
          primaryContentTextTarget={{
            text: ["revolutionize"],
            color: "text-brand-secondary",
          }}
          secondaryContent={
            "Embrace the future of payments with our Open Banking solutions."
          }
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact-team"}
        />
      </PageLayout>
    </>
  );
};

export default OpenBanking;
