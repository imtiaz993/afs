import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const OpenBanking = () => {
  const benefitsData = [
    {
      title: "Increased innovation",
      description:
        "Collaborate with fintech companies to develop groundbreaking products and services.",
    },
    {
      title: "Enhanced customer experience",
      description:
        "Deliver personalized services and streamline processes to provide a seamless banking experience.",
    },
    {
      title: "Regulatory compliance",
      description:
        "Navigate the complexities of financial regulations with confidence while meeting all regulatory requirements efficiently.",
    },
    {
      title: "Empowered decision-making",
      description:
        "Leverage detailed insights from a broader range of financial data to make more informed decisions.",
    },
  ];

  const featuresData = [
    {
      title: "Secure data sharing",
      description:
        "Our Open Banking APIs provide a secure framework for sharing financial data with third-party providers (TPPs), with robust encryption and authentication protocols to protect sensitive information.",
    },
    {
      title: "Customer consent",
      description:
        "At the core of Open Banking is the principle of customer consent. Customers have complete control over their data, choosing what to share and with whom, ensuring transparency and trust in the services provided.",
    },
    {
      title: "Enhanced Services",
      description:
        "With the integration of third-party data, banks can enhance their existing services or develop new ones that offer more personalized and efficient customer experiences. This includes everything from improved financial advice to faster loan processing.",
    },
  ];

  const accordionOptions = [
    {
      title: "What is Open Banking?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Can anyone access user data?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Can a third-party provider make a payment from my account without me authorizing it?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "When I share my banking data via Open Banking, what information will companies be able to see?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "What is an Open Banking primary business contact?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Will I receive feedback on my application and what form will it take?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Is Open Banking safe?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title:
        "Does AFS provide AISP (account information) or PISP (payment initiation) APIs?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "How do I control who has access to my data?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  const featuresCommonCTAData = {
    primaryContent: "Interested in our digital and open banking solution?",
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
        title={"Open banking - for banks"}
        subtext={"Ensure full compliance and accelerate innovation"}
        description={
          "Unlock the potential of financial data sharing with secure, compliant Open Banking APIs that accelerate innovation and enhance customer experiences."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "Discover the strategic advantages of integrating Open Banking into your operations. Our platform not only ensures compliance with the latest financial regulations but also propels your service capabilities to new heights."
        }
        data={benefitsData}
      />
      <Features data={featuresData} commonCTAData={featuresCommonCTAData} />
      <UsedTrustedBy />
      <TestimonialSllider />
      <Faq
        title={
          "Find answers to some key questions about our Open Banking solution"
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

export default OpenBanking;
