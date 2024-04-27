import React from "react";
import { Link } from "react-router-dom";

const OpenPositions = () => {
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
    <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-24">
      <p className="mb-4 text-secondary flex items-center">
        <img src="/assets/icons/home/diamond.svg" className="mr-2" alt="" />{" "}
        Open positions
      </p>
      <h1 className="text-primary text-2xl md:text-5xl mb-10 md:mb-16 max-w-[976px] leading-[120%]">
        Join us in building market-leading digital payments solutions
      </h1>
      <div className="lg:flex items-start">
        <div className="mr-8 lg:grid gap-2 mb-4 lg:mb-0">
          <select className=" mr-2 lg:mr-0 border border-default w-36 md:w-48 rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white">
            <option value="">Location</option>
            <option value="">Location 1</option>
            <option value="">Location 2</option>
            <option value="">Location 3</option>
          </select>
          <select className="border border-default w-36 md:w-48 rounded-sm py-3 px-4 text-tertiary placeholder:text-tertiary outline-none bg-white">
            <option value="">Department</option>
            <option value="">Department 1</option>
            <option value="">Department 2</option>
            <option value="">Department 3</option>
          </select>
        </div>
        <div className="border border-default rounded lg:w-[calc(100%-200px)]">
          {positions.map((item, index) => (
            <div
              key={index}
              className={`${
                index !== positions.length ? "border-b border-default" : ""
              }  px-4 py-2 md:flex items-center justify-between`}
            >
              <h1 className="py-2 text-primary">
                {item.title}
              </h1>
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
