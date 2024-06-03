import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import OnlinePayments from "./components/OnlinePayments";
import InPersonPayments from "./components/InPersonPayments";
import OtherSolutions from "./components/OtherSolutions";

const Business = () => {
  const benefitsData = [
    {
      title: "Streamlined operations",
      description:
        "Simplify daily operations with integrated tools that automate your processes and reduce manual workload.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
    {
      title: "Enhanced customer experience",
      description:
        "Deliver seamless payment interactions that enhance customer satisfaction online, in-store, or at the door.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
    },
    {
      title: "Innovative financial access",
      description:
        "Utilize secure, personalized financial services that access real-time data, empowering your business.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational.svg",
    },
    {
      title: "Cost efficiency",
      description:
        "Reduce transaction fees and operational costs with efficient payment systems designed to cut overheads.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/security.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Solutions for businesses"}
        subtext={"Experience the power of seamless digital payments acceptance"}
        description={
          "Leverage our versatile range of payment solutions to empower every aspect of your business transactions, for every payment type, and every customer."
        }
        image={"/assets/images/solutions/business/solution-business.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "Help your business adapt to market changes and customer preferences smoothly, promoting growth and enhancing the customer experience across all channels."
        }
        data={benefitsData}
      />
      <OnlinePayments />
      <InPersonPayments />
      <OtherSolutions />
    </>
  );
};

export default Business;
