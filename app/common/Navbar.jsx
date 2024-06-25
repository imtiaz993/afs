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
  const [navbarMenu, setNavbarMenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState({
    currentMenu: "",
    stack: [],
  });

  const isHome = pathname === "/";
  const isArabic = locale === "ar";

  return (
    <div className="sticky top-0 z-[999] ">
      <div className="shadow-[0px_1px_3px_0px_rgba(5,36,96,0.10)] z-[1]">
        <div
          className={`pt-5 pb-5 xl:pb-6 top-0 left-0 right-0 sticky transition-all duration-300  ${
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
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {mobileMenu?.stack.length < 1 ? (
                  <Link href="/">
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="w-[66.66px] xl:w-[73.3px] h-[40px] xl:h-[44px]"
                      src="/assets/icons/navbar/nav-logo.svg"
                      alt=""
                    />
                  </Link>
                ) : (
                  <button
                    className="h-[40px]"
                    onClick={() => {
                      setMobileMenu((prevState) => {
                        const array = [...prevState.stack];
                        const newArray = array.slice(0, -1);
                        let newCurrentMenu = array[array.length - 1];

                        if (!newCurrentMenu) newCurrentMenu = "";

                        const newState = {
                          ...prevState,
                          stack: newArray,
                          currentMenu: newCurrentMenu,
                        };
                        console.log("newState >> ", newState);
                        return newState;
                      });
                    }}
                  >
                    <div className="flex">
                      <Image
                        sizes="100vw"
                        width={16}
                        height={16}
                        src="/assets/icons/navbar/arrow-right.svg"
                        alt="arrow-left"
                        className="rotate-180"
                      />
                      <p className="text-[1lpx] font-medium leading-[24px] text-primary ml-2">
                        Back
                      </p>
                    </div>
                  </button>
                )}
                <div className="hidden xl:flex">
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
              </div>
              <div className="hidden xl:flex items-center">
                <LocaleSwitcher locale={locale} />
                <Link href="/contact-team">
                  <button className=" text-center text-white bg-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  border border-brand-secondary  py-[15px] w-[185px] font-medium rounded-sm">
                    {t("contact team")}
                  </button>
                </Link>
              </div>
              <div
                className=" xl:hidden flex"
                onClick={() =>
                  setMobileMenu((prevMenu) => ({
                    ...prevMenu,
                    stack: [],
                    currentMenu: prevMenu?.currentMenu == "" ? "main-menu" : "",
                  }))
                }
              >
                <p className="text-[16px] font-medium leading-[24px] text-primary mr-2">
                  {mobileMenu?.currentMenu.length == 0 ? "Menu" : "Close"}
                </p>
                <Image
                  sizes="100vw"
                  width={32}
                  height={22}
                  src={`/assets/icons/navbar/NavbarToggle${
                    mobileMenu?.currentMenu.length == 0 ? "" : "2"
                  }.svg`}
                  alt=""
                />
              </div>
            </div>
          </PageLayout>
        </div>
      </div>
      {navbarMenu == "Solutions" && <SolutionsMenu />}
      {navbarMenu == "Company" && <CompanyMenu />}
      {navbarMenu == "Resources" && <ResourcesMenu />}
      {mobileMenu?.currentMenu == "main-menu" && (
        <MobileMainMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "solutions-menu" && (
        <MobileSolutionsMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "solutions-overview" && (
        <MobileSolutionsOverviewMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "company-menu" && (
        <MobileCompanyMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "resources-menu" && (
        <MobileResourcesMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "solutions-banks-menu" && (
        <MobileSolutionBanksMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "solutions-businesses-menu" && (
        <MobileSolutionBusinessesMenu setState={setMobileMenu} />
      )}
      {mobileMenu?.currentMenu == "solutions-consumers-menu" && (
        <MobileSolutionConsumersMenu setState={setMobileMenu} />
      )}
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
      } hover:cursor-pointer rounded`}
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

const ImageSubMenuItem = ({ image, title, description, link, mobile }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={link}>
      <div
        className={`${
          mobile ? "py-6 px-4" : "p-2"
        } hover:bg-subtle-neutral hover:cursor-pointer`}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <Image
          sizes="100vw"
          width={0}
          height={0}
          src={image}
          className="h-full w-full rounded mb-3"
        />
        <p
          className={`${
            mobile ? "text-[16px] leading-[24px]" : "text-[14px] leading-[18px]"
          } font-normal text-primary mb-3`}
        >
          <span className="font-medium">{title} - </span> {description}
        </p>
        <div
          className={`flex ${
            isHover ? "underline decoration-brand-secondary" : null
          }`}
        >
          <p
            className={`${
              mobile
                ? "text-[16px] font-medium leading-[24px]"
                : "text-[14px] font-normal leading-[18px]"
            } text-brand-secondary`}
          >
            Learn more{" "}
          </p>
          <Image
            sizes="100vw"
            width={13}
            height={11}
            src="/assets/icons/home/arrow-right.svg"
            className="rounded ml-2"
          />
        </div>
      </div>
    </Link>
  );
};

const SubMenuItem = ({ title, description, link }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={link}>
      <div
        className="p-2 w-[302px] hover:bg-subtle-neutral hover:cursor-pointer"
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <div className="flex mb-1">
          <p
            className={`text-[14px] font-medium leading-[18px] ${
              isHover ? "text-brand-secondary" : "text-primary"
            }`}
          >
            {title}
          </p>
          <Image
            sizes="100vw"
            width={16}
            height={16}
            src={`/assets/icons/navbar/arrow-right${
              isHover ? "-blue" : ""
            }.svg`}
            className="rounded ml-1"
          />
        </div>
        <p className="text-[14px] font-normal leading-[18px] text-secondary">
          {description}
        </p>
      </div>
    </Link>
  );
};

const SolutionsOverview = () => {
  return (
    <div className="flex">
      <div className="w-[316px]">
        <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
          Overview
        </p>
        <ImageSubMenuItem
          image={"/assets/images/navbar/solutions-overview.png"}
          title={"Solutions overview"}
          description={"Take a glance at our extensive company offering."}
          link={"/solutions"}
        />
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
        <ImageSubMenuItem
          image={"/assets/images/navbar/banks-overview.png"}
          title={"Solutions for banks"}
          description={"Revolutionize your bank financial operations."}
          link={"/solutions/banks"}
        />
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
        <ImageSubMenuItem
          image={"/assets/images/navbar/businesses-overview.png"}
          title={"Solutions for businesses"}
          description={"Leverage our versatile range of payment solutions."}
          link={"/solutions/business"}
        />
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
        <ImageSubMenuItem
          image={"/assets/images/navbar/consumers-overview.png"}
          title={"BPay wallet"}
          description={
            "Your one-stop digital wallet app for secure, instant, local and global payments."
          }
          link={"/solutions/consumers/bpay"}
        />
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
    <div className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4 border-r border-default">
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
    <div className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4 border-r border-default">
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
              <ImageSubMenuItem
                image={"/assets/images/navbar/solutions-overview.png"}
                title={"About us"}
                description={
                  "Read our journey to become region’s leading digital payment solutions provider."
                }
                link={"/about"}
              />
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

const LatestNewsItem = ({ image, description, mobile }) => {
  return (
    <div className={`${mobile ? "w-full p-4" : "w-[301px] p-2"}`}>
      <Image
        sizes="100vw"
        width={0}
        height={0}
        src={image}
        className={`${
          mobile ? "w-full min-h-[200px]" : "w-[285px] h-[160px]"
        } rounded mb-4`}
      />
      <p
        className={` ${
          mobile ? "text-[16px] leading-[24px]" : "text-[14px] leading-[18px]"
        } font-normal  text-primary line-clamp-2`}
      >
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
  const [resourcesMenuSelected, setResourcesMenuSelected] = useState("");
  return (
    <div className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]">
      <div className="flex w-[1312px] bg-white ">
        <div className="w-[336px] py-8 pr-4 border-r border-default">
          <p className="text-[12px] font-normal uppercase leading-[18px] text-secondary mb-4 px-3">
            Resources
          </p>
          <Link href={"/news"}>
            <MenuItem
              title={"News & Announcements"}
              setSelected={setResourcesMenuSelected}
              selected={resourcesMenuSelected}
            />
          </Link>
          <Link href={"/esg"}>
            <MenuItem
              title={"ESG"}
              setSelected={setResourcesMenuSelected}
              selected={resourcesMenuSelected}
            />
          </Link>
          <Link href={"/certifications"}>
            <MenuItem
              title={"Certifications"}
              setSelected={setResourcesMenuSelected}
              selected={resourcesMenuSelected}
            />
          </Link>
          <Link href={"/legal"}>
            <MenuItem
              title={"Legal"}
              setSelected={setResourcesMenuSelected}
              selected={resourcesMenuSelected}
            />
          </Link>
        </div>
        <div className="py-8 pl-6">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

const MobileMenuItem = ({ title, onClickSetState, setState }) => {
  return (
    <div
      className="flex justify-between py-6 px-4 border-b border-default"
      onClick={() => {
        if (onClickSetState) {
          setState((prevState) => {
            const newArray = [...prevState.stack, prevState.currentMenu];
            const newState = {
              ...prevState,
              stack: newArray,
              currentMenu: onClickSetState,
            };

            return newState;
          });
        }
      }}
    >
      <p className="text-primary text-[18px] font-normal leading-[28px]">
        {title}
      </p>
      <Image
        sizes="100vw"
        height={24}
        width={24}
        className="-rotate-90"
        src="/assets/icons/navbar/chevron.svg"
      />
    </div>
  );
};

const MobileMainMenu = ({ setState }) => {
  return (
    <div className="flex flex-col justify-between absolute bg-white top-[80px] z-[-1] w-full h-[calc(100dvh-80px)] overflow-auto">
      <div>
        <MobileMenuItem
          title="Solutions"
          onClickSetState="solutions-menu"
          setState={setState}
        />
        <MobileMenuItem
          title="Company"
          onClickSetState="company-menu"
          setState={setState}
        />
        <MobileMenuItem
          title="Resources"
          onClickSetState="resources-menu"
          setState={setState}
        />
      </div>
      <div className="px-4 pb-4 py-[22px]">
        <Link href="/contact-team">
          <button className=" text-center text-white bg-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  border border-brand-secondary  py-[15px] w-full font-medium rounded-sm">
            Contact our team
          </button>
        </Link>
      </div>
    </div>
  );
};

const MobileSolutionsMenu = ({ setState }) => {
  return (
    <div className="absolute bg-white top-[80px] z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Overview
      </p>
      <MobileMenuItem
        title="Solutions overview"
        onClickSetState="solutions-overview"
        setState={setState}
      />
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Solutions For
      </p>
      <MobileMenuItem
        title="Banks"
        onClickSetState="solutions-banks-menu"
        setState={setState}
      />
      <MobileMenuItem
        title="Businesses"
        onClickSetState="solutions-businesses-menu"
        setState={setState}
      />
      <MobileMenuItem
        title="Consumers"
        onClickSetState="solutions-consumers-menu"
        setState={setState}
      />
    </div>
  );
};

const MobileSolutionsOverviewMenu = () => {
  return (
    <div className="absolute bg-white top-[80px] z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Overview
      </p>
      <ImageSubMenuItem
        image={"/assets/images/navbar/solutions-overview.png"}
        title={"Solutions overview"}
        description={"Take a glance at our extensive company offering."}
        link={"/solutions/"}
        mobile={true}
      />
    </div>
  );
};

const MobileCompanyMenu = () => {
  return (
    <div className="absolute bg-white z-[-1] w-full h-svh overflow-auto">
      <h4 className="text-primary text-[20px] font-normal leading-[26px] py-6 px-4 border-b border-default">
        Our company provides numerous end-to-end digital payment products,
        services and solutions to banks, businesses, and consumers.
      </h4>
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Company
      </p>
      <div className="border-b border-default">
        <ImageSubMenuItem
          image={"/assets/images/navbar/solutions-overview.png"}
          title={"About us"}
          description={
            "Read our journey to become region’s leading digital payment solutions provider."
          }
          link={"/about"}
          mobile={true}
        />
      </div>
      <div className="pt-4 px-2 pb-6 flex flex-col gap-4">
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
  );
};

const MobileResourcesMenu = () => {
  return (
    <div className="absolute bg-white top-[80px] z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Resources
      </p>
      <Link href={"/news"}>
        <MobileMenuItem title="News & Announcements" />
      </Link>
      <Link href={"/esg"}>
        <MobileMenuItem title="ESG" />
      </Link>
      <Link href={"/certifications"}>
        <MobileMenuItem title="Certifications" />
      </Link>
      <Link href={"/legal"}>
        <MobileMenuItem title="Legal" />
      </Link>
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        From the blog
      </p>
      <LatestNewsItem
        image={"/assets/images/navbar/news1.png"}
        description={
          "ACI Worldwide and AFS to drive payments modernization for banks and merchants in the Middle East"
        }
        mobile={true}
      />
      <LatestNewsItem
        image={"/assets/images/navbar/news2.png"}
        description={
          "AFS Transaction Index: season-opening Bahrain GP delivers 66% surge in spends"
        }
        mobile={true}
      />
      <LatestNewsItem
        image={"/assets/images/navbar/news3.png"}
        description={
          "AFS enter strategic alliance with Xpence to innovate SME financial management in Bahrain"
        }
        mobile={true}
      />
    </div>
  );
};

const MobileSolutionBanksMenu = () => {
  return (
    <div className="absolute bg-white z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Overview
      </p>
      <ImageSubMenuItem
        image={"/assets/images/navbar/banks-overview.png"}
        title={"Solutions for banks"}
        description={"Revolutionize your bank financial operations."}
        link={"/solutions/banks"}
        mobile={true}
      />
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Solutions for banks
      </p>
      <div className="pt-4 px-2 pb-6 flex flex-col gap-4">
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
  );
};

const MobileSolutionBusinessesMenu = () => {
  return (
    <div className="absolute bg-white z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Overview
      </p>
      <ImageSubMenuItem
        image={"/assets/images/navbar/businesses-overview.png"}
        title={"Solutions for businesses"}
        description={"Leverage our versatile range of payment solutions."}
        link={"/solutions/business"}
        mobile={true}
      />
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Solutions & services for businesses
      </p>
      <div className="pt-4 px-2 pb-6 flex flex-col gap-4">
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
  );
};

const MobileSolutionConsumersMenu = () => {
  return (
    <div className="absolute bg-white z-[-1] w-full h-svh overflow-auto">
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Overview
      </p>
      <ImageSubMenuItem
        image={"/assets/images/navbar/consumers-overview.png"}
        title={"BPay wallet"}
        description={
          "Your one-stop digital wallet app for secure, instant, local and global payments."
        }
        link={"/solutions/consumers/bpay"}
        mobile={true}
      />
      <p className="uppercase text-[12px] font-normal leading-[18px] text-secondary bg-subtle-neutral py-3 px-4">
        Download BPAY
      </p>
      <div className="py-4 px-2">
        <div className="p-2">
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
            width={0}
            height={49}
            sizes="100vw"
            className="w-full"
            alt=""
          />

          <Image
            src={"/assets/icons/solutions/googleplay.svg"}
            width={0}
            height={49}
            sizes="100vw"
            className="ml-2 w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
