import React from "react";
import PageLayout from "app/common/PageLayout";
import PageNav from "./PageNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "../../../../common/SolutionFeatures";
import AvatarTestimonial from "./AvatarTestimonial";
import AppCTA from "./AppCTA";

const SolutionConsumers = () => {
  const consumerData = [
    {
      title: "International money transfer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "Free & easy cash withdrawals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "Physical debit card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "Easy salary transfer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
  ];
  return (
    <PageLayout styles="border-b border-default">
      <div
        className="py-10 lg:py-24 md:flex items-start "
        id="solution-for-consumers"
      >
        <PageNav selected={"consumers"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Transferring money abroad or making payments has never been easier with our fast and secure wallet solution that enables you to make transactions withough the need for cash or cards."
            }
            primaryButtonLabel={"Learn more about BPay"}
            secondaryButtonLabel={"Download BPay"}
          />
          <div className="grid mt-16 md:grid-cols-2 gap-4 ">
            {consumerData.map((data) => (
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
          <AvatarTestimonial />
          <AppCTA />
        </div>
      </div>
    </PageLayout>
  );
};

export default SolutionConsumers;
