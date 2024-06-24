import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PageLayout from "app/common/PageLayout";

const LatestArticles = ({ data, setCategory }) => {
  const pathname = usePathname();
  const remainingFourData = data.slice(1, 4);

  return (
    <div className="py-12 lg:py-24 bg-white">
      <PageLayout>
        <div className="flex items-center justify-between mb-6 lg:mb-12">
          <h3 className="text-2xl xl:text-[40px] text-dark-neutral">
            Latest articles
          </h3>
          <button onClick={() => setCategory("Latest articles")}>
            <span className="text-brand-secondary text-base font-medium">
              See All
            </span>
            <Image
              sizes="100vw"
              width={16}
              height={16}
              src={"/assets/icons/news/right-arrow.svg"}
              alt="Right Arrow"
              className="inline ms-2"
            />
          </button>
        </div>

        <div className="flex md:flex-row flex-column space-y-4  md:spce-y-0 justify-between md:space-x-8 flex-wrap md:flex-nowrap">
          <div className="w-full lg:max-[864px]:">
            <Link href={pathname + "/" + data[0].slug}>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className="w-full md:max-h-[480px] rounded"
                src={data[0].image}
                alt={data[0].title}
              />
            </Link>
          </div>
          <div className="w-full md:w-auto space-y-4">
            <div className="flex items-center space-x-2">
              <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-subtle-neutral">
                {data[0].newsCategory}
              </span>
              <div className="text-xs text-secondary space-x-2 flex items-center">
                <span>{data[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                <span>{data[0].timeToRead} read</span>
              </div>
            </div>

            <Link href={pathname + "/" + data[0].slug}>
              <h3 className="text-2xl xl:text-[40px] leading-[120%] text-dark-neutral max-w-full lg:max-w-md line-clamp-5">
                {data[0].title}
              </h3>
            </Link>

            <p className="text-lg text-secondary line-clamp-2">
              {data[0].content[0]}
            </p>
          </div>
        </div>

        <div className="mt-10 flex md:flex-row flex-column space-y-10 md:space-y-0 md:space-x-4 xl:space-x-8 flex-wrap md:flex-nowrap">
          {remainingFourData.map((article) => (
            <div className="flex flex-col w-full md:w-2/4 xl:w-1/3">
              <Link
                href={pathname + "/" + article.slug}
                className="flex flex-col space-y-4"
              >
                <div key={article}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full max-h-[231px] object-cover rounded"
                    src={article.image}
                    alt={article.title}
                  />
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-xs text-secondary md:space-x-1 xl:space-x-2 flex items-center">
                    <span className="subtle-neutral text-dark-neutral text-sm font-normal px-2 py-1 rounded bg-subtle-neutral">
                      {article.newsCategory}
                    </span>
                    <div className="text-xs text-secondary md:space-x-1 xl:space-x-2 flex items-center">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                      <span>{article.timeToRead} read</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl xl:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md line-clamp-2">
                  {article.title}
                </h4>

                <p className="text-base text-secondary line-clamp-2">
                  {article.content[0]}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default LatestArticles;
