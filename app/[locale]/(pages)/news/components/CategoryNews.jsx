import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PageLayout from "app/common/PageLayout";

const CategoryNews = ({ posts, bg, category, setCategory }) => {
  const pathname = usePathname();

  const filteredPosts = posts.filter((item) => item.newsCategory == category);
  const sortedByLatest = filteredPosts.sort((a, b) => b.id - a.id);
  const firstArticle = sortedByLatest[0];
  const articles = sortedByLatest.slice(1, 4);

  // console.log("firstarticles >>", filteredPosts);
  return (
    <div className={`py-10 lg:py-24 ${bg}`}>
      <PageLayout>
        <div className="mb-12 flex flex-wrap justify-between items-center">
          <h3 className="text-2xl lg:text-[40px] text-dark-neutral">
            {category}
          </h3>
          <button
            onClick={() => {
              setCategory(category);
              window.scrollTo(0, 0);
            }}
          >
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
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <Link
              href={pathname + "/" + firstArticle.slug}
              className="flex flex-col space-y-4"
            >
              <div>
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full min-h-[360px] object-cover rounded"
                  src={firstArticle.image}
                  alt={firstArticle.title}
                />
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xs text-secondary space-x-2 flex items-center">
                  <span>{firstArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                  <span>{firstArticle.timeToRead}</span>
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md line-clamp-2">
                {firstArticle.title}
              </h4>

              <p className="text-base text-secondary line-clamp-2">
                {firstArticle.content[0]}
              </p>
            </Link>
          </div>

          {/* Render latest 3 non-featured articles */}
          <div className="mt-16 lg:mt-0 lg:w-2/5">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                className="pb-8 mb-8 border-b border-default block last:border-b-0 "
                href={pathname + "/" + article.slug}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                    <span>{article.timeToRead} read</span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md line-clamp-2">
                  {article.title}
                </h4>

                <p className="text-lg overflow-hidden !leading-7 text-secondary line-clamp-2">
                  {article.content[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CategoryNews;
