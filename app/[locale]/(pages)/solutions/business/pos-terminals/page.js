import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const POSTerminals = () => {
  const benefitsData = [
    {
      title: "Increased transaction speed",
      description:
        "Improved customer satisfaction and increased sales opportunities.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
    },
    {
      title: "Advanced security",
      description:
        "Protect your business against data breaches and fraud with state-of-the-art encryption and security protocols.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/protection.svg",
    },
    {
      title: "Versatile payment options",
      description:
        "From traditional cards to contactless and mobile payments, our solutions accommodate all customer preferences.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security.svg",
    },
    {
      title: "Detailed sales analytics",
      description:
        "Gain valuable insights into your sales trends and customer preferences with built-in analytics features.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
  ];

  const featuresData = [
    {
      title: "Smart integrated POS terminals",
      description:
        "Leverage the flexibility and efficiency of Android with our smart, integrated POS terminals. These devices offer intuitive operation, extensive app compatibility,  easy customization and back-end integration to fit your unique business needs.",
      image:
        "/assets/images/solutions/business/pos-terminals/smart-integrated.png",
    },
    {
      title: "Accept all major card schemes",
      description:
        "Ensure you never miss a sale by accepting all major credit and debit cards. Our terminals are designed to support a wide range of card schemes, catering to a diverse customer base.",
      image: "/assets/images/solutions/business/pos-terminals/accept-major.png",
    },
    {
      title: "Support multiple payment methods",
      description:
        "From traditional magnetic stripe and chip cards to contactless NFC payments, our terminals accommodate various payment methods, making transactions convenient for every customer.",
      image:
        "/assets/images/solutions/business/pos-terminals/support-multiple-payment-method1.png",
    },
    {
      title: "Secure payment experience",
      description:
        "Combine speed with security in your payment process. Our terminals provide quick transaction times without compromising on data protection, offering a seamless checkout experience for customers.",
      image:
        "/assets/images/solutions/business/pos-terminals/secure-payment.png",
    },
    {
      title: "Dynamic currency conversion",
      description:
        "Enhance the shopping experience for international customers by offering the convenience of paying in their home currency. This feature not only simplifies transactions but also provides transparency in currency exchange rates.",
      image:
        "/assets/images/solutions/business/pos-terminals/dynamic-currency.png",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"POS Terminals"}
        subtext={
          "Next-generation point-of-sale (POS) terminals for your business"
        }
        description={
          "Elevate your retail experience with our advanced POS terminals. Designed for businesses seeking efficiency and innovation, our terminals offer swift, secure transactions, and comprehensive sales analytics."
        }
        image={
          "/assets/images/solutions/business/pos-terminals/pos-terminals.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
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
          primaryContent:
            "Want to learn more about our next-generation POS solutions and how we can help your business?",
          secondaryContent:
            "Our dedicated regional managers are ready to help guide you on the best solution for your business.",
          primaryButtonLabel: "Contact our team",
          primaryButtonLink: "/contact-team",
        }}
      />
      <UsedTrustedBy />
      <TestimonialSllider bgColor={"bg-white"} />
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

export default POSTerminals;
