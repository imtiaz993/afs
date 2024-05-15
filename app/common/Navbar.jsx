"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "@/i18n.config";
import { Link } from "@/i18n.config";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import PageLayout from "./PageLayout";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showOptions && window) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [showOptions]);

  const isHome = pathname === "/";

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);

      return () => window.removeEventListener("scroll", changeNavbarColor);
    }
  }, []);

  const openAnimation = useSpring({
    from: { maxHeight: "44px" },
    to: {
      maxHeight: showOptions ? "1500px" : "44px",
    },
    config: { duration: "500" },
  });

  return (
    <div className="lg:sticky top-0 z-[999]">
      <div
        className={`py-4 fixed top-0 left-0 right-0 lg:sticky z-[999] transition-all duration-500  ${
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
              <Solutions />
              <Company />
              <Resources />
            </div>
            <div className="flex items-center">
              <LocaleSwitcher locale={locale} />
              <Link href="/contact">
                <button className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[15px] w-[185px] font-medium rounded-sm">
                  {t("contact team")}
                </button>
              </Link>
            </div>
          </div>
          <animated.div className="overflow-hidden" style={openAnimation}>
            <div className={`lg:hidden h-[calc(100vh-16px)] overflow-auto`}>
              <div className="flex items-center justify-between">
                <div>
                  {!showOptions && (
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
                  )}
                </div>
                <div className="flex items-center">
                  <div className={`${showOptions ? "mt-4" : ""}`}>
                    <LocaleSwitcher locale={locale} />
                  </div>
                  {!showOptions && (
                    <Image
                      sizes="100vw"
                      width={22}
                      height={22}
                      onClick={() => {
                        setShowOptions(!showOptions);
                      }}
                      src="/assets/icons/navbar/NavbarToggle.svg"
                      alt=""
                    />
                  )}
                  {showOptions && (
                    <Image
                      sizes="100vw"
                      width={22}
                      height={22}
                      onClick={() => {
                        setShowOptions(!showOptions);
                      }}
                      className="mt-4"
                      src="/assets/icons/navbar/NavbarClose.svg"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {showOptions && (
                <div className="flex justify-center items-center mt-10">
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
                </div>
              )}
              <div
                className={`flex flex-col justify-start items-center  ${
                  showOptions
                    ? "h-auto mt-28 overflow-auto"
                    : "h-0 overflow-hidden"
                }`}
              >
                <ul className="flex flex-col w-[185px] justify-center">
                  <div className="mb-6">
                    <Solutions />
                  </div>
                  <div className="mb-6">
                    <Company />
                  </div>
                  <div className="mb-6">
                    <Resources />
                  </div>
                  <div className="mb-40">
                    <Link href="/contact">
                      <button className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-[15px] w-[185px] font-medium rounded-sm">
                        {t("contact team")}
                      </button>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </animated.div>
        </PageLayout>
      </div>
      <div className="mb-[76px] lg:hidden"></div>
    </div>
  );
};

export default Navbar;

const Solutions = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const solutionsLinks = t.raw("solutions");
  const isArabic = locale === "ar";

  const solutionsDropdownRef = useRef(null);
  const [solutionsMenu, setSolutionsMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (
      solutionsDropdownRef.current &&
      !solutionsDropdownRef.current.contains(event.target)
    ) {
      setSolutionsMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: solutionsMenu ? "1000px" : "0px",
    },
    config: { duration: "750" },
  });

  return (
    <div
      className="lg:ml-12 outline-none bg-transparent relative"
      ref={solutionsDropdownRef}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setSolutionsMenu(false);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setSolutionsMenu(true);
        }
      }}
    >
      <button
        className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
        onClick={() => {
          setSolutionsMenu(!solutionsMenu);
        }}
      >
        {solutionsLinks.title}
        <Image
          sizes="100vw"
          width={12}
          height={6}
          className={`ml-2 transition-all duration-200 ${
            solutionsMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      <animated.div
        className={`overflow-hidden ${
          solutionsMenu ? "lg:block" : "lg:hidden"
        }`}
        style={openAnimation}
      >
        <div className="lg:absolute top-6 text-secondary lg:rounded-md navbar-dropdown-shadow">
          <div className="lg:p-6 lg:bg-white text-dark flex flex-col lg:flex-row justify-between lg:w-[816px] rounded-md">
            <div>
              <p
                className={`text-base font-medium text-primary mt-6 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {solutionsLinks["solutions for banks"].title}
              </p>
              {solutionsLinks["solutions for banks"].links.map(
                (item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`text-[15px] block mt-4 ${
                      isArabic ? "text-right" : ""
                    }  `}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>

            <div>
              <p
                className={`text-base font-medium text-primary mt-6 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {solutionsLinks["solutions for businesses"].title}
              </p>
              {solutionsLinks["solutions for businesses"].links.map(
                (item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`text-[15px] block mt-4 ${
                      isArabic ? "text-right" : ""
                    } `}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>

            <div>
              <p
                className={`text-base font-medium text-primary mt-6 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {solutionsLinks["solutions for consumer"].title}
              </p>
              {solutionsLinks["solutions for consumer"].links.map(
                (item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`text-[15px] block mt-4 ${
                      isArabic ? "text-right" : ""
                    }  `}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

const Company = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const companyLinks = t.raw("company");
  const isArabic = locale === "ar";

  const companyDropdownRef = useRef(null);
  const [companyMenu, setCompanyMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (
      companyDropdownRef.current &&
      !companyDropdownRef.current.contains(event.target)
    ) {
      setCompanyMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: companyMenu ? "200px" : "0px",
    },
    config: { duration: "300" },
  });

  return (
    <div
      className="lg:ml-6 outline-none bg-transparent relative"
      ref={companyDropdownRef}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setCompanyMenu(false);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setCompanyMenu(true);
        }
      }}
    >
      <button
        className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium "
        onClick={() => {
          setCompanyMenu(!companyMenu);
        }}
      >
        {companyLinks.title}
        <Image
          sizes="100vw"
          width={12}
          height={6}
          className={`ml-2 transition-all duration-200 ${
            companyMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      <animated.div
        className={`overflow-hidden ${companyMenu ? "lg:block" : "lg:hidden"}`}
        style={openAnimation}
      >
        <div className="lg:absolute top-6 text-secondary navbar-dropdown-shadow lg:rounded-md">
          <div className="lg:p-6 lg:bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              {companyLinks.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`text-[15px] whitespace-nowrap block ${
                    isArabic ? "text-right" : ""
                  }  ${index === 0 ? "mt-4 lg:mt-0" : "mt-4"}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

const Resources = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const resourcesLink = t.raw("resources");
  const isArabic = locale === "ar";

  const resourcesDropdownRef = useRef(null);
  const [resourcesMenu, setResourcesMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (
      resourcesDropdownRef.current &&
      !resourcesDropdownRef.current.contains(event.target)
    ) {
      setResourcesMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: {
      maxHeight: resourcesMenu ? "200px" : "0px",
    },
    config: { duration: "300" },
  });

  return (
    <div
      className="lg:ml-6 outline-none bg-transparent relative"
      ref={resourcesDropdownRef}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setResourcesMenu(false);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setResourcesMenu(true);
        }
      }}
    >
      <button
        className="w-full justify-between lg:justify-center flex items-center text-primary cursor-pointer font-medium"
        onClick={() => {
          setResourcesMenu(!resourcesMenu);
        }}
      >
        {resourcesLink.title}
        <Image
          sizes="100vw"
          width={12}
          height={6}
          className={`ml-2 transition-all duration-200 ${
            resourcesMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      <animated.div
        className={`overflow-hidden ${
          resourcesMenu ? "lg:block" : "lg:hidden"
        }`}
        style={openAnimation}
      >
        <div className="lg:absolute top-6 text-secondary  navbar-dropdown-shadow lg:rounded-md">
          <div className="lg:p-6 lg:bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              {resourcesLink.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`text-[15px] whitespace-nowrap block ${
                    isArabic ? "text-right" : ""
                  }  ${index === 0 ? "mt-4 lg:mt-0" : "mt-4"}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};
