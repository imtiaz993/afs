"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const loadIsotope = () => require("isotope-layout");

let Isotope;

const OpenPositions = () => {
  const isotope = useRef();
  const [filterKeyLocation, setFilterKeyLocation] = useState("*");
  const [filterKeyDepartment, setFilterKeyDepartment] = useState("*");

  useEffect(() => {
    if (typeof window === "undefined") return;
    Isotope = loadIsotope();
  }, []);

  useEffect(() => {
    if (Isotope && !isotope.current) {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "vertical",
      });
    }
  }, []);

  useEffect(() => {
    if (Isotope && isotope.current) {
      console.log(isotope.current);
      let filter = "";
      if (filterKeyLocation !== "*" && filterKeyDepartment !== "*") {
        filter = `.${filterKeyLocation}.${filterKeyDepartment}`;
      } else if (filterKeyLocation !== "*") {
        filter = `.${filterKeyLocation}`;
      } else if (filterKeyDepartment !== "*") {
        filter = `.${filterKeyDepartment}`;
      } else {
        filter = "*";
      }
      isotope.current.arrange({ filter });
    }
  }, [filterKeyLocation, filterKeyDepartment]);

  const handleFilterKeyLocationChange = (key) => {
    setFilterKeyLocation(key);
  };

  const handleFilterKeyDepartmentChange = (key) => {
    setFilterKeyDepartment(key);
  };

  const positions = [
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Business Analyst",
      department: "Operations",
      location: "UAE",
      link: "/careers/1",
    },
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Oman",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Business Analyst",
      department: "Operations",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Senior Product Designer",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Business Analyst",
      department: "Operations",
      location: "UAE",
      link: "/careers/1",
    },
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Oman",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Bahrain",
      link: "/careers/1",
    },
    {
      title: "Business Analyst",
      department: "Operations",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Senior Product Designer",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Technology",
      location: "Egypt",
      link: "/careers/1",
    },
  ];
  return (
    <PageLayout>
      <div className="py-10 lg:py-24" id="position-table">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          Open positions
        </p>
        <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
          Join us in building market-leading digital payments solutions
        </h2>
        <div className="lg:flex items-start">
          <div className="mr-8 lg:grid gap-2 mb-4 lg:mb-0">
            <div className="border border-default w-36 md:w-48 rounded-sm">
              <select
                className="w-full h-full px-4 py-3 border-r-[16px] border-transparent cursor-pointer mr-2 lg:mr-0 text-tertiary placeholder:text-tertiary outline-none bg-white"
                onChange={(e) => {
                  handleFilterKeyLocationChange(e.target.value);
                }}
              >
                <option value="*">Location</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Egypt">Egypt</option>
                <option value="UAE">UAE</option>
                <option value="Oman">Oman</option>
              </select>
            </div>
            <div className="border border-default w-36 md:w-48 rounded-sm">
              <select
                className="w-full h-full px-4 py-3 border-r-[16px] border-transparent  cursor-pointer text-tertiary placeholder:text-tertiary outline-none bg-white"
                onChange={(e) =>
                  handleFilterKeyDepartmentChange(e.target.value)
                }
              >
                <option value="*">Department</option>
                <option value="Commercial">Commercial</option>
                <option value="Finance">Finance</option>
                <option value="Design">Design</option>
                <option value="Technology">Technology</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>
          <div className="border border-default rounded lg:w-[calc(100%-200px)] filter-container">
            {positions.map((item, index) => (
              <div
                key={index}
                className={`filter-item ${item.location} ${item.department} ${
                  index !== positions.length ? "border-b border-default" : ""
                }  px-4 py-2 md:flex items-center justify-between w-full`}
              >
                <h6 className="py-2 text-primary font-regular">{item.title}</h6>
                <div className="flex justify-between md:justify-start">
                  <div className="py-2 flex items-center mr-8">
                    <p className="text-primary pr-4 mr-4 border-r border-default text-sm md:text-base">
                      {item.department}
                    </p>
                    <p className="text-primary text-sm md:text-base">
                      {item.location}
                    </p>
                  </div>
                  <Link href={item.link}>
                    <Image
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="w-10 h-10"
                      src="/assets/icons/careers/arrow-right.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OpenPositions;
