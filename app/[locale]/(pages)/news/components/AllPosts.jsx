import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PageLayout from "app/common/PageLayout";
import NewsLetter from "app/common/NewsLetter";

const AllPosts = ({ data, category }) => {
  const pathname = usePathname();
  // Define the number of items after which the subscribe section will be shown
  const SUBSCRIBE_SECTION_INDEX = 4;

  // Split the news items into two parts
  const firstPart = data.slice(0, SUBSCRIBE_SECTION_INDEX);

  const secondPart = data.slice(SUBSCRIBE_SECTION_INDEX);

  return (
    <div className="py-12 lg:py-24 bg-white">
      <PageLayout>
        <h3 className="text-2xl xl:text-[40px] text-dark-neutral md:mb-12 mb-6">
          {category == "All" ? "All posts" : category}
        </h3>
        <div className="flex flex-col md:space-y-8 space-y-16">
          {firstPart.map((post) => (
            <div className="flex flex-column md:flex-row md:space-y-0  space-x-0 md:space-x-5 lg:space-x-10 space-y-4  justify-between align-center md:flex-nowrap flex-wrap">
              <div className="max-w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[640px] flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-subtle-neutral">
                    {post.newsCategory}
                  </span>
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                    <span>{post.timeToRead}</span>
                  </div>
                </div>

                <Link href={pathname + "/" + post.slug}>
                  <h4 className="text-xl xl:text-2xl !leading-[120%] text-dark-neutral max-w-full">
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
                    className="w-full md:max-h-[233px] rounded object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <NewsLetter />
        <div className="flex flex-col space-y-8">
          {secondPart.map((post) => (
            <div className="flex flex-column md:flex-row md:space-y-0 space-y-4  justify-between align-center md:flex-nowrap flex-wrap space-x-0 md:space-x-5 lg:space-x-10">
              <div className="max-w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[640px] flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="subtle-neutral text-dark-neutral text-sm font-normal me-2 px-2 py-1 rounded bg-subtle-neutral">
                    {post.newsCategory}
                  </span>
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                    <span>{post.timeToRead}</span>
                  </div>
                </div>

                <Link href={pathname + "/" + post.slug}>
                  <h4 className="text-xl xl:text-2xl !leading-[120%] text-dark-neutral max-w-full">
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
                    className="w-full md:max-h-[233px] rounded object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-8">
          <button
            type="submit"
            className="text-white py-[11px] px-[22px] bg-brand-secondary border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary font-medium rounded-sm h-12 self-center"
          >
            Load More
          </button>
        </div>
      </PageLayout>
    </div>
  );
};

export default AllPosts;
