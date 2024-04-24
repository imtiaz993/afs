import React, { useEffect, useState, useRef } from "react";
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
            <Solutions />
            <Company />
            <Resources />
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
            className={`flex flex-col justify-center items-center ${
              showOptions ? "h-screen" : "h-0 overflow-hidden"
            }`}
          >
            <ul className="inline-flex flex-col mt-[calc(-33px-4.17%)]">
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

const Solutions = () => {
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

  return (
    <div
      className="ml-12 outline-none  bg-transparent relative"
      ref={solutionsDropdownRef}
      onMouseLeave={() => {
        setSolutionsMenu(false);
      }}
      onMouseEnter={() => setSolutionsMenu(true)}
    >
      <button className="flex items-center text-primary cursor-pointer">
        Solutions
        <img
          className={`ml-2 transition-all duration-200 ${
            solutionsMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      {solutionsMenu && (
        <div className="absolute top-6 text-secondary navbar-dropdown-shadow rounded-md">
          <div className="p-6 bg-white text-dark flex justify-between w-[816px] rounded-md">
            <div>
              <h1 className="font-medium text-primary"> Solutions for banks</h1>
              <Link to="/" className="text-[15px] block mt-6">
                Card issuing & processing
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                Digital banking
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                {" "}
                Open banking
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                Fraud & Risk management
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                Value added services
              </Link>
            </div>

            <div>
              <h1 className="font-medium text-primary">
                Solutions for businesses
              </h1>
              <Link to="/" className="text-[15px] block mt-6">
                Payment gateway
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                POS terminals
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                SoftPOS
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                eShop
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                Merchant portal
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                HospitaLinkty
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                Food and beverage (F&B)
              </Link>
              <Link to="/" className="text-[15px] block mt-3">
                SME suite
              </Link>
            </div>

            <div>
              <h1 className="font-medium text-primary">
                Solutions for consumer
              </h1>
              <Link to="/" className="text-[15px] block mt-6">
                BPay wallet
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Company = () => {
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

  return (
    <div
      className="ml-6 outline-none bg-transparent relative"
      ref={companyDropdownRef}
      onMouseLeave={() => {
        setCompanyMenu(false);
      }}
      onMouseEnter={() => setCompanyMenu(true)}
    >
      <button className="flex items-center text-primary cursor-pointer font-medium ">
        Company
        <img
          className={`ml-2 transition-all duration-200 ${
            companyMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      {companyMenu && (
        <div className="absolute top-6 text-secondary navbar-dropdown-shadow rounded-md">
          <div className="p-6 bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              <Link to="/" className="text-[15px] whitespace-nowrap block">
                About us
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Our partners
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Investor relations
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Careers
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Resources = () => {
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

  return (
    <div
      className="ml-6 outline-none bg-transparent relative"
      ref={resourcesDropdownRef}
      onMouseLeave={() => {
        setResourcesMenu(false);
      }}
      onMouseEnter={() => setResourcesMenu(true)}
    >
      <button className="flex items-center text-primary cursor-pointer font-medium">
        Resources
        <img
          className={`ml-2 transition-all duration-200 ${
            resourcesMenu ? "-rotate-180" : "rotate-0"
          }`}
          src="/assets/icons/navbar/chevron.svg"
          alt=""
        />
      </button>
      {resourcesMenu && (
        <div className="absolute top-6 text-secondary navbar-dropdown-shadow rounded-md">
          <div className="p-6 bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              <Link to="/" className="text-[15px] whitespace-nowrap block">
                News & Announcements
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Become a vendor
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                ESG
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-3">
                Certifications
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
