import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";

const OpenPositions = () => {
  const isotope = useRef();
  const [filterKeyLocation, setFilterKeyLocation] = useState("*");
  const [filterKeyDepartment, setFilterKeyDepartment] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "vertical",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
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
    isotope.current.arrange({ filter: filter });
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
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Business Analyst",
      department: "Opperations",
      location: "UAE",
      link: "/careers",
    },
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Bahrain",
      link: "/careers",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Oman",
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Bahrain",
      link: "/careers",
    },
    {
      title: "Business Analyst",
      department: "Opperations",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Senior Product Designer",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Bahrain",
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Business Analyst",
      department: "Opperations",
      location: "UAE",
      link: "/careers",
    },
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Bahrain",
      link: "/careers",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Commercial",
      location: "Oman",
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Finance",
      location: "Bahrain",
      link: "/careers",
    },
    {
      title: "Business Analyst",
      department: "Opperations",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Senior Product Designer",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Sales Executive, Merchant Acquiring",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
    {
      title: "Finance Manger & Strategy Manager",
      department: "Technology",
      location: "Egypt",
      link: "/careers",
    },
  ];
  return (
    <div
      className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24"
      id="position-table"
    >
      <p className="mb-4 text-secondary flex items-center font-light">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" />{" "}
        Open positions
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
        Join us in building market-leading digital payments solutions
      </h1>
      <div className="lg:flex items-start">
        <div className="mr-8 lg:grid gap-2 mb-4 lg:mb-0">
          <select
            className=" mr-2 lg:mr-0 border border-default w-36 md:w-48 rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
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
          <select
            className="border border-default w-36 md:w-48 rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white"
            onChange={(e) => handleFilterKeyDepartmentChange(e.target.value)}
          >
            <option value="*">Department</option>
            <option value="Commercial">Commercial</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div className="border border-default rounded lg:w-[calc(100%-200px)] filter-container">
          {positions.map((item, index) => (
            <div
              key={index}
              className={`filter-item ${item.location} ${item.department} ${
                index !== positions.length ? "border-b border-default" : ""
              }  px-4 py-2 md:flex items-center justify-between w-full`}
            >
              <h1 className="py-2 text-primary">{item.title}</h1>
              <div className="flex justify-between md:justify-start">
                <div className="py-2 flex mr-8">
                  <p className="text-primary pr-4 mr-4 border-r border-default text-sm md:text-lg">
                    {item.department}
                  </p>
                  <p className="text-primary text-sm md:text-base">
                    {item.location}
                  </p>
                </div>
                <Link to={item.link}>
                  <img
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
  );
};

export default OpenPositions;
