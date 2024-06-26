import Navbar from "app/common/Navbar";
import CareerDetail from "./components/CareerDetail";


const CareersDetail = ({params}) => {

  return (
    <>
      <Navbar />
      <CareerDetail slug={params.slug}/>
      
    </>
  );
};

export default CareersDetail;
