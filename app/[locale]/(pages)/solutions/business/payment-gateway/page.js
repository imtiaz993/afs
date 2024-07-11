import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import CommonServices from "app/common/CommonServices";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSlider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const PaymentGateway = () => {
  const benefitsData = [
    {
      title: "Versatile payment support",
      description:
        "Our gateway accommodates various payment methods, catering to all customer preferences.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatile-payment-support.svg",
    },
    {
      title: "Enhanced security",
      description:
        "With advanced security protocols, we safeguard transaction data and minimize fraud risks.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security3.svg",
    },
    {
      title: "Streamlined transactions",
      description:
        "Quick, reliable processing enhances the checkout experience for your customers.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/streamlined-operations.svg",
    },

    {
      title: "Insightful analytics",
      description:
        "Access to detailed analytics helps refine payment strategies and improve operational efficiency.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/empowered-decision-making.svg",
    },
  ];

  const servicesData = [
    {
      title: "Secure transaction processing",
      description:
        "Protect sensitive customer data with encryption technology that reduces the risk of fraud, enhances customer trust and ensures secure digital payments transactions.",
      image:
        "/assets/images/solutions/business/payment-gateway/secure-transaction2.png",
    },
    {
      title: "Multi-currency support",
      description:
        "Accept multiple digital payment methods, broadening your market reach and accessibility and allowing your customers to choose the most convenient and suitable payment option for them.",
      image:
        "/assets/images/solutions/business/payment-gateway/multi-currency-support2.png",
    },
    {
      title: "Real-time processing",
      description:
        "Speed up transactions with real-time processing, offering instant payment confirmations and smoother checkouts.",
      image:
        "/assets/images/solutions/business/payment-gateway/real-time-processing2.png",
    },
    {
      title: "Customizable checkout experience",
      description:
        "Automate recurring payments for subscriptions, ensuring consistent revenue and reducing manual effort.",
      image:
        "/assets/images/solutions/business/payment-gateway/customizable-checkout-experience.png",
    },
  ];

  const servicesCTAData = {
    primaryContent: "Interested in our payment gateway solution?",
    secondaryContent:
      "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
    primaryButtonLabel: "Contact our team",
    primaryButtonLink: "/contact-team",
    lessPaddingVariant: true,
    bgColor: "bg-surface-neutral",
  };

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Payment gateway"}
        subtext={"Seamless payment gateway solutions"}
        description={
          "Our payment gateway streamlines transactions with robust security and support for multiple digital payment methods, ensuring quick and reliable processing."
        }
        image={
          "/assets/images/solutions/business/payment-gateway/payment-gateway.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Utilizing our payment gateway solution offers substantial benefits, ensuring your customer transactions are not only secure but also efficient."
        }
        data={benefitsData}
      />
      <CommonServices
        navTitle={"Features"}
        servicesData={servicesData}
        ctaData={servicesCTAData}
      />
      <UsedTrustedBy category="business"/>
      {/* <TestimonialSlider bgColor={"bg-white"} /> */}
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

export default PaymentGateway;
