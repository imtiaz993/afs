import Image from "next/image";
import PageLayout from "app/common/PageLayout";
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
    <PageLayout>
      <div className="py-10 md:py-24" id="solution-for-consumers">
        <div className="md:ml-56">
          <p className="md:hidden mt-12 mb-6 text-secondary flex items-start">
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={"/assets/icons/home/diamond.svg"}
              className="mr-2 mt-[6px]"
              alt=""
            />{" "}
            Solutions for consumers
          </p>
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
