import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="w-11/12 lg:w-10/12 mx-auto py-10  lg:py-24">
        <div className="mb-16">
          <img src="/assets/icons/footer/logo.svg" alt="" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <h1 className="mb-6 font-medium text-primary">
              Solutions for banks
            </h1>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Card issuing & processing
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Digital banking
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Open banking
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Fraud & Risk management
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Value added services
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-6 font-medium text-primary">
              Solutions for businesses
            </h1>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Payment gateway
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              POS terminals
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              SoftPOS
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              eShop
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Merchant portal
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Hospitality
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Food and beverage (F&B)
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              SME suite
            </Link>
            <h1 className="mt-8 mb-6 font-medium text-primary">
              Solutions for consumer
            </h1>
            <Link className="mb-3 text-sm text-secondary" to="/">
              BPay wallet
            </Link>
          </div>
          <div className="flex flex-col sm:mt-10 lg:mt-0">
            <h1 className="mb-6 font-medium text-primary">Company</h1>
            <Link className="mb-3 text-sm text-secondary" to="/about">
              About us
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/partners">
              Our partners
            </Link>
            <Link
              className="mb-3 text-sm text-secondary"
              to="/investor-relations"
            >
              Investor relations
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/careers">
              Careers
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Contact
            </Link>

            <h1 className="mt-8 mb-6 font-medium text-primary">Resources</h1>
            <Link className="mb-3 text-sm text-secondary" to="/">
              News & Announcements
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Become a vendor
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              ESG
            </Link>
            <Link className="mb-3 text-sm text-secondary" to="/">
              Certifications
            </Link>
          </div>
          <div className=" sm:mt-10 lg:mt-0">
            <h1 className="mb-2 font-medium text-primary">Join our network</h1>
            <p className="mb-6 text-sm text-secondary">
              Get the latest AFS news, announcements and more.
            </p>
            <div className="flex flex-col">
              <input
                type="email"
                className="py-3 px-4 max-w-72 border border-default outline-none"
                placeholder="Type your email"
              />
              <button className="text-white py-3 max-w-72 bg-brand-secondary transition-colors duration-500  hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium mt-2 rounded-sm">
                Subscribe
              </button>
            </div>
            <p className="text-secondary mt-4 text-sm pb-10 mb-10 border-b border-default">
              By subscribing you agree to our{" "}
              <Link className="text-primary underline " to="/">
                Privacy Policy
              </Link>
            </p>
            <div className="pb-10 mb-10 border-b border-default">
              <h1 className="text-primary font-medium mb-4">
                Follow us on social media
              </h1>
              <div className="flex items-center">
                <a href="#" className="mr-3">
                  <img
                    className="w-6 h-6"
                    src="/assets/icons/footer/Facebook.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <img
                    className="w-6 h-6"
                    src="/assets/icons/footer/Instagram.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <img
                    className="w-6 h-6"
                    src="/assets/icons/footer/X.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <img
                    className="w-6 h-6"
                    src="/assets/icons/footer/LinkedIn.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="w-6 h-6"
                    src="/assets/icons/footer/Youtube.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="pb-10">
              <h1 className="text-primary font-medium mb-4">
                Our certifications
              </h1>
              <div className="flex">
                <div className="w-[70px] h-[70px] border-r border-default p-1 flex items-center justify-center">
                  <img src="/assets/icons/footer/certification1.svg" alt="" />
                </div>
                <div className="w-[70px] h-[70px] border-r border-default p-1 flex items-center justify-center">
                  <img src="/assets/icons/footer/certification2.svg" alt="" />
                </div>
                <div className="w-[70px] h-[70px p-1 flex items-center justify-center">
                  <img src="/assets/icons/footer/certification3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-default text-sm mt-14 pt-10 text-secondary">
          <div className="flex flex-wrap">
            <Link to="/" className="underline mr-4 mt-2 whitespace-nowrap">
              AFS legal statement
            </Link>
            <Link to="/" className="underline mr-4 mt-2 whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/" className="underline mr-4 mt-2 whitespace-nowrap">
              Cookies Settings
            </Link>
            <Link to="/" className="underline mr-4 mt-2 whitespace-nowrap">
              Anti money laundering
            </Link>
            <Link to="/" className="underline mr-4 mt-2 whitespace-nowrap">
              Business terms & conditions
            </Link>
            <Link to="/" className="underline mt-2 whitespace-nowrap">
              Merchant terms & conditions
            </Link>
          </div>
          <div>
            <p className="mt-6 font-normal text-sm">
              © 2024 Arab Financial Services. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-tertiary">
              Licensed as an Ancillary Service Provider by the Central Bank of
              Bahrain
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
