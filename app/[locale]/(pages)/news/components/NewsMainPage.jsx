"use client";

import { useState } from "react";
import NewsCommonBanner from "./NewsCommonBanner";
import LatestArticles from "./LatestArticles";
import CategoryNews from "./CategoryNews";
import AllPosts from "./AllPosts";
import { latestArticleData } from "../LatestArticleData";
import { companyAnnouncementData } from "../companyAnnouncementData";
import { caseStudiesData } from "../caseStudiesData";
import { productNewsData } from "../productNewsData";
import { allPostsData } from "../allPostData";

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
  const [categoryNews, setCategoryNews] = useState("Allposts");
  return (
    <>
      <NewsCommonBanner categories={newsCategoriesData} />
      <LatestArticles data={latestArticleData} />
      <CategoryNews
        title="Company announcements"
        data={companyAnnouncementData}
        bg="bg-subtle-neutral"
      />
      <CategoryNews title="Case studies" data={caseStudiesData} bg="bg-white" />
      <CategoryNews
        title="Product news"
        data={productNewsData}
        bg="bg-subtle-neutral"
      />
      <AllPosts data={allPostsData} />
    </>
  );
};

export default NewsMainPage;
