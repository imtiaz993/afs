import React from "react";
import { Link } from "@/i18n.config";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const CareerDetailHero = () => {
  return (
    <PageLayout bg={"bg-subtle-neutral"}>
      <div className="lg:max-w-[864px] mx-auto py-10 lg:py-24">
        <div className="md:px-10 lg:px-0">
          <Link href="/careers" className="inline-flex items-center mb-6">
            <div>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="w-auto"
                src="/assets/icons/careers/back-arrow.svg"
                alt=""
              />
            </div>
            <p className="ml-4 text-secondary ">Back to careers</p>
          </Link>
          <h2 className="text-primary text-left text-2xl md:text-5xl leading-[100%]">
            Head of Customer Due Diligence and Screening Unit 
          </h2>
        </div>
      </div>
    </PageLayout>
  );
};

export default CareerDetailHero;
