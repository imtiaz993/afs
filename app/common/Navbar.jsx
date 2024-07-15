"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname, Link, useRouter } from "i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import PageLayout from "./PageLayout";
import LocaleSwitcher from "./LocaleSwitcher";
import { newsPostData } from "app/[locale]/(pages)/news/newsPostData";

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

function useWindowWidth() {
  const [resizeX, setResizeX] = useState(0);

  useEffect(() => {
    function handleResize() {
      setResizeX(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return resizeX;
}

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const scrollY = useScrollPosition();
  const windowWidth = useWindowWidth();
  const [colorChange, setColorchange] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState({
    timerId: 0,
    selectedMenu: "",
  });
  const [mobileMenu, setMobileMenu] = useState({
    currentMenu: "",
    stack: [],
  });

  const [toBeRemovedFromStack, setToBeRemovedFromStack] = useState();
  console.log(toBeRemovedFromStack);

  const isHome = pathname === "/";
  const isArabic = locale === "ar";
  const isAtTop = scrollY === 0;

  function onMouseLeaveMenu() {
    const timer = setTimeout(() => {
      setNavbarMenu({ timerId: 0, selectedMenu: "" });
    }, 500);

    setNavbarMenu((prevState) => {
      const newState = {
        ...prevState,
        timerId: timer,
      };

      return newState;
    });
  }

  function onMouseEnterMenu(menuSelected) {
    setNavbarMenu((prevState) => {
      if (prevState) {
        clearTimeout(prevState.timerId);
      }

      const newState = {
        timerId: 0,
        selectedMenu: menuSelected,
      };

      return newState;
    });
  }

  function onMouseClickMenu(menuClicked) {
    setNavbarMenu((prevState) => {
      let newState;

      prevState.selectedMenu.length == 0
        ? (newState = {
            ...prevState,
            selectedMenu: menuClicked,
          })
        : prevState.selectedMenu == menuClicked
        ? (newState = { ...prevState, selectedMenu: "" })
        : (newState = {
            ...prevState,
            selectedMenu: menuClicked,
          });
      return newState;
    });
  }

  // useEffect(() => {
  //   const closeMenu = () => {
  //     setNavbarMenu({ timerId: 0, selectedMenu: "" });
  //   };

  //   window.addEventListener("click", closeMenu);

  //   return () => {
  //     window.removeEventListener("click", closeMenu);
  //   };
  // });

  useEffect(() => {
    setColorchange(!isAtTop);
    if (
      navbarMenu.selectedMenu.length != 0 ||
      mobileMenu.currentMenu.length != 0
    )
      setColorchange(true);

    if (mobileMenu.currentMenu != "") document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isAtTop, navbarMenu, mobileMenu]);

  useEffect(() => {
    if (windowWidth < 1280 && navbarMenu.selectedMenu != "")
      setNavbarMenu({
        timerId: 0,
        selectedMenu: "",
      });
    if (windowWidth > 1280 && mobileMenu.currentMenu.length != 0)
      setMobileMenu({ currentMenu: "", stack: [] });
  }, [windowWidth]);

  return (
    <div className="sticky top-0 z-[999] ">
      <div className="">
        <div
          className={`pt-5 pb-5 xl:pb-6 top-0 left-0 right-0 sticky z-50 transition-all duration-300 ${
            isHome
              ? colorChange
                ? "bg-white shadow-[0px_1px_3px_0px_rgba(5,36,96,0.10)]"
                : "bg-white"
              : colorChange
              ? "bg-white shadow-[0px_1px_3px_0px_rgba(5,36,96,0.10)]"
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
                      setToBeRemovedFromStack(mobileMenu.currentMenu);
                      setTimeout(() => {
                        setToBeRemovedFromStack();
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
                          return newState;
                        });
                      }, 300);
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
                  <div
                    className={`${isArabic ? "lg:mr-12" : "lg:ml-12"}`}
                    onMouseEnter={() => onMouseEnterMenu("Solutions")}
                    onMouseLeave={onMouseLeaveMenu}
                  >
                    <button
                      className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                      onClick={() => onMouseClickMenu("Solutions")}
                    >
                      Solutions
                      <Image
                        sizes="100vw"
                        width={12}
                        height={6}
                        className={`transition-all duration-200 ${
                          navbarMenu.selectedMenu == "Solutions"
                            ? "-rotate-180"
                            : "rotate-0"
                        } ${isArabic ? "mr-2" : "ml-2"}`}
                        src="/assets/icons/navbar/chevron.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className={`${isArabic ? "lg:mr-6" : "lg:ml-6"}`}
                    onMouseEnter={() => onMouseEnterMenu("Company")}
                    onMouseLeave={onMouseLeaveMenu}
                  >
                    <button
                      className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                      onClick={() => onMouseClickMenu("Company")}
                    >
                      Company
                      <Image
                        sizes="100vw"
                        width={12}
                        height={6}
                        className={`transition-all duration-200 ${
                          navbarMenu.selectedMenu == "Company"
                            ? "-rotate-180"
                            : "rotate-0"
                        } ${isArabic ? "mr-2" : "ml-2"}`}
                        src="/assets/icons/navbar/chevron.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className={`${isArabic ? "lg:mr-6" : "lg:ml-6"}`}
                    onMouseEnter={() => onMouseEnterMenu("Resources")}
                    onMouseLeave={onMouseLeaveMenu}
                  >
                    <button
                      className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
                      onClick={() => onMouseClickMenu("Resources")}
                    >
                      Resources
                      <Image
                        sizes="100vw"
                        width={12}
                        height={6}
                        className={`transition-all duration-200 ${
                          navbarMenu.selectedMenu == "Resources"
                            ? "-rotate-180"
                            : "rotate-0"
                        } ${isArabic ? "mr-2" : "ml-2"}`}
                        src="/assets/icons/navbar/chevron.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden xl:flex items-center">
                {/* <LocaleSwitcher locale={locale} /> */}
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
      {navbarMenu.selectedMenu == "Solutions" && (
        <SolutionsMenu
          onMouseEnterMenu={onMouseEnterMenu}
          onMouseLeaveMenu={onMouseLeaveMenu}
        />
      )}
      {navbarMenu.selectedMenu == "Company" && (
        <CompanyMenu
          onMouseEnterMenu={onMouseEnterMenu}
          onMouseLeaveMenu={onMouseLeaveMenu}
        />
      )}
      {navbarMenu.selectedMenu == "Resources" && (
        <ResourcesMenu
          onMouseEnterMenu={onMouseEnterMenu}
          onMouseLeaveMenu={onMouseLeaveMenu}
        />
      )}
      {(mobileMenu?.stack.includes("main-menu") ||
        mobileMenu?.currentMenu === "main-menu") && (
        <MobileMainMenu
          toBeRemovedFromStack={toBeRemovedFromStack}
          setState={setMobileMenu}
          router={router}
          pathname={pathname}
          locale={locale}
        />
      )}
      {(mobileMenu?.stack.includes("solutions-menu") ||
        mobileMenu?.currentMenu === "solutions-menu") && (
        <MobileSolutionsMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("solutions-overview") ||
        mobileMenu?.currentMenu === "solutions-overview") && (
        <MobileSolutionsOverviewMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("company-menu") ||
        mobileMenu?.currentMenu === "company-menu") && (
        <MobileCompanyMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("resources-menu") ||
        mobileMenu?.currentMenu === "resources-menu") && (
        <MobileResourcesMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("solutions-banks-menu") ||
        mobileMenu?.currentMenu === "solutions-banks-menu") && (
        <MobileSolutionBanksMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("solutions-businesses-menu") ||
        mobileMenu?.currentMenu === "solutions-businesses-menu") && (
        <MobileSolutionBusinessesMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
      )}
      {(mobileMenu?.stack.includes("solutions-consumers-menu") ||
        mobileMenu?.currentMenu === "solutions-consumers-menu") && (
        <MobileSolutionConsumersMenu
          setState={setMobileMenu}
          toBeRemovedFromStack={toBeRemovedFromStack}
        />
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
        } hover:bg-subtle-neutral hover:cursor-pointer `}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <div className="relative">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={image}
            className={` ${
              mobile
                ? "h-[167px] sm:h-[267px] md:h-[367px] lg:h-[467px] object-cover object-top"
                : "h-[140px] object-cover object-top"
            } w-full rounded mb-3 `}
          />
          <div className="absolute rounded inset-0 menu-item-gradient"></div>
        </div>
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
        className={`p-2 ${
          window.innerWidth > 1280 ? "w-[302px]" : "w-full"
        }  hover:bg-subtle-neutral hover:cursor-pointer`}
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
    <div className="flex ">
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
            title={"AFS Pay - SoftPOS"}
            description={"Smart point-of-sale in your pocket."}
            link={"/solutions/business/afspay-softpos"}
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
            title={"AFS One - Food and Beverage"}
            description={"Your restaurant-first full featured point-of-sale."}
            link={"/solutions/business/afsone-food-beverage"}
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
          <Link href="https://apps.apple.com/us/app/afs-bpay/id1629591483">
            <Image
              src={"/assets/icons/solutions/appstore.svg"}
              width={113}
              height={32}
              sizes="100vw"
              className=""
              alt=""
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.afs.bpay&hl=en&gl=US">
            <Image
              src={"/assets/icons/solutions/googleplay.svg"}
              width={113}
              height={32}
              sizes="100vw"
              className="ml-2"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SolutionsMenu = ({ onMouseEnterMenu, onMouseLeaveMenu }) => {
  const [solutionsMenuSelected, setSolutionsMenuSelected] =
    useState("Overview");
  return (
    <div
      className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]"
      onMouseEnter={() => onMouseEnterMenu("Solutions")}
      onMouseLeave={onMouseLeaveMenu}
    >
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

const CompanyMenu = ({ onMouseEnterMenu, onMouseLeaveMenu }) => {
  return (
    <div
      className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]"
      onMouseEnter={() => onMouseEnterMenu("Company")}
      onMouseLeave={onMouseLeaveMenu}
    >
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

const LatestNewsItem = ({ image, description, mobile, link }) => {
  console.log("latestnewsitem>> ", image, description);
  return (
    <div
      className={`${
        mobile ? "w-full p-4" : "w-[301px] p-2"
      } hover:bg-subtle-neutral rounded`}
    >
      <Link href={"/news/" + link}>
        <div className="relative rounded">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={image}
            className={`${
              mobile ? "w-full min-h-[200px]" : "w-[285px] h-[160px]"
            } rounded mb-4 `}
          />
          <div className="rounded absolute inset-0 menu-item-gradient"></div>
        </div>
        <p
          className={` ${
            mobile ? "text-[16px] leading-[24px]" : "text-[14px] leading-[18px]"
          } font-normal  text-primary line-clamp-2`}
        >
          {description}
        </p>
      </Link>
    </div>
  );
};

const LatestNews = () => {
  const t = useTranslations("NewsPostData");
  const latestNews = t.raw("latest news").slice(0, 3);

  return (
    <div className="">
      <p className="uppercase text-secondary text-[12px] font-normal leading-[18px] px-2 mb-4">
        Latest News
      </p>
      <div className="grid grid-cols-3 gap-6">
        <LatestNewsItem
          image={latestNews[0].image}
          description={latestNews[0].title}
          link={latestNews[0].slug}
        />
        <LatestNewsItem
          image={latestNews[1].image}
          description={latestNews[1].title}
          link={latestNews[1].slug}
        />
        <LatestNewsItem
          image={latestNews[2].image}
          description={latestNews[2].title}
          link={latestNews[2].slug}
        />
      </div>
    </div>
  );
};

const ResourcesMenu = ({ onMouseEnterMenu, onMouseLeaveMenu }) => {
  const [resourcesMenuSelected, setResourcesMenuSelected] = useState("");
  return (
    <div
      className="flex absolute bg-white top-[100px] z-[-1] w-full justify-center shadow-[1px_3px_6px_0px_rgba(5,36,96,0.10)]"
      onMouseEnter={() => onMouseEnterMenu("Resources")}
      onMouseLeave={onMouseLeaveMenu}
    >
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

const MobileMainMenu = ({
  toBeRemovedFromStack,
  setState,
  router,
  pathname,
  locale,
}) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "main-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      } flex flex-col justify-between absolute bg-white pt-[80px] top-0 z-10 w-full h-dvh overflow-auto`}
    >
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
        {/* // mobile locale switcher */}
        {/* <div className=" border border-default  py-3 px-4 mb-4 bg-subtle-neutral">
          <select
            className="text-primary bg-subtle-neutral w-full"
            onChange={(event) => {
              router.replace(pathname, { locale: event.target.value });
            }}
          >
            <option value="en" selected={locale == "en"}>
              English
            </option>
            <option value="ar" selected={locale == "ar"}>
              العربيه
            </option>
          </select>
        </div> */}
        <Link href="/contact-team">
          <button className=" text-center text-white bg-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary  border border-brand-secondary  py-[15px] w-full font-medium rounded-sm">
            Contact our team
          </button>
        </Link>
      </div>
    </div>
  );
};

const MobileSolutionsMenu = ({ toBeRemovedFromStack, setState }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "solutions-menu") {
      console.log("JJKJLKJkl");
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);

  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white pt-[80px] top-0 z-20 w-full h-dvh overflow-auto`}
    >
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

const MobileSolutionsOverviewMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "solutions-overview") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white pt-[80px] top-0 z-30 w-full h-dvh overflow-auto`}
    >
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

const MobileCompanyMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "company-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white z-20 w-full pt-[80px] top-0 h-dvh overflow-auto`}
    >
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

const MobileResourcesMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "resources-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  const t = useTranslations("NewsPostData");
  const latestNews = t.raw("latest news").slice(0, 3);

  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white pt-[80px] top-0 z-20 w-full h-dvh overflow-auto`}
    >
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
        image={latestNews[0].image}
        description={latestNews[0].title}
        link={latestNews[0].slug}
        mobile={true}
      />
      <LatestNewsItem
        image={latestNews[1].image}
        description={latestNews[1].title}
        link={latestNews[1].slug}
        mobile={true}
      />
      <LatestNewsItem
        image={latestNews[2].image}
        description={latestNews[2].title}
        link={latestNews[2].slug}
        mobile={true}
      />
    </div>
  );
};

const MobileSolutionBanksMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "solutions-banks-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white z-20 w-full h-dvh top-0 pt-[80px] overflow-auto`}
    >
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

const MobileSolutionBusinessesMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "solutions-businesses-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white z-20 w-full top-0 pt-[80px] h-dvh overflow-auto`}
    >
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
          title={"AFS Pay - SoftPOS"}
          description={"Smart point-of-sale in your pocket."}
          link={"/solutions/business/afspay-softpos"}
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
          title={"AFS One - Food and Beverage"}
          description={"Your restaurant-first full featured point-of-sale."}
          link={"/solutions/business/afsone-food-beverage"}
        />
      </div>
    </div>
  );
};

const MobileSolutionConsumersMenu = ({ toBeRemovedFromStack }) => {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1);
  useEffect(() => {
    if (toBeRemovedFromStack == "solutions-consumers-menu") {
      setAnimate(false);
    }
  }, [toBeRemovedFromStack]);
  return (
    <div
      className={`mobile-animate-menu ${
        animate ? "right-0" : "right-[-100%]"
      }  absolute bg-white z-20 w-full top-0 pt-[80px] h-dvh overflow-auto`}
    >
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
          <Link href="https://apps.apple.com/us/app/afs-bpay/id1629591483">
            <Image
              src={"/assets/icons/solutions/appstore.svg"}
              width={0}
              height={49}
              sizes="100vw"
              className="w-full"
              alt=""
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.afs.bpay&hl=en&gl=US">
            <Image
              src={"/assets/icons/solutions/googleplay.svg"}
              width={0}
              height={49}
              sizes="100vw"
              className="ml-2 w-full"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
