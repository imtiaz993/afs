import PageLayout from "app/common/PageLayout";
import CareerDetailHero from "./CareerDetailHero";
import JobDetails from "./JobDetails";
import JobDescription from "./JobDescription";
import JobApplyForm from "./JobApplyForm";
import { careerContentData } from "../../careerDetail";

const CareerDetail = ({slug}) => {
    const data = careerContentData.find((post) => post.slug == slug);
  return (
    <>
      <CareerDetailHero data={data} />
      <div className="border-b border-default">
        <PageLayout>
          <div className="lg:max-w-[864px] mx-auto py-10 lg:py-24 md:flex justify-between">
            <JobDetails data={data} />
            <div className="md:w-[calc(100%-192px-32px)]">
              <JobDescription data={data} />
              <JobApplyForm />
            </div>
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default CareerDetail;
