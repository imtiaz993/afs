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
    },
    {
      title: "Secure transactions",
      description:
        "Our solution is built with 3D secure technology, ensuring every transaction is protected against fraud.",
    },
    {
      title: "Flexibility and mobility",
      description:
        "Conduct transactions on the go. Ideal for businesses that require mobility without compromising on functionality.",
    },
    {
      title: "Enhanced customer experience",
      description:
        "With AFS Pay, enhance your customer interactions by offering a seamless and swift checkout process.",
    },
  ];

  const featuresData = [
    {
      title: "Multiple payment methods",
      description:
        "Feature description lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      title: "Comprehensive dashboard",
      description:
        "Gain insights into your business operations with our intuitive dashboard. Track and view transactions by type, access detailed history, and utilize helpful how-to videos.",
    },
    {
      title: "Support eco-friendly practices",
      description:
        "Embrace a paperless environment by sharing digital receipts via email or SMS. Generate and share payment links effortlessly across social media platforms like WhatsApp, Facebook Messenger, SMS, and email.",
    },
    {
      title: "Easy download and setup",
      description:
        "Get started in no time! Simply download the AFS Pay SoftPOS app from the Google Play Store, set up your account, and you're good to go.",
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
        subtext={"Transform your smartphone into a smart payment terminal"}
        description={
          "Whether it's in-store purchases, home delivery, or online sales, our SoftPOS solution ensures you're ready for every customer scenario."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
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
          primaryContent: "Interested in our SoftPOS solution?",
          secondaryContent:
            "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
          primaryButtonLabel: "Contact our team",
          primaryButtonLink: "/contact",
        }}
      />
      <UsedTrustedBy />
      <TestimonialSllider bgColor={"bg-white"} />
      <Faq
        title={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
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
          secondaryContent={"Join the countless businesses that are optimizing their payment solutions with our AFS Pay app. Transform your transaction capabilities today!"}
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact"}
        />
      </PageLayout>
    </>
  );
};

export default SoftPOS;
