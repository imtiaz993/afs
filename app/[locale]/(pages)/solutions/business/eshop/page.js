import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import UsedTrustedBy from "app/common/UsedTrustedBy";
import TestimonialSllider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import PageLayout from "app/common/PageLayout";
import CommonCTA from "app/common/CommonCTA";

const eShop = () => {
  const benefitsData = [
    {
      title: "Wider customer reach",
      description:
        "Expand your market by connecting with customers globally. eShop helps you tap into new demographics and increase your sales footprint.",
    },
    {
      title: "Secure and efficient transactions",
      description:
        "With pre-integration of the AFS payment gateway, your transactions are secure, reliable, and quick, ensuring customer trust and satisfaction.",
    },
    {
      title: "Tailored online store",
      description:
        "Customize your eCommerce site to reflect your brand and cater to specific business requirements, enhancing the shopping experience for your customers.",
    },
    {
      title: "Streamlined operations",
      description:
        "From billing to customer management, eShop simplifies your daily operations so you can focus on growth and customer engagement.",
    },
  ];

  const featuresData = [
    {
      title: "eInvoicing",
      description:
        "Streamline your billing process with our advanced eInvoicing system. This feature not only automates invoice generation but also facilitates faster payment processing, helping you manage cash flow more efficiently. ",
      secondaryDescription:
        "Tailor invoice templates to your brand, send automatic payment reminders to customers, and reduce administrative overhead by keeping all your billing digital and centralized.",
    },
    {
      title: "Reporting dashboard",
      description:
        "Gain actionable insights with our comprehensive reporting dashboards. Track key performance indicators (KPIs) such as sales growth, customer retention rates, and product popularity.",
      secondaryDescription:
        "Use these insights to adjust your sales strategies, optimize your marketing campaigns, and improve overall business performance.",
    },
    {
      title: "Recurring billing",
      description:
        "Ideal for businesses that offer subscription-based services, our recurring billing feature automates the billing cycle, ensuring consistent revenue and improving customer retention. ",
      secondaryDescription:
        "This tool is designed to handle all aspects of subscription management, including upgrades, downgrades, pauses, and cancellations, providing a flexible and user-friendly experience for both you and your customers.",
    },
    {
      title: "Payment versatility",
      description:
        "Our platform supports a diverse range of payment methods to ensure you never miss a sale. Accept payments via credit cards, digital wallets, bank transfers, and more.",
      secondaryDescription:
        "This versatility not only enhances customer convenience but also ensures you can cater to local and international markets with ease.",
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
        title={"eShop"}
        subtext={"Your complete online sales platform"}
        description={
          "Sell online effortlessly with eShop, your complete eCommerce solution integrated with the AFS payment gateway."
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <Benefits
        description={
          "eShop provides powerful tools designed to enhance your online business presence and operational efficiency. Experience the advantages of a platform that grows with your needs."
        }
        data={benefitsData}
      />
      <Features
        data={featuresData}
        commonCTAData={{
          bgColor: "bg-surface-neutral",
          primaryContent: "Interested in our eShop solution?",
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

export default eShop;
