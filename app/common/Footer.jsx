import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import PageLayout from "./PageLayout";
import InputField from "./form-components/InputField";

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const isArabic = locale === "ar";
  const bankLinks = t.raw("solutions for banks");
  const businessLinks = t.raw("solutions for businesses");
  const consumerLinks = t.raw("solutions for consumer");
  const companyLinks = t.raw("company");
  const resourcesLinks = t.raw("resources");
  const publicLinks = t.raw("public links");

  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <div className="mb-16">
          <Link href="/">
            <Image
              sizes="100vw"
              width={67}
              height={40}
              src="/assets/icons/footer/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start">
            <h6
              className={`mb-6 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {bankLinks.title}
            </h6>
            {bankLinks.links.map((item, index) => (
              <Link
                key={index}
                className={`mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <h6
              className={`mb-6 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {businessLinks.title}
            </h6>
            {businessLinks.links.map((item, index) => (
              <Link
                key={index}
                className={`mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href="/"
              >
                {item.title}
              </Link>
            ))}
            <h6
              className={`mt-8 mb-6 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {consumerLinks.title}
            </h6>
            {consumerLinks.links.map((item, index) => (
              <Link
                key={index}
                className={`mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href="/"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start sm:mt-10 lg:mt-0">
            <h6
              className={`mb-6 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {companyLinks.title}
            </h6>
            {companyLinks.links.map((item, index) => (
              <Link
                key={index}
                className={`mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href="/"
              >
                {item.title}
              </Link>
            ))}

            <h6
              className={`mt-8 mb-6 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {resourcesLinks.title}
            </h6>
            {resourcesLinks.links.map((item, index) => (
              <Link
                key={index}
                className={`mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href="/"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className={`sm:mt-10 lg:mt-0 ${isArabic ? "text-right" : ""}`}>
            <h6
              className={`mb-2 font-medium text-primary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {t("join network.title")}
            </h6>
            <p
              className={`mb-6 text-sm text-secondary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {t("join network.description")}
            </p>
            <div className="flex flex-col">
              <InputField
                type="email"
                placeholder={t("join network.input placeholder")}
              />
              <button className="text-white py-[11px] w-full bg-brand-secondary border border-brand-secondary font-medium mt-2 rounded-sm">
                {t("join network.button")}
              </button>
            </div>
            <p className="text-secondary text-center md:text-left mt-4 text-sm pb-10 mb-10 border-b border-default">
              {t("join network.privacy text")}{" "}
              <Link
                className="text-primary hover:text-brand-secondary hover:underline"
                href="/"
              >
                {t("join network.privacy policy")}
              </Link>
            </p>
            <div className="pb-10 mb-10 border-b border-default">
              <h6 className="text-primary text-center md:text-left font-medium mb-4">
                {t("social follow")}
              </h6>
              <div
                className={`flex justify-center md:justify-start items-center ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <a href="#" className={`${isArabic ? "ml-3" : "mr-3"}`}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Facebook.svg"
                    alt=""
                  />
                </a>
                <a href="#" className={`${isArabic ? "ml-3" : "mr-3"}`}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Instagram.svg"
                    alt=""
                  />
                </a>
                <a href="#" className={`${isArabic ? "ml-3" : "mr-3"}`}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/X.svg"
                    alt=""
                  />
                </a>
                <a href="#" className={`${isArabic ? "ml-3" : "mr-3"}`}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/LinkedIn.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Youtube.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="pb-10">
              <h6
                className={`text-primary text-center md:text-left font-medium mb-4 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {t("certifications")}
              </h6>
              <div className="flex justify-center md:justify-start">
                <div className="border-r border-default p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification1.svg"
                    alt=""
                  />
                </div>
                <div className="border-r border-default p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification2.svg"
                    alt=""
                  />
                </div>
                <div className="p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification3.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-col border-t border-default text-sm mt-14 pt-10 text-secondary">
          <div
            className={`flex flex-col flex-wrap ${isArabic ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {publicLinks.map((item, index) => (
              <Link
                key={index}
                className={`mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline ${
                  isArabic ? "text-right" : ""
                }`}
                href="/"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <p
              className={`md:mt-6 font-normal text-sm ${
                isArabic ? "text-right" : ""
              }`}
            >
              {t("rights")}
            </p>
            <p
              className={`mb-6 md:mb-0 mt-1 text-xs text-tertiary ${
                isArabic ? "text-right" : ""
              }`}
            >
              {t("license")}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Footer;
