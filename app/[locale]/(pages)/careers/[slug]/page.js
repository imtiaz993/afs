import Navbar from "app/common/Navbar";
import PageLayout from "app/common/PageLayout";
import CareerDetailHero from "./components/CareerDetailHero";
import JobDetails from "./components/JobDetails";
import JobDescription from "./components/JobDescription";
import JobApplyForm from "./components/JobApplyForm";

const CareersDetail = () => {
  return (
    <>
      <Navbar />
      <CareerDetailHero />
      <div className="border-b border-default">
        <PageLayout>
          <div className="lg:max-w-[864px] mx-auto py-10 lg:py-24 md:flex justify-between">
            <JobDetails />
            <div className="md:w-[calc(100%-192px-32px)]">
              <JobDescription />
              <JobApplyForm />
            </div>
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default CareersDetail;
