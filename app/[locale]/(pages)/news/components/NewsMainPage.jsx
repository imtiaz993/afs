"use client";
import NewsCommonBanner from "./NewsCommonBanner";
import LatestArticles from "./LatestArticles";
import CategoryNews from "./CategoryNews";
import { allPostsData } from "../allPostsData";
import AllPosts from "./AllPosts";

const NewsMainPage = () => {
  const newsCategoriesData = [
    "All",
    "Company announcements",
    "Case studies",
    "Product news",
    "eCommerce",
    "Payment acceptance",
    "Fraud",
    "Acquiring",
    "Partnerships",
  ];

  return (
    <>
      <NewsCommonBanner categories={newsCategoriesData} />
      <LatestArticles latestNews={allPostsData} />
      <CategoryNews
        posts={allPostsData}
        category="Company announcements"
        bg="bg-subtle-neutral"
      />
      <CategoryNews posts={allPostsData} bg="bg-white"  category="Case studies" />
      <CategoryNews posts={allPostsData} bg="bg-subtle-neutral"  category="Product news"/>
      <AllPosts data={allPostsData} />
    </>
  );
};

export default NewsMainPage;
