import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const InPersonPayments = () => {
  const cardData = [
    {
      title: "POS terminals",
      description:
        "Designed for businesses seeking efficiency and innovation, our terminals offer swift, secure transactions, and comprehensive sales analytics.",
      learnMoreLink: "/solutions/business/pos-terminals",
    },
    {
      title: "SoftPOS",
      description:
        "Whether it’s for in-store purchases, home delivery, or online sales, our SoftPOS solution ensures you’re equipped to handle every customer scenario with ease.",
      learnMoreLink: "/solutions/business/softpos",
    },
  ];

  return (
    <>
      <PageLayout>
        <div className="py-10 lg:py-24 md:flex items-start">
          <SingleNav title={"In-person payments"} />
          <div className="md:w-[calc(100%-192px)]">
            <FeatureHighlightCard
              message={
                "Enhance your in-store payment processes with our advanced POS solutions. Both our next-generation terminals and the versatile softPOS app streamline operations and improve customer interactions."
              }
            />
            <div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
              {cardData.map((data) => (
                <SolutionFeatures
                  title={data.title}
                  description={data.description}
                  learnMoreLink={data.learnMoreLink}
                  backgroundColor={"bg-subtle-neutral"}
                  imageSrc={"/assets/images/solutions/productIllustration.png"}
                  key={data.title}
                />
              ))}
            </div>
            <CommonCTA
              primaryContent={
                "Want to learn more about our in-store and on-the-go payments?"
              }
              primaryContentTextTarget={{
                text: ["in-store", "on-the-go"],
                color: "text-brand-secondary",
              }}
              secondaryContent={
                "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
              }
              primaryButtonLabel={"Contact our team"}
              primaryButtonLink={"/contact"}
              bgColor={"bg-subtle-neutral"}
              rounded={true}
              lessPaddingVariant={true}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default InPersonPayments;
