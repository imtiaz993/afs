import Navbar from "app/common/Navbar";
import Header from "./components/Header";
import PageLayout from "app/common/PageLayout";
import NavAndContent from "./components/NavAndContent";

const Legal = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PageLayout styles="flex p-16">
        <NavAndContent />
      </PageLayout>
    </>
  );
};

export default Legal;
