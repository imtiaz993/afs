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
    },
    {
      title: "Enhanced customer experience",
      description:
        "Deliver seamless payment interactions that enhance customer satisfaction online, in-store, or at the door.",
    },
    {
      title: "Innovative financial access",
      description:
        "Utilize secure, personalized financial services that access real-time data, empowering your business.",
    },
    {
      title: "Cost efficiency",
      description:
        "Reduce transaction fees and operational costs with efficient payment systems designed to cut overheads.",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Solutions for businesses"}
        subtext={"Experience the power of seamleass transactions"}
        description={
          "Leverage our versatile range of payment solutions to empower every aspect of your business transactions. "
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
