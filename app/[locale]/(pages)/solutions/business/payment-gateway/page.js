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
    },
    {
      title: "Enhanced security",
      description:
        "With advanced security protocols, we safeguard transaction data and minimize fraud risks.",
    },
    {
      title: "Streamlined transactions",
      description:
        "Quick, reliable processing enhances the checkout experience for your customers.",
    },
    {
      title: "Insightful analytics",
      description:
        "Access to detailed analytics helps refine payment strategies and improve operational efficiency.",
    },
  ];

  const servicesData = [
    {
      title: "Secure transaction processing",
      description:
        "Boost your credibility with encrypted transactions, enhancing customer trust and data security.",
    },
    {
      title: "Multi-currency support",
      description:
        "Go global by accepting multiple currencies, broadening your market reach and accessibility.",
    },
    {
      title: "Fraud detection and prevention",
      description:
        "Minimize risks with our proactive fraud prevention, protecting your revenue and reputation.",
    },
    {
      title: "Payment method integration:",
      description:
        "Cater to all customers by supporting various payment options, increasing satisfaction and loyalty.",
    },
    {
      title: "Real-time processing",
      description:
        "Speed up transactions with real-time processing, offering instant payment confirmations and smoother checkouts.",
    },
    {
      title: "Customizable checkout experience",
      description:
        "Automate recurring payments for subscriptions, ensuring consistent revenue and reducing manual effort.",
    },
    {
      title: "Recurring billing",
      description:
        "Personalize your checkout to fit your brand, improving user experience and conversion rates.",
    },
    {
      title: "Reporting and analytics",
      description:
        "Gain insights with detailed reports on sales and customer behavior, aiding in strategic decision-making and optimization.",
    },
  ];

  const servicesCTAData = {
    primaryContent: "Interested in our payment gateway solution?",
    secondaryContent:
      "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
    primaryButtonLabel: "Contact our team",
    primaryButtonLink: "/contact",
    lessPaddingVariant: true,
    bgColor: "bg-surface-neutral",
  };

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
        title={"Payment gateway"}
        subtext={"Seamless payment gateway solutions"}
        description={
          "Our payment gateway streamlines transactions with robust security and support for multiple payment methods, ensuring quick and reliable processing. It enhances checkout experiences and offers insights to optimize your payment strategy."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "Utilizing our payment gateway solution offers substantial benefits, ensuring your transactions are not only secure but also efficient and user-friendly."
        }
        data={benefitsData}
      />
      <CommonServices
        navTitle={"Features"}
        servicesData={servicesData}
        ctaData={servicesCTAData}
      />
      <UsedTrustedBy />
      <TestimonialSlider />
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

export default PaymentGateway;
