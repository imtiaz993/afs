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
      title: "Fast processing",
      description:
        "Save your business queue time by processing payments in less than 3 seconds.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/increased-transaction-speed.svg",
    },
    {
      title: "Advanced security",
      description:
        "Protect your business against data breaches and fraud with state-of-the-art encryption and security protocols.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security3.svg",
    },
    {
      title: "Versatile payment options",
      description:
        "From traditional cards to contactless and mobile payments, our solutions accommodate all customer preferences.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatile-payment-support.svg",
    },
    {
      title: "Detailed sales analytics",
      description:
        "Gain valuable insights into your sales trends and customer preferences with built-in analytics features.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/empowered-decision-making.svg",
    },
  ];

  const featuresData = [
    {
      title: "Smart integrated POS terminals",
      description:
        "Leverage the flexibility and efficiency of Android with our smart, integrated POS terminals. These devices offer intuitive operation, extensive app compatibility,  easy customization and back-end integration to fit your unique business needs.",
      image:
        "/assets/images/solutions/business/pos-terminals/smart-integrated2.png",
    },
    {
      title: "Accept all major card schemes",
      description:
        "Ensure you never miss a sale by accepting a wide range of payment methods. Our terminals support all major credit and debit card schemes, including traditional magnetic stripe, chip cards, and contactless NFC payments. This versatility caters to a diverse customer base, making transactions convenient for every customer.",
      image: "/assets/images/solutions/business/pos-terminals/accept-major.png",
    },
    {
      title: "Secure payment experience",
      description:
        "Combine speed with security in your payment process. Our terminals provide quick transaction times without compromising on data protection, offering a seamless checkout experience for customers.",
      image:
        "/assets/images/solutions/business/pos-terminals/secure-payment2.png",
    },
    {
      title: "Dynamic currency conversion",
      description:
        "Enhance the shopping experience for international customers by accepting over 150 of their preferred currencies. This feature not only simplifies transactions but also provides transparency in currency exchange rates while offering you rebates.",
      image:
        "/assets/images/solutions/business/pos-terminals/dynamic-currency2.png",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"POS Terminals"}
        subtext={
          "Best in class point-of-sale (POS) terminals for your business"
        }
        description={
          "Elevate your customer experience with our advanced POS terminals. Designed for businesses seeking efficiency and innovation, our terminals offer swift, secure transactions, and comprehensive sales analytics."
        }
        image={
          "/assets/images/solutions/business/pos-terminals/pos-terminals-banner.png"
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
      {/* <UsedTrustedBy /> */}
      {/* <TestimonialSllider bgColor={"bg-white"} /> */}
      {/* <PageLayout>
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
			</PageLayout> */}
    </>
  );
};

export default POSTerminals;
