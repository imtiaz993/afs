import PageLayout from "app/common/PageLayout";
import Image from "next/image";
const NewsTestimonial = () => {
  return (
    <PageLayout>
      <div className="py-6 ps-8 pe-10 max-w-100 xl:max-w-[864px] mx-auto border border-l-[3px] border-default border-s-medium-brand mb-7">
        <p className="text-primary leading-7 text-lg mb-4">
          “Arab Financial Services is thrilled to embark on a strategic
          partnership with ACI Worldwide. As the payments landscape becomes ever
          more intricate and prone to disruption, a reliable technology partner
          offering industry-leading solutions is crucial. Together, AFS and ACI
          Worldwide are committed to empower our customers with cutting-edge
          technology that streamlines operations, fosters growth, and unlocks
          new levels of profitability.”
        </p>

        <div className="flex flex-col space-y-1  mb-4">
          <span className="font-medium text-base  text-secondary ">
            Samer Soliman, CEO{" "}
          </span>
          <span className="font-normal text-base  text-secondary ">
            Arab Financial Services
          </span>
        </div>
      </div>

     
    </PageLayout>
  );
};

export default NewsTestimonial;
