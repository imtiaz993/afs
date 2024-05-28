import PageLayout from "./PageLayout";
import SingleNav from "./SingleNav";
import CommonCTA from "./CommonCTA";
import AppCTA from "app/common/AppCTA";

const Features = ({ data, commonCTAData, appCTA, appCTABgColor }) => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Features"} />
        <div className="md:w-[calc(100%-192px)]">
          {data.map((item) => (
            <div className="flex flex-col lg:flex-row gap-8 mb-24">
              <div
                className="lg:w-[608px] h-[450px]"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="lg:ml-8 lg:w-[416px]">
                <h3 className="text-[40px] !leading-[48px] text-primary mb-4">
                  {item.title}
                </h3>
                <p
                  className={`text-lg ${
                    item.descriptionCritical
                      ? "text-critical-primary"
                      : "text-primary"
                  }`}
                >
                  {item.description}
                </p>
                {item.secondaryDescription ? (
                  <>
                    <div className="mt-7">
                      <p
                        className={`text-lg ${
                          item.descriptionCritical
                            ? "text-critical-primary"
                            : "text-primary"
                        }`}
                      >
                        {item.secondaryDescription}
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ))}
          {commonCTAData ? (
            <CommonCTA
              lessPaddingVariant={true}
              rounded={true}
              bgColor={commonCTAData?.bgColor}
              primaryContent={commonCTAData?.primaryContent}
              secondaryContent={commonCTAData?.secondaryContent}
              primaryButtonLabel={commonCTAData?.primaryButtonLabel}
              primaryButtonLink={commonCTAData?.primaryButtonLink}
            />
          ) : null}
          {appCTA ? <AppCTA bgColor={appCTABgColor} /> : null}
        </div>
      </div>
    </PageLayout>
  );
};

export default Features;
