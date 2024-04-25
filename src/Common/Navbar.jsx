import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const location = useLocation();
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

  const isHome = location.pathname === "/";

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const openAnimation = useSpring({
    from: { maxHeight: "44px" },
    to: {
      maxHeight: showOptions ? "1000px" : "44px",
    },
    config: { duration: "500" },
  });

  return (
    <div
      className={`px-[4.17%] mx-auto py-4 md:px-10 lg:px-16 sticky top-0 z-[999] transition-all duration-500  ${
        isHome
          ? colorChange
            ? "bg-white shadow-[0_6px_6px_-5px_rgba(0,0,0,0.2),0_-6px_6px_-50px_rgba(0,0,0,1)]"
            : "bg-white"
          : colorChange
          ? "bg-white shadow-[0_6px_6px_-5px_rgba(0,0,0,0.2),0_-6px_6px_-50px_rgba(0,0,0,1)]"
          : "bg-subtle-neutral"
      } `}
    >
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
        <animated.div className="overflow-hidden" style={openAnimation}>
          <div className={`lg:hidden h-[calc(100svh-32px)] overflow-auto`}>
            <div className="flex justify-between">
              <div>
                {!showOptions && (
                  <Link to="/">
                    <img
                      className="w-full"
                      src="/assets/icons/navbar/nav-logo.svg"
                      alt=""
                    />
                  </Link>
                )}
              </div>
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
            {showOptions && (
              <div className="flex justify-center items-center mt-10">
                <Link to="/">
                  <img
                    className=""
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
                <Link to="/">
                  <button className="transition-colors duration-500 text-center text-white bg-brand-secondary hover:text-brand-secondary border border-brand-secondary hover:bg-white py-4 w-[185px] font-medium rounded-sm mb-14">
                    Contact our team
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </animated.div>
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
        Solutions
        <img
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
        <div className="lg:absolute top-6 text-secondary lg:navbar-dropdown-shadow lg:rounded-md">
          <div className="lg:p-6 lg:bg-white text-dark flex flex-col lg:flex-row justify-between lg:w-[816px] rounded-md">
            <div>
              <h1 className="text-base font-medium text-primary mt-6">
                Solutions for banks
              </h1>
              <Link to="/" className="text-[15px] block mt-4">
                Card issuing & processing
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Digital banking
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Open banking
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Fraud & Risk management
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Value added services
              </Link>
            </div>

            <div>
              <h1 className="text-base font-medium text-primary mt-6">
                Solutions for businesses
              </h1>
              <Link to="/" className="text-[15px] block mt-4">
                Payment gateway
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                POS terminals
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                SoftPOS
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                eShop
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Merchant portal
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                HospitaLinkty
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                Food and beverage (F&B)
              </Link>
              <Link to="/" className="text-[15px] block mt-4">
                SME suite
              </Link>
            </div>

            <div>
              <h1 className="text-base font-medium text-primary mt-6">
                Solutions for consumer
              </h1>
              <Link to="/" className="text-[15px] block mt-4">
                BPay wallet
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
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
        Company
        <img
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
        <div className="lg:absolute top-6 text-secondary lg:navbar-dropdown-shadow lg:rounded-md">
          <div className="lg:p-6 lg:bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              <Link
                to="/about"
                className="text-[15px] whitespace-nowrap block mt-4 lg:mt-0"
              >
                About us
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                Our partners
              </Link>
              <Link
                to="/investor-relations"
                className="text-[15px] whitespace-nowrap block mt-4"
              >
                Investor relations
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                Careers
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
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
        onClick={() => {}}
      >
        Resources
        <img
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
        <div className="lg:absolute top-6 text-secondary lg:navbar-dropdown-shadow lg:rounded-md">
          <div className="lg:p-6 lg:bg-white text-dark flex justify-between w-fit rounded-md">
            <div>
              <Link
                to="/"
                className="text-[15px] whitespace-nowrap block mt-4 lg:mt-0"
              >
                News & Announcements
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                Become a vendor
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                ESG
              </Link>
              <Link to="/" className="text-[15px] whitespace-nowrap block mt-4">
                Certifications
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};
