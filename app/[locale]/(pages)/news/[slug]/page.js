import Navbar from "app/common/Navbar";
import NewsDetailContent from "./components/NewsDetailContent";

const page = ({ params }) => {
  return (
    <>
      <Navbar />
      <NewsDetailContent slug={params.slug} />
    </>
  );
};

export default page;
