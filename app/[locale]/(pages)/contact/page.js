import Navbar from "app/common/Navbar";
import Hero from "./components/Hero";
import PageLayout from "app/common/PageLayout";
import ContactOption from "./components/ContactOption";
import Support from "./components/Support";
import Complaints from "./components/Complaints";
import EscalationChannels from "./components/EscalationChannels";
import Offices from "./components/Offices";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={"Contact us"}
        subtext={"How can we help?"}
        description={
          "Whether you have a question, feedback, or concern, we are here to provide the support you need."
        }
      />
      <ContactOption />
      <Support />
      <PageLayout>
        <div className="py-10 lg:py-24 lg:pt-12 lg:flex justify-between">
          <Complaints />
          <EscalationChannels />
        </div>
      </PageLayout>
      <Offices />
    </>
  );
};

export default Contact;
