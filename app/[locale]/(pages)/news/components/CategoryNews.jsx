import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const CategoryNews = ({ data, title, bg }) => {
  const featuredCategoryNews = data.find(
    (categorynews) => categorynews.isFeatured
  );
  return (
    <div className={`py-10 lg:py-24 ${bg}`}>
      <PageLayout>
        <div className="mb-12 flex flex-wrap justify-between items-center">
          <h3 className="text-2xl lg:text-[40px] text-dark-neutral">{title}</h3>
          <Link href="/">
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
          </Link>
        </div>
        <div className="lg:flex justify-between">
          {featuredCategoryNews && (
            <div className="lg:w-1/2">
              <Link
                href={featuredCategoryNews.newsLink}
                className="flex flex-col space-y-4"
              >
                <div>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full max-h-[360px] object-cover rounded"
                    src={featuredCategoryNews.image}
                    alt={featuredCategoryNews.title}
                  />
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <div className="text-xs text-secondary space-x-2 flex items-center">
                      <span>{featuredCategoryNews.date}</span>
                      <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                      <span>{featuredCategoryNews.timeToRead}</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md">
                  {featuredCategoryNews.title}
                </h4>

                <p className="text-base text-secondary">
                  {featuredCategoryNews.description}
                </p>
              </Link>
            </div>
          )}

          <div className="mt-16 lg:mt-0 lg:w-2/5">
            {data.map(
              (item, index) =>
                !item.isFeatured && (
                  <div
                    className={`pb-8 mb-8 ${
                      index === item.length - 1 ? "lg:border-b" : "border-b"
                    } border-default`}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-xs text-secondary space-x-2 flex items-center">
                        <div className="text-xs text-secondary space-x-2 flex items-center">
                          <span>{item.date}</span>
                          <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                          <span>{item.timeToRead} read</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md">
                      {item.title}
                    </h4>

                    <p className="text-lg overflow-hidden whitespace-nowrap text-ellipsis !leading-7 text-secondary">
                      {item.description}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CategoryNews;
