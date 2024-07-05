import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const FraudRiskManagement = () => {
  const benefitsData = [
    {
      title: "Enhanced security",
      description:
        "Provides robust protection ensuring that transactions are secure and customer data is safeguarded against fraud.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security3.svg",
    },
    {
      title: "Improved trust",
      description:
        "Maintain customer confidence by demonstrating a commitment to security and the integrity of financial transactions.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/improved-trust.svg",
    },
    {
      title: "Operational efficiency",
      description:
        "Automates and optimizes the detection and management of fraudulent activities, reducing the need for manual intervention.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational3.svg",
    },
    {
      title: "Strategic risk insights",
      description:
        "Offers valuable analytics and insights into fraud trends and risk patterns, enabling strategic risk mitigation approaches.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/strategic-risk.svg",
    },
  ];

  const featuresData = [
    {
      title: "On-behalf fraud management",
      description:
        "We offer bespoke fraud & risk management services that harness advanced and cutting-edge technology to protect your financial transactions. Our services are designed to detect and prevent fraudulent activities accurately and efficiently. We equip your operations with the latest fraud monitoring and analysis tools, ensuring robust defense against emerging threats and safeguarding your business assets.",
      image:
        "/assets/images/solutions/banks/fraud-risk-management/fraud-risk-management2.png",
    },
    {
      title: "Authentication services",
      description:
        "AFS Key Authentication Services employ proprietary advanced security measures and tools to provide complete protection against fraudulent activities. Our services prioritize both security and user experience by embedding vital security layers to verify user identities and ensure secure access to sensitive data and systems. Safeguard your assets and data, ensuring your business operations are secure and trustworthy.",
      image:
        "/assets/images/solutions/banks/fraud-risk-management/authentication-services2.png",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our fraud and risk management solutions?",
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
        title={"Fraud & risk management"}
        subtext={
          "Enhance your defense with advanced fraud & risk management services"
        }
        description={
          "Using cutting-edge detection technology, we proactively safeguard transactions and build trust by identifying and neutralizing threats. Streamlined analytics support continuous security improvements, keeping you ahead of risks."
        }
        image={
          "/assets/images/solutions/banks/fraud-risk-management/fraud-risk-management.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Unlock comprehensive protection and insights with our risk and fraud management solution, designed to secure transactions, enhance trust, and streamline your operations."
        }
        data={benefitsData}
      />
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <UsedTrustedBy />
      {/* <TestimonialSllider bgColor={"bg-white"} /> */}
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

export default FraudRiskManagement;
