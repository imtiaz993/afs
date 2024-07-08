import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const NewsTopContent = () => {
  return (
    <div>
      <div className="pt-16  pb-40 md:pb-80 bg-subtle-neutral">
        <PageLayout>
          <div className="max-w-100 xl:max-w-[864px] mx-auto flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-sm grid place-content-center bg-surface-neutral">
                <Image
                  sizes="100vw"
                  width={16}
                  height={16}
                  src={"/assets/icons/newsDetail/back-arrow.svg"}
                  alt="Back Arrow"
                  className="inline"
                />
              </div>

              <span className="text-base leading-normal text-secondary">
                Back to news
              </span>
            </Link>

            <h2 className="text-[32px] lg:text-5xl !leading-[120%] text-primary">
              ACI Worldwide and AFS to drive payments modernization for banks
              and merchants in the Middle East
            </h2>

            <div className="flex items-center space-x-2">
              <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-white">
                Partenrship
              </span>
              <div className="text-xs text-secondary space-x-2 flex items-center">
                <span>Apr 24, 2023</span>
                <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </PageLayout>
      </div>

      <div className="">
        <PageLayout>
          <div className="mt-16 max-w-100 xl:max-w-[864px] mx-auto relative">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/assets/images/newsDetail/news-detail-placeholder.png"}
              alt="ACI Worldwide and AFS to drive payments modernization for banks and
          merchants in the Middle East"
              className="w-full max-h-auto xl:max-h-[750px] rounded absolute top-0 transform -translate-y-3/4 lg:-translate-y-2/3"
            />
          </div>
        </PageLayout>
      </div>
    </div>
  );
};

export default NewsTopContent;