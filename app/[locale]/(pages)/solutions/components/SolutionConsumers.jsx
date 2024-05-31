import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import AppCTA from "../../../../common/AppCTA";

const SolutionConsumers = () => {
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
              "Transferring money abroad or making payments has never been easier with BPay, our fast and secure wallet solution that enables you to make transactions without the need for cash or cards."
            }
            primaryButtonLabel={"Learn more about BPay"}
            primaryButtonLink="/solutions/consumers/bpay"
          />
          <div className="pt-16">
            <AppCTA />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SolutionConsumers;
