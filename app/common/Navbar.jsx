"use client";

import { useState, useRef } from "react";
import { usePathname, Link } from "i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import PageLayout from "./PageLayout";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [colorChange, setColorchange] = useState(false);

  const [solutionsMenu, setSolutionsMenu] = useState(true);
  const [navbarMenu, setNavbarMenu] = useState("");

  const isHome = pathname === "/";
  const isArabic = locale === "ar";
  return (
    <div className="relative lg:sticky top-0 z-[999]">
      <div className="">
        <div
          className={`pt-5 pb-6 fixed top-0 left-0 right-0 lg:sticky z-[999] transition-all duration-300  ${
            isHome
              ? colorChange
                ? "bg-white shadow-[0_6px_6px_-5px_rgba(0,0,0,0.2),0_-6px_6px_-50px_rgba(0,0,0,1)]"
                : "bg-white"
              : colorChange
              ? "bg-white shadow-[0_6px_6px_-5px_rgba(0,0,0,0.2),0_-6px_6px_-50px_rgba(0,0,0,1)]"
              : "bg-subtle-neutral"
          } `}
        >
          <PageLayout>
            <div className="hidden lg:flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full"
                    src="/assets/icons/navbar/nav-logo.svg"
                    alt=""
                  />
                </Link>
                <div className={`${isArabic ? "lg:mr-12" : "lg:ml-12"}`}>
                  <button
                    className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                    onClick={() => {
                      setNavbarMenu(
                        navbarMenu?.length == 0
                          ? "Solutions"
                          : navbarMenu == "Solutions"
                          ? ""
                          : "Solutions"
                      );
                    }}
                  >
                    Solutions
                    <Image
                      sizes="100vw"
                      width={12}
                      height={6}
                      className={`transition-all duration-200 ${
                        navbarMenu == "Solutions" ? "-rotate-180" : "rotate-0"
                      } ${isArabic ? "mr-2" : "ml-2"}`}
                      src="/assets/icons/navbar/chevron.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className={`${isArabic ? "lg:mr-6" : "lg:ml-6"}`}>
                  <button
                    className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                    onClick={() => {
                      setNavbarMenu(
                        navbarMenu?.length == 0
                          ? "Company"
                          : navbarMenu == "Company"
                          ? ""
                          : "Company"
                      );
                    }}
                  >
                    Company
                    <Image
                      sizes="100vw"
                      width={12}
                      height={6}
                      className={`transition-all duration-200 ${
                        navbarMenu == "Company" ? "-rotate-180" : "rotate-0"
                      } ${isArabic ? "mr-2" : "ml-2"}`}
                      src="/assets/icons/navbar/chevron.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className={`${isArabic ? "lg:mr-6" : "lg:ml-6"}`}>
                  <button
                    className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                    onClick={() => {
                      setNavbarMenu(
                        navbarMenu?.length == 0
                          ? "Resources"
                          : navbarMenu == "Resources"
                          ? ""
                          : "Resources"
                      );
                    }}
                  >
                    Resources
                    <Image
                      sizes="100vw"
                      width={12}
                      height={6}
                      className={`transition-all duration-200 ${
                        navbarMenu == "Resources" ? "-rotate-180" : "rotate-0"
                      } ${isArabic ? "mr-2" : "ml-2"}`}
                      src="/assets/icons/navbar/chevron.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <LocaleSwitcher locale={locale} />
                <Link href="/contact-team">
                  <button className=" text-center text-white bg-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  border border-brand-secondary  py-[15px] w-[185px] font-medium rounded-sm">
                    {t("contact team")}
                  </button>
                </Link>
              </div>
            </div>
          </PageLayout>
        </div>
      </div>
      {navbarMenu == "Solutions" ? <SolutionsMenu /> : ""}
      {navbarMenu == "Company" ? <CompanyMenu /> : ""}
      {navbarMenu == "Resources" ? <ResourcesMenu /> : ""}
    </div>
  );
};

const MenuItem = ({ title, setSelected, selected }) => {
  return (
    <div
      className={`flex justify-between py-2 pr-2 pl-3 ${
        selected == title
          ? "bg-subtle-neutral text-brand-secondary"
          : "text-primary"
      } hover:cursor-pointer`}
      onMouseEnter={() => setSelected(title)}
    >
      <p className="text-[18px] font-normal leading-[28px]">{title}</p>
      <Image
        sizes="100vw"
        width={12}
        height={6}
        className="mr-2 -rotate-90"
        src="/assets/icons/navbar/chevron.svg"
        alt=""
      />
    </div>
  );
};

const SubMenuItem = ({ title, description, link }) => {
  return (
    <div>
      <div className="p-2 w-[302px]">
        <Link href={link}>
          <div className="flex mb-1">
            <p className="text-[14px] font-medium leading-[18px] text-primary">
              {title}
            </p>
            <Image
              sizes="100vw"
              width={16}
              height={16}
              src="/assets/icons/navbar/arrow-right.svg"
              className="rounded ml-1"
            />
          </div>
          <p className="text-[14px] font-normal leading-[18px] text-secondary">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
};

const SolutionsOverview = () => {
  return (
    <div className="flex">
      <div className="w-[316px]">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Overview
        </p>
        <div className="p-2 ">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src="/assets/images/navbar/solutions-overview.png"
            className="h-full w-full rounded mb-3"
          />
          <p className="text-[14px] font-normal leading-[18px] text-primary mb-3">
            <span className="font-medium">Solutions overview - </span> Take a
            glance at our extensive company offering.
          </p>
          <Link href={"/solutions"} className="flex">
            <p className="text-brand-secondary text-[14px] font-normal leading-[18px]">
              Learn more{" "}
            </p>
            <Image
              sizes="100vw"
              width={13}
              height={11}
              src="/assets/icons/home/arrow-right.svg"
              className="rounded ml-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BanksOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[316px]">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Overview
        </p>
        <div className="p-2">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src="/assets/images/navbar/banks-overview.png"
            className="h-full w-full rounded mb-3"
          />
          <p className="text-[14px] font-normal leading-[18px] text-primary mb-3">
            <span className="font-medium">Solutions for banks - </span>{" "}
            Revolutionize your bank financial operations.
          </p>
          <Link href={"/solutions/banks"} className="flex">
            <p className="text-brand-secondary text-[14px] font-normal leading-[18px]">
              Learn more{" "}
            </p>
            <Image
              sizes="100vw"
              width={13}
              height={11}
              src="/assets/icons/home/arrow-right.svg"
              className="rounded ml-2"
            />
          </Link>
        </div>
      </div>
      <div className="w-[612px] ml-6">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Solutions & Services
        </p>
        <div className="grid md:grid-cols-2 gap-1">
          <SubMenuItem
            title={"Card issuing & proccesing"}
            description={"Streamlined and efficient card management."}
            link={"/solutions/banks/card-issuing-processing"}
          />
          <SubMenuItem
            title={"Risk & fraud management"}
            description={"Safeguard transactions, neutralize threats."}
            link={"/solutions/banks/fraud-risk-management"}
          />
          <SubMenuItem
            title={"Open Banking"}
            description={"Unlock the potential of financial data sharing."}
            link={"/solutions/banks/open-banking"}
          />
          <SubMenuItem
            title={"Value added services"}
            description={
              "Elevate your customer experience and operational efficiency in one go."
            }
            link={"/solutions/banks/value-added-services"}
          />
        </div>
      </div>
    </div>
  );
};

const BusinessesOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[316px]">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Overview
        </p>
        <div className="p-2">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src="/assets/images/navbar/businesses-overview.png"
            className="h-full w-full rounded mb-3"
          />
          <p className="text-[14px] font-normal leading-[18px] text-primary mb-3">
            <span className="font-medium">Solutions for businesses - </span>
            Leverage our versatile range of payment solutions.
          </p>
          <Link href={"/solutions/business"} className="flex">
            <p className="text-brand-secondary text-[14px] font-normal leading-[18px]">
              Learn more{" "}
            </p>
            <Image
              sizes="100vw"
              width={13}
              height={11}
              src="/assets/icons/home/arrow-right.svg"
              className="rounded ml-2"
            />
          </Link>
        </div>
      </div>
      <div className="w-[612px] ml-6">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Solutions & Services
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          <SubMenuItem
            title={"Payment gateway"}
            description={"Enhance your checkout flows."}
            link={"/solutions/business/payment-gateway"}
          />
          <SubMenuItem
            title={"POS terminals"}
            description={"Elevate your retail experience."}
            link={"/solutions/business/pos-terminals"}
          />
          <SubMenuItem
            title={"AFS One (SoftPOS)"}
            description={"Smart point-of-sale in your pocket."}
            link={"/solutions/business/softpos"}
          />
          <SubMenuItem
            title={"AFS Pro"}
            description={"A unique mobile payment ecosystem."}
            link={"/solutions/business/afs-pro"}
          />
          <SubMenuItem
            title={"Open Banking"}
            description={"Drive new payment flows."}
            link={"/solutions/business/open-banking"}
          />
          <SubMenuItem
            title={"eShop"}
            description={"Complete eCommerce solution."}
            link={"/solutions/business/eshop"}
          />
          <SubMenuItem
            title={"Food & beverage"}
            description={"Your restaurant-first full featured point-of-sale."}
            link={"/solutions/business/food-beverage"}
          />
        </div>
      </div>
    </div>
  );
};

const ConsumersOverview = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[316px]">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Overview
        </p>
        <div className="p-2">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src="/assets/images/navbar/consumers-overview.png"
            className="h-full w-full rounded mb-3"
          />
          <p className="text-[14px] font-normal leading-[18px] text-primary mb-3">
            <span className="font-medium">BPay wallet - </span>
            Your one-stop digital wallet app for secure, instant, local and
            global payments.
          </p>
          <Link href={"/solutions/consumers/bpay"} className="flex">
            <p className="text-brand-secondary text-[14px] font-normal leading-[18px]">
              Learn more{" "}
            </p>
            <Image
              sizes="100vw"
              width={13}
              height={11}
              src="/assets/icons/home/arrow-right.svg"
              className="rounded ml-2"
            />
          </Link>
        </div>
      </div>
      <div className="w-[612px] ml-6">
        <div className="p-2 w-[302px]">
          <p className="text-primary text-[14px] font-medium leading-[18px] mb-2">
            Download BPay
          </p>
          <p className="text-secondary text-[14px] font-normal leading-[18px]">
            Make and receive payments in an easy, fast, and secure way.
          </p>
        </div>
        <div className="p-2 flex">
          <Image
            src={"/assets/icons/solutions/appstore.svg"}
            width={113}
            height={32}
            sizes="100vw"
            className=""
            alt=""
          />

          <Image
            src={"/assets/icons/solutions/googleplay.svg"}
            width={113}
            height={32}
            sizes="100vw"
            className="ml-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const SolutionsMenu = () => {
  const [solutionsMenuSelected, setSolutionsMenuSelected] =
    useState("Overview");
  return (
    <div className="flex absolute bg-white top-[100px] z-[999] w-full justify-center">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4">
          <div className="mb-6">
            <p className="text-[12px] font-normal uppercase leading-[18px] text-secondary mb-4 px-3">
              Solutions
            </p>
            <MenuItem
              title={"Overview"}
              setSelected={setSolutionsMenuSelected}
              selected={solutionsMenuSelected}
            />
          </div>
          <p className="text-[12px] font-normal uppercase leading-[18px] text-secondary mb-4 px-3">
            Solutions For
          </p>
          <MenuItem
            title={"Banks"}
            setSelected={setSolutionsMenuSelected}
            selected={solutionsMenuSelected}
          />
          <MenuItem
            title={"Businesses"}
            setSelected={setSolutionsMenuSelected}
            selected={solutionsMenuSelected}
          />
          <MenuItem
            title={"Consumers"}
            setSelected={setSolutionsMenuSelected}
            selected={solutionsMenuSelected}
          />
        </div>
        <div className="py-8 pl-6">
          {solutionsMenuSelected == "Overview" && <SolutionsOverview />}
          {solutionsMenuSelected == "Banks" && <BanksOverview />}
          {solutionsMenuSelected == "Businesses" && <BusinessesOverview />}
          {solutionsMenuSelected == "Consumers" && <ConsumersOverview />}
        </div>
      </div>
    </div>
  );
};

const CompanyMenu = () => {
  return (
    <div className="flex absolute bg-white top-[100px] z-[999] w-full justify-center">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4">
          <p className="text-[12px] font-normal uppercase leading-[18px] text-secondary mb-6 px-3">
            Introduction
          </p>
          <h5 className="px-3 text-[18px] font-normal leading-[25.2px] text-primary">
            Our company provides numerous end-to-end digital payment products,
            services and solutions to banks, businesses, and consumers.
          </h5>
        </div>
        <div className="py-8 pl-6">
          <div className="flex justify-between">
            <div className="w-[316px]">
              <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
                About Us
              </p>
              <div className="p-2">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  src="/assets/images/navbar/solutions-overview.png"
                  className="h-full w-full rounded mb-3"
                />
                <p className="text-[14px] font-normal leading-[18px] text-primary mb-3">
                  <span className="font-medium">About us - </span>
                  Read our journey to become region’s leading digital payment
                  solutions provider.
                </p>
                <Link href={"/about"} className="flex">
                  <p className="text-brand-secondary text-[14px] font-normal leading-[18px]">
                    Learn more{" "}
                  </p>
                  <Image
                    sizes="100vw"
                    width={13}
                    height={11}
                    src="/assets/icons/home/arrow-right.svg"
                    className="rounded ml-2"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[612px] ml-6">
              <div className="grid gap-2 mt-[34px]">
                <SubMenuItem
                  title={"Investor relations"}
                  description={"Building trust and driving value."}
                  link={"/investor-relations"}
                />
                <SubMenuItem
                  title={"Careers"}
                  description={"Join us as."}
                  link={"/careers"}
                />
                <SubMenuItem
                  title={"Contact us"}
                  description={"How can we help?"}
                  link={"/contact"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestNewsItem = ({ image, description }) => {
  return (
    <div className="p-2 w-[301px]">
      <Image
        sizes="100vw"
        width={285}
        height={160}
        src={image}
        className="rounded mb-4"
      />
      <p className="text-[14px] font-normal leading-[18px] text-primary line-clamp-2">
        {description}
      </p>
    </div>
  );
};

const LatestNews = () => {
  return (
    <div className="">
      <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
        Latest News
      </p>
      <div className="grid grid-cols-3 gap-6">
        <LatestNewsItem
          image={"/assets/images/navbar/news1.png"}
          description={
            "ACI Worldwide and AFS to drive payments modernization for banks and merchants in the Middle East"
          }
        />
        <LatestNewsItem
          image={"/assets/images/navbar/news2.png"}
          description={
            "AFS Transaction Index: season-opening Bahrain GP delivers 66% surge in spends"
          }
        />
        <LatestNewsItem
          image={"/assets/images/navbar/news3.png"}
          description={
            "AFS enter strategic alliance with Xpence to innovate SME financial management in Bahrain"
          }
        />
      </div>
    </div>
  );
};

const ResourcesMenu = () => {
  const [resourcesMenuSelected, setResourcesMenuSelected] = useState("News");
  return (
    <div className="flex absolute bg-white top-[100px] z-[999] w-full justify-center">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4">
          <p className="text-[12px] font-normal uppercase leading-[18px] text-secondary mb-4 px-3">
            Resources
          </p>
          <MenuItem
            title={"News & Announcements"}
            setSelected={setResourcesMenuSelected}
            selected={resourcesMenuSelected}
          />
          <MenuItem
            title={"ESG"}
            setSelected={setResourcesMenuSelected}
            selected={resourcesMenuSelected}
          />
          <MenuItem
            title={"Certifications"}
            setSelected={setResourcesMenuSelected}
            selected={resourcesMenuSelected}
          />
          <MenuItem
            title={"Legal"}
            setSelected={setResourcesMenuSelected}
            selected={resourcesMenuSelected}
          />
        </div>
        <div className="py-8 pl-6">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
