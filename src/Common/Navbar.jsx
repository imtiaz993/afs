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
    <div className="px-[4.17%] mx-auto py-4 md:px-10 lg:px-16 sticky top-0 z-[999] bg-white">
      <div className="md:w-11/12 mx-auto">
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/assets/icons/navbar/nav-logo.svg" alt="" />
            </Link>
            <select className="ml-12 outline-none cursor-pointer text-primary">
              <option>Solutions</option>
            </select>
            <select className="ml-6 outline-none cursor-pointer text-primary">
              <option>Company</option>
            </select>
            <select className="ml-6 outline-none cursor-pointer text-primary">
              <option>Resources</option>
            </select>
          </div>
          <div className="flex items-center">
            <button className="text-center text-white bg-brand-secondary py-4 w-[185px] font-medium rounded-sm">
              Contact our team
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between">
            <Link href="/">
              <img className="w-3/4" src="/assets/icons/navbar/nav-logo.svg" alt="" />
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
              <select className="mb-10 outline-none cursor-pointer text-primary">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Solutions
                </option>
              </select>
              <select className="mb-10 outline-none cursor-pointer text-primary">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Company
                </option>
              </select>
              <select className="mb-10 outline-none cursor-pointer text-primary">
                <option
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  Resources
                </option>
              </select>
              <button
                className="text-center text-white bg-brand-secondary py-4 w-[185px] font-medium rounded-sm"
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
