import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import CardIssuingProcessing from "./components/CardIssuingProcessing";
import RiskFraudManagement from "./components/RiskFraudManagement";
import DigitalOpenBank from "./components/DigitalOpenBank";

const Banks = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Solution for banks"}
        subtext={"Stay ahead of the competition"}
        description={
          "Leverage cutting-edge technology to drive growth, improve customer satisfaction, endure secure, efficient, and compliant operations"
        }
        image={"/assets/images/about/hero.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact"}
      />
      <CardIssuingProcessing />
      <RiskFraudManagement />
      <DigitalOpenBank />
    </>
  );
};

export default Banks;
