"use client";
import Navbar from "./common/Navbar";
import CommonHero from "./common/CommonHero";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <CommonHero
        title={"Page not available"}
        subtext={"404 – Page not found"}
        description={
          "Sorry the page you were looking for could not be found. We may have deleted or moved this page. Or the link never existed."
        }
        secondaryDescription={
          "You can return to our home page, or contact our team if you can’t find what you are looking for."
        }
        buttonText={"Go back home"}
        buttonLink={"/"}
        secondaryButtonText={"Contact our team"}
        secondaryButtonLink={"/contact-team"}
      />
    </>
  );
}
