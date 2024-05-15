"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const PageNav = () => {
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

  const [selected, setSelected] = useState("banks");
  let observer = useRef(null);

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        // console.log("here>>", entries);
        entries.forEach((item) => {
          if (item.isIntersecting) {
            // console.log(">>>>", item.target, item.isIntersecting);
            if (item.target.id === "solution-for-banks") {
              setSelected("banks");
            } else if (item.target.id === "solution-for-businesses") {
              setSelected("businesses");
            } else if (item.target.id === "solution-for-consumers") {
              setSelected("consumers");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // console.log(selected);

    const observeTargets = pageNavData.map((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
        // console.log("observing ", element);
        return element;
      }
      return null;
    });

    return () => {
      // console.log("cleaning observers..");
      observeTargets.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  });
  return (
    <PageLayout>
      <div className="absolute top-10 md:top-24 w-[192px] h-full pb-[470px]">
        <div className="sticky top-[110px] mt-12 md:mt-0 hidden md:block">
          {pageNavData.map((navID) => (
            <p
              className={`mb-2 ${
                selected == navID.selector
                  ? "text-secondary"
                  : "text-tertiary hidden md:flex"
              } flex items-start cursor-pointer `}
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
                className="mr-2 mt-[6px]"
                alt=""
              />{" "}
              {navID.text}
            </p>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PageNav;
