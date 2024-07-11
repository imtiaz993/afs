import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "i18n.config";

// Load the translation file for the active locale
// on each request and make it available to our
// pages, components, etc.
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    return notFound();
  }

  const Navbar = await import(`./locales/navbar/${locale}.json`);
  const News = await import(`./locales/news/${locale}.json`);
  const Footer = await import(`./locales/footer/${locale}.json`);
  const Common = await import(`./locales/common/${locale}.json`);
  const Home = await import(`./locales/home/${locale}.json`);
  const About = await import(`./locales/about/${locale}.json`);
  const Partners = await import(`./locales/partners/${locale}.json`);
  const InvestorRelations = await import(
    `./locales/investor-relations/${locale}.json`
  );
  const Careers = await import(`./locales/careers/${locale}.json`);
  const CareerDetails = await import(`./locales/career-details/${locale}.json`);
  const Contact = await import(`./locales/contact/${locale}.json`);
  const Certifications = await import(
    `./locales/certifications/${locale}.json`
  );

  return {
    messages: {
      ...Navbar.default,
      ...News.default,
      ...Footer.default,
      ...Common.default,
      ...Home.default,
      ...Partners.default,
      ...About.default,
      ...InvestorRelations.default,
      ...Careers.default,
      ...CareerDetails.default,
      ...Contact.default,
      ...Certifications.default,
    },
  };
});
