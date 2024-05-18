import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const POSTerminals = () => {
  const benefitsData = [
    {
      title: "Increased transaction speed",
      description:
        "Improved customer satisfaction and increased sales opportunities.",
    },
    {
      title: "Advanced security",
      description:
        "Protect your business against data breaches and fraud with state-of-the-art encryption and security protocols.",
    },
    {
      title: "Versatile payment options",
      description:
        "From traditional cards to contactless and mobile payments, accommodates all customer preferences.",
    },
    {
      title: "Detailed sales analytics",
      description:
        "Gain valuable insights into your sales trends and customer preferences with built-in analytics features.",
    },
  ];

  const featuresData = [
    {
      title: "Smart integrated POS terminals",
      description:
        "everage the flexibility and efficiency of Android with our smart, integrated POS terminals. These devices offer intuitive operation, extensive app compatibility, and easy customization to fit your unique business needs.",
    },
    {
      title: "Accept all major card schemes",
      description:
        "Ensure you never miss a sale by accepting all major credit and debit cards. Our terminals are designed to support a wide range of card schemes, catering to a diverse customer base.",
    },
    {
      title: "Secure payment experience",
      description:
        "Combine speed with security in your payment process. Our terminals provide quick transaction times without compromising on data protection, offering a seamless checkout experience for customers.",
    },
    {
      title: "Loan on POS",
      description:
        "This service simplifies the borrowing process, integrating credit options seamlessly into the transaction flow, which can boost sales and improve customer satisfaction by providing instant access to credit at critical buying moments.",
    },
    {
      title: "Dynamic currency conversion",
      description:
        "Enhance the shopping experience for international customers by offering the convenience of paying in their home currency. This feature not only simplifies transactions but also provides transparency in currency exchange rates.",
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
        title={"POS Terminals"}
        subtext={"Next-generation POS terminals for your business"}
        description={
          "Elevate your retail experience with our advanced POS terminals. Designed for businesses seeking efficiency and innovation, our terminals offer swift, secure transactions, and comprehensive sales analytics."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "Using our next-generation POS terminals brings a transformative advantage to your business, streamlining operations and enhancing customer interactions."
        }
        data={benefitsData}
      />
      <Features
        data={featuresData}
        commonCTAData={{
          bgColor: "bg-surface-neutral",
          primaryContent: "Interested in our next-gen POS terminals?",
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
          secondaryContent={"Experience the power of AFS today!"}
          primaryButtonLabel={"Contact our team"}
          primaryButtonLink={"/contact"}
        />
      </PageLayout>
    </>
  );
};

export default POSTerminals;
