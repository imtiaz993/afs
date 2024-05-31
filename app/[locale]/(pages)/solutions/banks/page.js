import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import CardIssuingProcessing from "./components/CardIssuingProcessing";
import RiskFraudManagement from "./components/RiskFraudManagement";
import OtherProductsServices from "./components/OtherProductsServices";

const Banks = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Solution for banks"}
        subtext={"Stay ahead of the competition"}
        description={
          "Leverage cutting-edge issuer processing technology to drive your digital transformation, business growth, customer satisfaction, operational efficiency and compliance."
        }
        image={"/assets/images/solutions/banks/solutions-for-banks.png"}
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <CardIssuingProcessing />
      <RiskFraudManagement />
      <OtherProductsServices />
    </>
  );
};

export default Banks;
