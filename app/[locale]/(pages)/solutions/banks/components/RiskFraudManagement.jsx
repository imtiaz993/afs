import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const RiskFraudManagement = () => {
  const riskFraudData = [
    {
      title: "Authentication services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "On behalf fraud management",
      description:
        "This hands-on approach allows your team to focus on your core business with peace of mind.",
    },
    {
      title: "Tokenization",
      description:
        "Enhance security measures for your bank while minimizing fraud risks, and improving customer trust.",
    },
    {
      title: "3DS 2.0",
      description:
        "Enhances transaction security and reduces fraud by verifying cardholder identity, improving confidence in payment processes.",
    },
  ];
  return (
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Risk and fraud management"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Using cutting-edge detection technology, we proactively safeguard transactions and build trust by identifying and neutralizing threats."
            }
            primaryButtonLabel={"Learn more"}
            primaryButtonLink={"/solutions/banks/fraud-risk-management"}
            secondaryButtonLabel={"Contact our team"}
            secondaryButtonLink={"/contact-team"}
          />
          <div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
            {riskFraudData.map((data) => (
              <SolutionFeatures
                title={data.title}
                description={data.description}
                descriptionCritical={data.descriptionCritical}
                backgroundColor={"bg-subtle-neutral"}
                imageSrc={"/assets/images/solutions/productIllustration.png"}
                key={data.title}
              />
            ))}
          </div>
          <CommonCTA
            primaryContent={
              "Looking to protect your customers with our risk & fraud solutions?"
            }
            primaryContentTextTarget={{
              text: ["protect your customers"],
              color: "text-brand-secondary",
            }}
            secondaryContent={
              "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
            }
            primaryButtonLabel={"Contact our team"}
            primaryButtonLink={"/contact-team"}
            secondaryButtonLabel={"Learn more"}
            secondaryButtonLink={"/solutions/banks/fraud-risk-management"}
            bgColor={"bg-subtle-neutral"}
            rounded={true}
            lessPaddingVariant={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default RiskFraudManagement;
