import React from "react";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const Support = () => {
  return (
    <PageLayout>
      <div className="py-10 lg:py-24 pb-0 lg:pb-0">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />
          Support
        </p>
        <h2 className="text-primary text-2xl md:text-5xl max-w-[976px] leading-[120%]">
          Customer support channels
        </h2>
        <p className="text-lg md:text-2xl text-primary  mb-10 md:mb-16">
          Select the relevant channel and get in touch with our dedicated team.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="py-10 px-8 rounded border border-default flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  src="/assets/icons/contact/afs.svg"
                  className="mr-4 w-auto"
                  alt=""
                />
                <h4 className="text-xl md:text-2xl text-primary font-regular">
                  AFS Merchant Support
                </h4>
              </div>
              <div>
                <h5 className="mb-4 text-primary text-lg font-regular">
                  Contact us by phone
                </h5>
                <div className="mb-8">
                  <div className="flex items-center mb-1">
                    <p className="text-secondary ">Bahrain</p>
                    <a
                      href="http://wa.me/+973 1729 9444"
                      className="flex items-center"
                    >
                      <p className="ml-2 text-brand-secondary   pr-2 mr-2 border-r border-default">
                        +973 1729 9444
                      </p>
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/contact/whatsapp.svg"
                        className="w-auto"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex items-center mb-1">
                    <p className="text-secondary ">Oman</p>
                    <a href="tel:+973 1729 9444">
                      <p className="ml-2 text-brand-secondary ">
                        +973 1729 9444
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center mb-1">
                    <p className="text-secondary ">Egypt</p>
                    <a href="tel:+20 17119">
                      <p className="ml-2 text-brand-secondary ">+20 17119</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-primary text-lg font-regular">Contact us by email</h5>
              <a href="mailto:merchantsupport@afs.com.bh">
                <p className="text-brand-secondary">
                  merchantsupport@afs.com.bh
                </p>
              </a>
            </div>
          </div>
          <div className="py-10 px-8 rounded border border-default flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  src="/assets/icons/contact/afs-rateb.svg"
                  className="mr-4 w-auto"
                  alt=""
                />
                <h4 className="text-xl md:text-2xl text-primary font-regular">
                  Al Rateb Support - WPS
                </h4>
              </div>
              <div>
                <h5 className="mb-4 text-primary text-lg font-regular">
                  Contact us by phone
                </h5>
                <div className="mb-8">
                  <div className="flex items-center mb-1">
                    <p className="text-secondary ">Bahrain</p>
                    <a
                      href="http://wa.me/+973 1729 9090"
                      className="flex items-center"
                    >
                      <p className="ml-2 text-brand-secondary   pr-2 mr-2 border-r border-default">
                        +973 1729 9090
                      </p>
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/contact/whatsapp.svg"
                        className="w-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-primary text-lg font-regular">Contact us by email</h5>
              <a href="mailto:payroll.cards@afs.com.bh">
                <p className="text-brand-secondary">payroll.cards@afs.com.bh</p>
              </a>
            </div>
          </div>
          <div className="py-10 px-8 rounded border border-default flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  src="/assets/icons/contact/bpay.svg"
                  className="mr-4 w-auto"
                  alt=""
                />
                <h4 className="text-xl md:text-2xl text-primary font-regular">BPay</h4>
              </div>
              <div>
                <h5 className="mb-4 text-primary text-lg font-regular">
                  Contact us by phone
                </h5>
                <div className="mb-8">
                  <div className="flex items-center mb-1">
                    <p className="text-secondary ">Bahrain</p>
                    <a
                      href="http://wa.me/+973 1729 9717"
                      className="flex items-center"
                    >
                      <p className="ml-2 text-brand-secondary   pr-2 mr-2 border-r border-default">
                        +973 1729 9717
                      </p>
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        src="/assets/icons/contact/whatsapp.svg"
                        className="w-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-primary text-lg font-regular">Contact us by email</h5>
              <a href="mailto:bpaysupport@afs.com.bh">
                <p className="text-brand-secondary">bpaysupport@afs.com.bh</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Support;
