import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const OtherSolutions = () => {
  const cardData = [
    {
      title: "Open banking",
      description:
        "Unlock the potential of financial innovation with our simple, integrated Open Banking APIs. Drive new payment flows and enhance your business model.",
      learnMoreLink: "/solutions/business/open-banking",
      image: "/assets/images/solutions/business/open-banking2.png",
    },
  ];

  return (
    <>
      <PageLayout bg={"bg-subtle-neutral"}>
        <div className="py-10 lg:py-24 md:flex items-start">
          <SingleNav title={"Other solutions"} />
          <div className="md:w-[calc(100%-192px)]">
            <FeatureHighlightCard
              message={
                "Our suite of payment solutions, provides your business with streamlined operations, this comprehensive approach ensures you are well-equipped to meet diverse industry demands efficiently."
              }
            />
            <div className="mt-16 mb-4 gap-4">
              {cardData.map((data) => (
                <SolutionFeatures
                  title={data.title}
                  description={data.description}
                  learnMoreLink={data.learnMoreLink}
                  backgroundColor={"bg-white"}
                  imageSrc={
                    data.image
                      ? data.image
                      : "/assets/images/solutions/productIllustration2.png"
                  }
                />
              ))}
            </div>
            <CommonCTA
              primaryContent={"Looking for a bespoke solution?"}
              secondaryContent={
                "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
              }
              primaryButtonLabel={"Contact our team"}
              primaryButtonLink={"/contact-team"}
              lessPaddingVariant={true}
              bgColor={"bg-white"}
              rounded={true}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default OtherSolutions;
