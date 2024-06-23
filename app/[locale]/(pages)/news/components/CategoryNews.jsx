import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const CategoryNews = ({ posts, bg, category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulated fetching of articles (replace with actual async fetch if needed)
    const fetchData = async () => {
      try {
        console.log("Posts:", posts); // Log posts to check if data is received
        setArticles(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

    // Example category selection (replace with actual logic to select category)
    const selectedCategory = category;


  // Function to find the latest featured article in a given category
  const findFeaturedArticle = (category) => {
    return articles
      .filter((article) => article.newsCategory === category && article.isFeatured)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  };

  // Function to find latest 3 non-featured articles in a given category
  const findLatestArticles = (category) => {
    return articles
      .filter((article) => article.newsCategory === category && !article.isFeatured)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };


  // Find featured and other articles in selected category
  const featuredArticle = findFeaturedArticle(selectedCategory);
  const otherArticles = findLatestArticles(selectedCategory);

  return (
    <div className={`py-10 lg:py-24 ${bg}`}>
      <PageLayout>
        <div className="mb-12 flex flex-wrap justify-between items-center">
          <h3 className="text-2xl lg:text-[40px] text-dark-neutral">
            {category}
          </h3>
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
          {featuredArticle && (
            <div className="lg:w-1/2">
              <Link
                href={featuredArticle.newsLink}
                className="flex flex-col space-y-4"
              >
                <div>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full max-h-[360px] object-cover rounded"
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                  />
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mt-px"></span>
                    <span>{featuredArticle.timeToRead}</span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md">
                  {featuredArticle.title}
                </h4>

                <p className="text-base text-secondary">
                  {featuredArticle.description}
                </p>
              </Link>
            </div>
          )}

          {/* Render latest 3 non-featured articles */}
          <div className="mt-16 lg:mt-0 lg:w-2/5">
            {otherArticles.map((article, index) => (
              <div
                key={article.id}
                className={`pb-8 mb-8 ${
                  index === otherArticles.length - 1
                    ? "lg:border-b"
                    : "border-b"
                } border-default`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-xs text-secondary space-x-2 flex items-center">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tertiary mb-1"></span>
                    <span>{article.timeToRead} read</span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl !leading-[120%] text-dark-neutral mb-4 max-w-full lg:max-w-md">
                  {article.title}
                </h4>

                <p className="text-lg overflow-hidden whitespace-nowrap text-ellipsis !leading-7 text-secondary">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CategoryNews;
