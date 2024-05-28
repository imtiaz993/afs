import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "app/common/Navbar";
import HomeHero from "./components/HomeHero";
import PartnersSlider from "../../../common/PartnersSlider";
import Working from "./components/Working";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CommonCTA from "app/common/CommonCTA";
import News from "app/common/News";
import PageLayout from "app/common/PageLayout";

const Home = () => {
  const t = useTranslations("Home.CTA");

  return (
    <>
      <Navbar />
      <HomeHero />
      <PageLayout>
        <PartnersSlider />
      </PageLayout>
      <Working />
      <Solutions />
      <About />
      <Reviews />
      <PageLayout styles={"!px-0 relative"}>
        <CommonCTA
          primaryContent={t("title")}
          primaryContentTextTarget={{
            text: [t("highlighted")],
            color: "text-brand-secondary",
          }}
          secondaryContent={t("description")}
          primaryButtonLabel={t("contact team")}
          primaryButtonLink={"/contact-team"}
        />
      </PageLayout>
      <News />
    </>
  );
};

export default Home;
