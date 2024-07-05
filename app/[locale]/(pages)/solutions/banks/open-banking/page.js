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
      title: "Increased innovation",
      description:
        "Collaborate with fintech companies to develop groundbreaking products and services.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/increased-innovation.svg",
    },
    {
      title: "Enhanced customer experience",
      description:
        "Deliver personalized services and streamline processes to provide a seamless banking experience.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/improved-trust.svg",
    },
    {
      title: "Regulatory compliance",
      description:
        "Navigate the complexities of financial regulations with confidence while meeting all regulatory requirements efficiently.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/regulatory-compliance.svg",
    },
    {
      title: "Empowered decision-making",
      description:
        "Leverage detailed insights from a broader range of financial data to make more informed decisions.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/empowered-decision-making.svg",
    },
  ];

  const featuresData = [
    {
      title: "Secure data sharing",
      description:
        "Our Open Banking APIs provide a secure framework for sharing financial data with third-party providers (TPPs), with robust encryption and authentication protocols to protect sensitive information.",
      image:
        "/assets/images/solutions/banks/open-banking/secure-data-sharing.png",
    },
    {
      title: "Customer consent",
      description:
        "At the core of Open Banking is the principle of customer consent. Customers have complete control over their data, choosing what to share and with whom, ensuring transparency and trust in the services provided.",
      image: "/assets/images/solutions/banks/open-banking/customer-consent.png",
    },
    {
      title: "Enhanced Services",
      description:
        "With the integration of third-party data, banks can enhance their existing services or develop new ones that offer more personalized and efficient customer experiences. This includes everything from improved financial advice to faster loan processing.",
      image:
        "/assets/images/solutions/banks/open-banking/enhanced-services2.png",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our digital and open banking solution?",
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
        title={"Open banking - for banks"}
        subtext={"Ensure full compliance and accelerate innovation"}
        description={
          "Unlock the potential of financial data sharing with secure, compliant Open Banking APIs that accelerate innovation and enhance customer experiences."
        }
        image={"/assets/images/solutions/banks/open-banking/open-banking.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Discover the strategic advantages of integrating Open Banking into your operations. Our platform not only ensures compliance with the latest financial regulations but also propels your service capabilities to new heights."
        }
        data={benefitsData}
      />
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <Faq
        title={
          "Find answers to some key questions about our Open Banking solution"
        }
        email={"openbanking@afs.com.bh"}
        accordionOptions={faqContentData}
      />
      <PageLayout>
        <CommonCTA
          primaryContent={"Ready to revolutionize your financial transactions?"}
          primaryContentTextTarget={{
            text: ["revolutionize"],
            color: "text-brand-secondary",
          }}
          secondaryContent={
            "Embrace the future of banking with our Open Banking solutions."
          }
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact-team"}
        />
      </PageLayout>
    </>
  );
};

export default OpenBanking;
