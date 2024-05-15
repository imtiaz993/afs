import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSllider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const FraudRiskManagement = () => {
  const benefitsData = [
    {
      title: "Enhanced security",
      description:
        "Provides robust protection ensuring that transactions are secure and customer data is safeguarded against fraud.",
    },
    {
      title: "Improved trust",
      description:
        "Maintain customer confidence by demonstrating a commitment to security and the integrity of financial transactions.",
    },
    {
      title: "Operational efficiency",
      description:
        "Automates and optimizes the detection and management of fraudulent activities, reducing the need for manual intervention.",
    },
    {
      title: "Strategic risk insights",
      description:
        "Offers valuable analytics and insights into fraud trends and risk patterns, enabling strategic risk mitigation approaches.",
    },
  ];

  const featuresData = [
    {
      title: "On-hehalf fraud management",
      description:
        "We actively monitors and mitigates fraud, leveraging our expertise to protect your transactions and customer trust. This hands-on approach allows your team to focus on your core business with peace of mind.",
    },
    {
      title: "Authentication services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: true,
    },
    {
      title: "24/7 risk monitoring",
      description:
        "Experience round-the-clock protection with our 24/7 Monitoring feature. Our dedicated team vigilantly oversees your transactions and systems, ready to detect and respond to any suspicious activity at a moment's notice.",
      secondaryDescription:
        "This constant surveillance ensures that your operations are safeguarded against threats, day and night, providing you and your customers with uninterrupted peace of mind.",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our fraud and risk management solutions?",
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
        title={"Fraud & risk management"}
        subtext={"Enhance your defense with advanced risk and fraud management"}
        description={
          "Using cutting-edge detection technology, we proactively safeguard transactions and build trust by identifying and neutralizing threats. Streamlined analytics support continuous security improvements, keeping you ahead of risks."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "Unlock comprehensive protection and insights with our risk and fraud management solution, designed to secure transactions, enhance trust, and streamline your operations."
        }
        data={benefitsData}
      />
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <UsedTrustedBy />
      <TestimonialSllider />
      <Faq />
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

export default FraudRiskManagement;
