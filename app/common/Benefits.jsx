import PageLayout from "./PageLayout";
import SingleNav from "./SingleNav";

const Benefits = ({ description, data }) => {
  return (
    <PageLayout>
      <div className="py-10 lg:py-24 md:flex items-start">
        <SingleNav title={"Benefits"} />
        <div className="md:w-[calc(100%-192px)]">
          <h3 className="text-[24px] md:text-[40px] !leading-[120%] text-primary mb-16">
            {description}
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {data.map((item) => (
              <div className="min-w-[248px]">
                <div
                  className={` ${
                    item.icon ? "" : "bg-surface-neutral"
                  } w-10 h-10 mb-6`}
                  style={{
                    backgroundImage: `url(${item.icon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                  }}
                ></div>
                <p className="text-[16px] !leading-[150%] text-primary font-[530] mb-2">
                  {item.title}
                </p>
                <p className="text-[14px] !leading-[18px] text-primary opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Benefits;
