"use client";
import { useState } from "react";
import NewsCommonBanner from "./NewsCommonBanner";
import LatestArticles from "./LatestArticles";
import CategoryNews from "./CategoryNews";
import { newsPostData } from "../newsPostData";
import AllPosts from "./AllPosts";

const NewsMainPage = () => {
  const [category, setCategory] = useState("All");
  const newsCategoriesData = [
    "All",
    "Company announcements",
    "Partnership",
    "Innovative solutions",
    "eCommerce",
    "Payment acceptance",
    "Fraud",
    "Acquiring",
  ];

  return (
    <>
      <NewsCommonBanner
        categoriesList={newsCategoriesData}
        selectedCategory={category}
        setCategory={setCategory}
      />
      {category == "All" && (
        <>
          <LatestArticles data={newsPostData} setCategory={setCategory} />
          <CategoryNews
            posts={newsPostData}
            category="Company announcements"
            bg="bg-subtle-neutral"
            setCategory={setCategory}
          />
          <CategoryNews
            posts={newsPostData}
            bg="bg-white"
            category="Partnership"
            setCategory={setCategory}
          />
          <CategoryNews
            posts={newsPostData}
            bg="bg-subtle-neutral"
            category="Innovative solutions"
            setCategory={setCategory}
          />
        </>
      )}
      {category == "Latest articles" && (
        <AllPosts data={newsPostData} category={category} />
      )}
      {category == "All" && (
        <AllPosts data={newsPostData} category={category} />
      )}
      {category != "All" && category!="latest articles" && (
        <AllPosts
          data={newsPostData.filter((item) => item.newsCategory == category)}
          category={category}
        />
      )}
    </>
  );
};

export default NewsMainPage;
