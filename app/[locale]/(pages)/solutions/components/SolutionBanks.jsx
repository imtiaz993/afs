import React from "react";
import PageLayout from "app/common/PageLayout";
import PageNav from "./PageNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import BgImageTestimonial from "./BgImageTestimonial";
import PartnersSlider from "app/common/PartnersSlider";
import SolutionFeatures from "../../../../common/SolutionFeatures";
import CommonCTA from "../../../../common/CommonCTA";
import CommonCTAold from "app/common/CommonCTAold";

const SolutionBanks = () => {
  const banksData = [
    {
      title: "Card issuing",
      description:
        "Instantly issue personalized debit, credit, and prepaid cards at branch locations within minutes enhancing overall service efficiency.",
    },
    {
      title: "Card processing",
      description:
        "End-to-end and cost-effective card processing solutions to financial and non-financial institutions.",
    },
    {
      title: "Card personalization",
      description:
        "From custom designs to enhanced security options like EMV chips and contactless technology",
    },
    {
      title: "Sharia compliant",
      description:
        "Our Sharia-compliant solutions are meticulously designed to ensure that all financial transactions and products meet the strict standards.",
    },
    {
      title: "Fraud & Risk management",
      description:
        "Using cutting-edge detection technology, we proactively safeguard transactions and build trust by identifying and neutralizing threats.",
    },
    {
      title: "Digital & Open banking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
  ];
  return (
    <PageLayout>
      <div
        className="py-10 lg:py-24 md:flex items-start"
        id="solution-for-banks"
      >
        <PageNav selected={"banks"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "We put at your disposal a wide range of solutions design to meet the evolving need of the banking sector, our services ensure secure, efficient and compliant operations"
            }
            primaryButtonLabel={"View all banking solutions"}
            primaryButtonLink={"/solutions/banks"}
            secondaryButtonLabel={"Contact our team"}
            secondaryButtonLink={"/contact"}
          />
          <BgImageTestimonial />
          <PartnersSlider gradient={false} />
          <div className="grid my-6 md:grid-cols-2 gap-4">
            {banksData.map((data) => (
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
              "Want to learn more about our solutions and how we can help your business?"
            }
            secondaryContent={
              "Our dedicated business development team are ready to help guide you on the best solution for your business."
            }
            primaryButtonLabel={"Contact our team"}
            secondaryButtonLabel={"View all business solutions"}
            primaryButtonLink={"/contact"}
            bgColor={"bg-surface-neutral"}
            rounded={true}
            lessPaddingVariant={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default SolutionBanks;
