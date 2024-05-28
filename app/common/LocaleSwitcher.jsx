"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useTranslations } from "next-intl";
import { localeNames, locales, usePathname, useRouter } from "@/i18n.config";

export default function LocaleSwitcher({ locale }) {
  const t = useTranslations();
  const isArabic = locale === "ar";
  const currentLocale = t.locale;
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (value) => {
    const newLocale = value;

    // ...if the user chose Arabic ("ar"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar/about`.
    router.replace(pathname, { locale: newLocale });
  };

  const localesDropdownRef = useRef(null);
  const [localesMenu, setLocalesMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (
      localesDropdownRef.current &&
      !localesDropdownRef.current.contains(event.target)
    ) {
      setLocalesMenu(false);
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
      maxHeight: localesMenu ? "1000px" : "0px",
    },
    config: { duration: "750" },
  });

  return (
    <div
      className={` outline-none lg:relative ${
        isArabic ? "ml-6 lg:ml-8" : "mr-6 lg:mr-8"
      }`}
      ref={localesDropdownRef}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setLocalesMenu(false);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setLocalesMenu(true);
        }
      }}
    >
      <button
        className="justify-between lg:justify-center flex items-center text-primary cursor-pointer"
        onClick={() => {
          setLocalesMenu(!localesMenu);
        }}
      >
        {/* <Image
          sizes="100vw"
          width={0}
          height={0}
          className={`mr-2 w-auto`}
          src="/assets/icons/contact/flag2.svg"
          alt=""
        />
        UAE
        <span className="mx-2 inline-block w-1 h-1 rounded-full bg-tertiary"></span> */}
        {localeNames[locale]}
        <Image
          sizes="100vw"
          width={12}
          height={6}
          className={`transition-all duration-200 ${
            isArabic ? "mr-2" : "ml-2"
          } ${localesMenu ? "-rotate-180" : "rotate-0"}`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      <animated.div
        className={`overflow-hidden ${localesMenu ? "block" : "hidden"}`}
        style={openAnimation}
      >
        <div
          className={`w-24 absolute z-[999999999px] top-14 lg:top-6 text-secondary locale-dropdown-shadow rounded-md ${
            isArabic
              ? "left-11 md:left-16 lg:-left-[14px]"
              : "right-11 md:right-16 lg:-right-[14px]"
          }`}
        >
          <ul className="w-full py-2 bg-white text-dark flex flex-col justify-between rounded-md">
            {locales.map((loc) => (
              <li
                key={loc}
                onClick={() => {
                  changeLocale(loc);
                }}
                className={`text-[15px] px-4 py-2 cursor-pointer hover:bg-subtle-neutral ${
                  loc === "en" ? "text-left" : "text-right"
                }`}
              >
                {localeNames[loc]}
              </li>
            ))}
          </ul>
        </div>
      </animated.div>
    </div>
  );
}
