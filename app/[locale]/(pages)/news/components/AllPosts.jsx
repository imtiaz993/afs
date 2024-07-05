import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PageLayout from "app/common/PageLayout";
import NewsLetter from "app/common/NewsLetter";
import { calculateReadingTime } from "../utility/util";

const AllPosts = ({ data, category }) => {
  const pathname = usePathname();

  // Define the number of items initially displayed and the increment
  const INITIAL_ITEMS = 10;
  const LOAD_MORE_ITEMS = 4;

  // Define the number of items after which the subscribe section will be shown
  const SUBSCRIBE_SECTION_INDEX = 4;

  // State to manage the number of items currently displayed
  const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS);

  // Function to handle loading more items
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + LOAD_MORE_ITEMS);
  };

  // Split the news items based on the number of visible items
  const firstPart = data.slice(0, 4);
  const secondPart = data.slice(4, Math.min(visibleItems, data.length));

  return (
    <div className="py-12 lg:py-24 bg-white">
      <PageLayout>
        <h3 className="text-2xl xl:text-[40px] text-dark-neutral md:mb-12 mb-6">
          {category == "All" ? "All posts" : category}
        </h3>
        <div className="flex flex-col md:space-y-8 space-y-16">
          {firstPart.map((post) => (
            <div className="flex flex-column md:flex-row md:items-center md:space-y-0  space-x-0 md:space-x-5 lg:space-x-10 space-y-4  justify-between align-center md:flex-nowrap flex-wrap group cursor-pointer">
              <div className="max-w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[640px] flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  {/* Only show category if not filtered */}
                  {(category === "All" || category === "Latest articles") && (
                    <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-subtle-neutral">
                      {post.newsCategory}
                    </span>
                  )}
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                    <span>{calculateReadingTime(post.content)} min read</span>
                  </div>
                </div>

                <Link href={pathname + "/" + post.slug}>
                  <h4 className="text-xl xl:text-2xl !leading-[120%] text-primary max-w-full line-clamp-2 transition-all ease-in-out group-hover:text-brand-secondary">
                    {post.title}
                  </h4>
                </Link>

                <p className="text-lg text-secondary line-clamp-2">
                  {post.content[0]}
                </p>
              </div>

              <div className="w-full md:w-[300px] lg:w-[350px] xl:w-[416px]">
                <Link href={pathname + "/" + post.slug}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full md:h-[233px] rounded object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <NewsLetter showStuffs={true} />
        <div className="flex flex-col space-y-8">
          {secondPart.map((post) => (
            <div className="flex flex-column md:flex-row md:space-y-0 space-y-4  justify-between align-center md:flex-nowrap flex-wrap space-x-0 md:space-x-5 lg:space-x-10 group cursor-pointer">
              <div className="max-w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[640px] flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  {/* Only show category if not filtered */}
                  {(category === "All" || category === "Latest articles") && (
                    <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-subtle-neutral">
                      {post.newsCategory}
                    </span>
                  )}
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                    <span>{calculateReadingTime(post.content)} min read</span>
                  </div>
                </div>

                <Link href={pathname + "/" + post.slug}>
                  <h4 className="text-xl xl:text-2xl !leading-[120%] text-primary max-w-full line-clamp-2 group-hover:text-brand-secondary transition-all ease-in-out">
                    {post.title}
                  </h4>
                </Link>

                <p className="text-lg text-secondary line-clamp-2">
                  {post.content[0]}
                </p>
              </div>

              <div className="w-full md:w-[300px] lg:w-[350px] xl:w-[416px]">
                <Link href={pathname + "/" + post.slug}>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full md:h-[233px] rounded object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < data.length && (
          <div className="flex flex-col mt-8">
            <button
              type="button"
              onClick={handleLoadMore}
              className="text-white py-[11px] px-[22px] bg-brand-secondary border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary font-medium rounded-sm h-12 self-center"
            >
              Load More
            </button>
          </div>
        )}
      </PageLayout>
    </div>
  );
};

export default AllPosts;
