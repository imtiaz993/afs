"use client";
import React from "react";
import Image from "next/image";

const PageNav = ({ selected }) => {
  const pageNavData = [
    {
      text: "Solutions for banks",
      id: "solution-for-banks",
      selector: "banks",
    },
    {
      text: "Solutions for businesses",
      id: "solution-for-businesses",
      selector: "businesses",
    },
    {
      text: "Solutions for consumers",
      id: "solution-for-consumers",
      selector: "consumers",
    },
  ];
  return (
    <div className="w-[192px] mt-12 md:mt-0 mr-8 md:sticky top-[110px] mb-6">
      {pageNavData.map((navID) => (
        <p
          className={`mb-2 ${
            selected == navID.selector
              ? "text-secondary"
              : "text-tertiary hidden md:flex"
          } flex items-center cursor-pointer `}
          onClick={() => {
            const section = document.getElementById(navID.id);
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          key={navID.selector}
        >
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src={` ${
              selected == navID.selector
                ? "/assets/icons/home/diamond.svg"
                : "/assets/icons/home/diamond-tertiary.svg"
            }`}
            className="mr-2"
            alt=""
          />{" "}
          {navID.text}
        </p>
      ))}
    </div>
  );
};

export default PageNav;
