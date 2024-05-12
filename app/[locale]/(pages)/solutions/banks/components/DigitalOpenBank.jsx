import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const DigitalOpenBank = () => {
  const digitalOpenBankData = [
    {
      title: "Open banking",
      description:
        "Explore Open Banking opportunities for businesses and deliver outstanding payment services to your clients and customers",
      learnMore: "/linktolearnmore",
    },
    {
      title: "Digital banking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
      learnMore: "/linktolearnmore",
    },
  ];
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24 md:flex items-start">
        <div className="w-[192px] mt-12 md:mt-0 mr-8 md:sticky top-[110px] mb-6">
          <p className="mb-2 text-secondary flex items-center cursor-pointer">
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={"/assets/icons/home/diamond.svg"}
              className="mr-2"
              alt=""
            />{" "}
            Digital & Open banking
          </p>
        </div>
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Capitalize on the opportunity of Open Banking through simple integrated APIs"
            }
          />
          <div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
            {digitalOpenBankData.map((data) => (
              <SolutionFeatures
                title={data.title}
                description={data.description}
                descriptionCritical={data.descriptionCritical}
                backgroundColor={"bg-white"}
                imageSrc={"/assets/images/solutions/productIllustration2.png"}
                key={data.title}
                learnMoreLink={data.learnMore}
              />
            ))}
          </div>
          <CommonCTA
            primaryContent={
              "Want to learn more about our Digital and Open Banking solutions?"
            }
            primaryContentTextTarget={{
              text: ["Digital", "Open Banking"],
              color: "text-brand-secondary",
            }}
            secondaryContent={
              "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
            }
            primaryButtonLabel={"Contact our team"}
            primaryButtonLink={"/contact"}
            bgColor={"bg-white"}
            rounded={true}
            lessPaddingVariant={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default DigitalOpenBank;
