import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";
import SingleNav from "app/common/SingleNav";

const OtherProductsServices = () => {
  const otherProductsServicesData = [
    {
      title: "Open banking",
      description:
        "Unlock the potential of financial data sharing with secure, compliant Open Banking APIs that enhance customer experiences.",
      learnMore: "/solutions/banks/open-banking",
      imgSrc: "/assets/images/solutions/banks/open-banking.png",
    },
    {
      title: "Value added services",
      description:
        "Enhance your offerings with our suite of value-added services and security features to revolutionize your payments business.",
      learnMore: "/solutions/banks/value-added-services",
      imgSrc: "/assets/images/solutions/banks/value-added-services.png",
    },
  ];
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Other product & services"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Tailored to empower banks with the tools they need to exceed customer expectations and stay ahead in the competitive financial landscape."
            }
          />
          <div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
            {otherProductsServicesData.map((data) => (
              <SolutionFeatures
                title={data.title}
                description={data.description}
                descriptionCritical={data.descriptionCritical}
                backgroundColor={"bg-white"}
                // imageSrc={"/assets/images/solutions/productIllustration2.png"}
                imageSrc={data.imgSrc}
                key={data.title}
                learnMoreLink={data.learnMore}
              />
            ))}
          </div>
          <CommonCTA
            primaryContent={
              "Want to learn more about our products and services solutions?"
            }
            primaryContentTextTarget={{
              text: ["products and services"],
              color: "text-brand-secondary",
            }}
            secondaryContent={
              "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
            }
            primaryButtonLabel={"Contact our team"}
            primaryButtonLink={"/contact-team"}
            bgColor={"bg-white"}
            rounded={true}
            lessPaddingVariant={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default OtherProductsServices;
