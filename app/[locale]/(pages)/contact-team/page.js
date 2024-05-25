import Navbar from "app/common/Navbar";
import PageLayout from "app/common/PageLayout";
import ContactOurTeamComponent from "./components/ContactOurTeamComponent";
import ContactTeamForm from "./components/ContactTeamForm";

const ContactOurTeam = () => {
  return (
    <>
      <Navbar />
      <PageLayout
        bg={"bg-subtle-neutral"}
        styles="grid md:grid-cols-2 gap-8 xl:gap-16 pt-16 pb-24"
      >
        <ContactOurTeamComponent />
        <ContactTeamForm />
      </PageLayout>
    </>
  );
};

export default ContactOurTeam;
