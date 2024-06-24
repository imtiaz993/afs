import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const NewsTopContent = ({ data }) => {
  return (
    <>
      <div className="pt-16 pb-32 md:pb-40 lg:pb-60 xl:pb-96 bg-subtle-neutral ">
        <PageLayout>
          <div className="max-w-100  xxl:max-w-[864px] mx-auto flex flex-col space-y-6 pb-7 xl:pb-14 ">
            <Link href="/news" className="flex items-center space-x-4">
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
              {data?.title}
            </h2>

            <div className="flex items-center space-x-2">
              <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-white">
                {data?.newsCategory}
              </span>
              <div className="text-xs text-secondary space-x-2 flex items-center">
                <span>{data?.date}</span>
                <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                <span>{data?.timeToRead}</span>
              </div>
            </div>
          </div>
        </PageLayout>
      </div>

      <div className="">
        <PageLayout>
          <div className="max-w-100 mx-auto h-auto  relative">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={data?.image}
              alt={data?.title}
              className="w-full object-contain h-[250px] md:h-[300px] lg:h-[450px] xl:h-[600px] 2xl:h-[750px] xl:object-cover rounded absolute top-0 transform -translate-y-1/2"
            />
          </div>
        </PageLayout>
      </div>
    </>
  );
};

export default NewsTopContent;
