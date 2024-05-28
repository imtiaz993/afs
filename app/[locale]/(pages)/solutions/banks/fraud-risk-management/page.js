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
      image:
        "/assets/images/solutions/banks/fraud-risk-management/on-hehalf-fraud-management.png",
    },
    {
      title: "Authentication services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      image:
        "/assets/images/solutions/banks/fraud-risk-management/authentication-services.png",
      descriptionCritical: true,
    },
    {
      title: "24/7 risk monitoring",
      description:
        "Experience round-the-clock protection with our 24/7 Monitoring feature. Our dedicated team vigilantly oversees your transactions and systems, ready to detect and respond to any suspicious activity at a moment's notice.",
      image:
        "/assets/images/solutions/banks/fraud-risk-management/247-risk-monitoring.png",
      secondaryDescription:
        "This constant surveillance ensures that your operations are safeguarded against threats, day and night, providing you and your customers with uninterrupted peace of mind.",
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

  const accordionOptions = [
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
        title={"Fraud & risk management"}
        subtext={"Enhance your defense with advanced risk and fraud management"}
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
      <TestimonialSllider />
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
          primaryButtonLink={"/contact-team"}
        />
      </PageLayout>
    </>
  );
};

export default FraudRiskManagement;
