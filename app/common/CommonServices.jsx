import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const CommonServices = ({ navTitle, servicesData, ctaData }) => {
  return (
    <>
      <PageLayout bg={"bg-subtle-neutral"}>
        <div className="py-10 lg:py-24 md:flex items-start">
          <SingleNav title={navTitle} />
          <div className="md:w-[calc(100%-192px)]">
            <div className="grid md:grid-cols-2 gap-4">
              {servicesData.map((item) => (
                <SolutionFeatures
                  title={item.title}
                  description={item.description}
                  imageSrc={"/assets/images/solutions/productIllustration2.png"}
                  key={item.title}
                />
              ))}
            </div>
            <CommonCTA
              primaryContent={ctaData.primaryContent}
              secondaryContent={ctaData.secondaryContent}
              primaryButtonLabel={ctaData.primaryButtonLabel}
              primaryButtonLink={ctaData.primaryButtonLink}
              lessPaddingVariant={ctaData.lessPaddingVariant}
              bgColor={ctaData.bgColor}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default CommonServices;
