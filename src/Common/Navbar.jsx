import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
  return (
    <div className="px-[4.17%] mx-auto py-4 md:px-10 lg:px-16 sticky top-0 z-[999] bg-white shadow-[rgba(0,0,15,0.2)_0px_0px_4px_0px]">
      <div className="md:w-11/12 mx-auto">
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/assets/icons/navbar/nav-logo.svg" alt="" />
            </Link>
            <select className="ml-12 outline-none cursor-pointer text-primary bg-transparent font-medium">
              <option>Solutions</option>
            </select>
            <select className="ml-6 outline-none cursor-pointer text-primary bg-transparent font-medium">
              <option>Company</option>
            </select>
            <select className="ml-6 outline-none cursor-pointer text-primary bg-transparent font-medium">
              <option>Resources</option>
            </select>
          </div>
          <div className="flex items-center">
            <button className="transition-colors duration-500 text-center text-white bg-brand-secondary  hover:text-brand-secondary border border-brand-secondary hover:bg-white py-4 w-[185px] font-medium rounded-sm">
              Contact our team
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between">
            <Link to="/">
              <img
                className="w-3/4"
                src="/assets/icons/navbar/nav-logo.svg"
                alt=""
              />
            </Link>
            {!showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                src="/assets/icons/navbar/NavbarToggle.svg"
                alt=""
              />
            )}
            {showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                src="/assets/icons/navbar/NavbarClose.svg"
                alt=""
              />
            )}
          </div>
          <div
            className={` ${showOptions ? "h-screen" : "h-0 overflow-hidden"}`}
          >
            <ul className="inline-flex flex-col mt-16">
              <select className="mb-10 outline-none cursor-pointer text-primary bg-transparent font-medium">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Solutions
                </option>
              </select>
              <select className="mb-10 outline-none cursor-pointer text-primary bg-transparent font-medium">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Company
                </option>
              </select>
              <select className="mb-10 outline-none cursor-pointer text-primary bg-transparent font-medium">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Resources
                </option>
              </select>
              <button
                className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-4 w-[185px] font-medium rounded-sm"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Contact our team
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
