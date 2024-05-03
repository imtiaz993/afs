import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import PageLayout from "./PageLayout";
import InputField from "./form-components/InputField";

const Footer = () => {
  return (
    <PageLayout>
      <div className="py-10 lg:py-24">
        <div className="mb-16">
          <Link href="/">
            <Image
              sizes="100vw"
              width={67}
              height={40}
              src="/assets/icons/footer/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start">
            <h6 className="mb-6 font-medium text-primary">
              Solutions for banks
            </h6>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Card issuing & processing
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Digital banking
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Open banking
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Fraud & Risk management
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Value added services
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <h6 className="mb-6 font-medium text-primary">
              Solutions for businesses
            </h6>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Payment gateway
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              POS terminals
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              SoftPOS
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              eShop
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Merchant portal
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Hospitality
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Food and beverage (F&B)
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              SME suite
            </Link>
            <h6 className="mt-8 mb-6 font-medium text-primary">
              Solutions for consumer
            </h6>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              BPay wallet
            </Link>
          </div>
          <div className="flex flex-col items-start sm:mt-10 lg:mt-0">
            <h6 className="mb-6 font-medium text-primary">Company</h6>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/about"
            >
              About us
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/partners"
            >
              Our partners
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/investor-relations"
            >
              Investor relations
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/contact"
            >
              Contact
            </Link>

            <h6 className="mt-8 mb-6 font-medium text-primary">Resources</h6>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              News & Announcements
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              Become a vendor
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/"
            >
              ESG
            </Link>
            <Link
              className="mb-3 text-sm text-secondary hover:text-brand-secondary hover:underline"
              href="/certifications"
            >
              Certifications
            </Link>
          </div>
          <div className=" sm:mt-10 lg:mt-0">
            <h6 className="mb-2 font-medium text-primary">Join our network</h6>
            <p className="mb-6 text-sm text-secondary">
              Get the latest AFS news, announcements and more.
            </p>
            <div className="flex flex-col">
              <InputField type="email" placeholder="Type your email" />
              <button className="text-white py-[11.2px] max-w-72 bg-brand-secondary transition-colors duration-500  hover:text-brand-secondary border border-brand-secondary hover:bg-white font-medium mt-2 rounded-sm">
                Subscribe
              </button>
            </div>
            <p className="text-secondary mt-4 text-sm pb-10 mb-10 border-b border-default">
              By subscribing you agree to our{" "}
              <Link
                className="text-primary hover:text-brand-secondary hover:underline"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>
            <div className="pb-10 mb-10 border-b border-default">
              <h6 className="text-primary font-medium mb-4">
                Follow us on social media
              </h6>
              <div className="flex items-center">
                <a href="#" className="mr-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Facebook.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Instagram.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/X.svg"
                    alt=""
                  />
                </a>
                <a href="#" className="mr-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/LinkedIn.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-6 h-6"
                    src="/assets/icons/footer/Youtube.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="pb-10">
              <h6 className="text-primary font-medium mb-4">
                Our certifications
              </h6>
              <div className="flex">
                <div className="border-r border-default p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification1.svg"
                    alt=""
                  />
                </div>
                <div className="border-r border-default p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification2.svg"
                    alt=""
                  />
                </div>
                <div className="p-1 flex items-center justify-center">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="mx-5 w-full"
                    src="/assets/icons/certifications/certification3.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-default text-sm mt-14 pt-10 text-secondary">
          <div className="flex flex-wrap">
            <Link
              href="/"
              className="mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
              AFS legal statement
            </Link>
            <Link
              href="/"
              className="mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
              Cookies Settings
            </Link>
            <Link
              href="/"
              className="mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
              Anti money laundering
            </Link>
            <Link
              href="/"
              className="mr-4 mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
              Business terms & conditions
            </Link>
            <Link
              href="/"
              className="mt-2 whitespace-nowrap hover:text-brand-secondary hover:underline"
            >
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
    </PageLayout>
  );
};

export default Footer;
