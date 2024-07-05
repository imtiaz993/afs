import PageLayout from "../../../../common/PageLayout";

const Hero = ({ title, subtext, description }) => {
  return (
    <PageLayout bg={"bg-subtle-neutral"} styles="!px-0">
      <div className="py-10 lg:py-24 pb-0 lg:pb-0">
        <div className="px-4 md:px-10 lg:px-16">
          <p className=" mb-6 text-secondary ">{title}</p>
          <h1 className="text-primary text-left text-5xl lg:text-[88px] !leading-[100%] md:max-w-[500px] lg:max-w-[864px]">
            {subtext}
          </h1>
          <div>
            {description && (
              <p className="mt-6 text-secondary text-left text-2xl md:max-w-[500px] lg:max-w-[864px] !leading-8">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Hero;
