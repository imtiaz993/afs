import React from "react";
import tailwindConfig from "tailwind.config";
import PageLayout from "app/common/PageLayout";
import PageNav from "./PageNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import BgImageTestimonial from "./BgImageTestimonial";
import PartnersSlider from "app/common/PartnersSlider";
import SolutionFeatures from "../../../../common/SolutionFeatures";
import CommonCTA from "../../../../common/CommonCTA";

const SolutionBusinesses = () => {
  const tailwindColorsModule = tailwindConfig.theme.extend.colors;
  const businessData = [
    {
      title: "Payment Gateway",
      description:
        "Utilizing our payment gateway solution offers substantial benefits, ensuring your transactions are not only secure but also efficient.",
    },
    {
      title: "POS & SoftPOS Terminals",
      description:
        "Using our next-generation POS terminals brings a transformative advantage to your business.",
    },
    {
      title: "Merchant portal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "Payroll solution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "SME Suite of products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
    {
      title: "DValue added services HoReCa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet.",
      descriptionCritical: "true",
    },
  ];
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div
        className="py-10 lg:py-24 md:flex items-start"
        id="solution-for-businesses"
      >
        <PageNav selected={"businesses"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Experience the power of seamless transactions with our comprehensive suite of digital payment solutions, from robust card processing services to merchant acquiring we equip your business with the tools to thrive in the digital age."
            }
            primaryButtonLabel={"View all business solutions"}
            secondaryButtonLabel={"Contact our team"}
            secondaryButtonLink={"/contact"}
          />
          <BgImageTestimonial />
          <PartnersSlider
            gradient={false}
            gradientColor={tailwindColorsModule["subtle-neutral"]}
          />
          <div className="grid my-6 md:grid-cols-2 gap-4 ">
            {businessData.map((data) => (
              <SolutionFeatures
                title={data.title}
                description={data.description}
                descriptionCritical={data.descriptionCritical}
                backgroundColor={"bg-white"}
                imageSrc={"/assets/images/solutions/productIllustration2.png"}
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
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default SolutionBusinesses;
