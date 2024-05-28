import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";
import SingleNav from "app/common/SingleNav";

const CardIssuingProcessing = () => {
  const cardData = [
    {
      title: "Credit and debit cards",
      description:
        "Tailored to promote financial freedom and ease of use, our cards are designed to integrate seamlessly with your bank's existing services.",
    },
    {
      title: "Prepaid cards",
      description:
        "Our prepaid solutions cater to a wide range of uses, from gift cards to travel budgets, ensuring versatility and user satisfaction.",
    },
    {
      title: "Sharia compliant cards",
      description:
        "Our Sharia-compliant solutions are meticulously designed to ensure that all financial transactions and products meet the strict standards.",
    },
    {
      title: "Personalized cards",
      description:
        "We empower your bank to offer personalized cards that resonate with your customers' preferences and needs.",
    },
  ];
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Card issuing & processing"} />
        <div className="md:w-[calc(100%-192px)]">
          <FeatureHighlightCard
            message={
              "Revolutionize your bank card operations by enhancing efficiency and streamlining processes with a comprehensive solution that simplifies card issuance and processing."
            }
            primaryButtonLabel={"Learn more"}
            primaryButtonLink={"/solutions/banks/card-issuing-processing"}
            secondaryButtonLabel={"Contact our team"}
            secondaryButtonLink={"/contact-team"}
          />
          <div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
            {cardData.map((data) => (
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
            primaryContent={"Interested in our card and processing solutions?"}
            primaryContentTextTarget={{
              text: ["card and processing"],
              color: "text-brand-secondary",
            }}
            secondaryContent={
              "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
            }
            primaryButtonLabel={"Contact our team"}
            primaryButtonLink={"/contact-team"}
            secondaryButtonLabel={"Learn more"}
            secondaryButtonLink={"/solutions/banks/card-issuing-processing"}
            bgColor={"bg-white"}
            rounded={true}
            lessPaddingVariant={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default CardIssuingProcessing;
