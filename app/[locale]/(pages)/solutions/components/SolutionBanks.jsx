import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import BgImageTestimonial from "./BgImageTestimonial";
import PartnersSlider from "app/common/PartnersSlider";
import SolutionFeatures from "../../../../common/SolutionFeatures";
import CommonCTA from "../../../../common/CommonCTA";

const SolutionBanks = () => {
  const banksData = [
    {
      title: "Card processing",
      description:
        "Deliver versatile card solutions, for all requirements, ensuring convenience and security in every payment.",
      image: "/assets/images/solutions/card-processing.png",
    },
    {
      title: "Operational support",
      description:
        "Streamline processes and optimize performance while ensuring continuous customer assistance.",
      image: "/assets/images/solutions/operational-support.png",
    },
    {
      title: "Authentification",
      description:
        "Our proprietary advanced security measures and tools give you complete protection in stopping fraudulent activities.",
      image: "/assets/images/solutions/authentification.png",
    },
    {
      title: "Fraud management",
      description:
        "Employ advanced and cutting-edge technology to secure your financial transactions, allowing you to focus on your business.",
      image: "/assets/images/solutions/fraud-management.png",
    },
    {
      title: "Value added services",
      description:
        "Enhance your offerings with our suite of value-added services and security features to revolutionize your payments business.",
      image: "/assets/images/solutions/value-added-services.png",
    },
    {
      title: "Additional services",
      description:
        "Our add-ons help streamline operations with tailored branding, efficient communication, and convenient account information.",
      image: "/assets/images/solutions/additional-services.png",
    },
  ];
  return (
    <PageLayout>
      <div className="py-10 md:py-24" id="solution-for-banks">
        <div className=" md:ml-56">
          <p className="md:hidden mt-12 mb-6 text-secondary flex items-start">
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={"/assets/icons/home/diamond.svg"}
              className="mr-2 mt-[6px]"
              alt=""
            />{" "}
            Solutions for banks
          </p>
          <FeatureHighlightCard
            message={
              "We put at your disposal a wide range of solutions design to meet the evolving need of the banking sector, our services ensure secure, efficient and compliant operations."
            }
            primaryButtonLabel={"View all banking solutions"}
            primaryButtonLink={"/solutions/banks"}
            secondaryButtonLabel={"Contact our team"}
            secondaryButtonLink={"/contact-team"}
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
                imageSrc={data.image}
                key={data.title}
              />
            ))}
          </div>
          <CommonCTA
            primaryContent={
              "Want to learn more about our solutions and how we can help your bank?"
            }
            secondaryContent={
              "Our dedicated business development team are ready to help guide you on the best solution for your business."
            }
            primaryButtonLabel={"Contact our team"}
            secondaryButtonLabel={"View all bank solutions"}
            primaryButtonLink={"/contact-team"}
            secondaryButtonLink={"/solutions/banks"}
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
