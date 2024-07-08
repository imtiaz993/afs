import Image from "next/image";
import Link from "next/link";
import PageLayout from "app/common/PageLayout";
import NewsTopContent from "./NewsTopContent";
import { newsPostData } from "../../newsPostData";
import NewsLetter from "app/common/NewsLetter";

const NewsDetailContent = ({ slug }) => {
  const data = newsPostData.find((post) => post.slug === slug);
  const currentIndex = newsPostData.findIndex((post) => post.slug === slug);
  const nextPost = newsPostData[currentIndex + 1];
  const prevPost = newsPostData[currentIndex - 1];
  return (
    <div>
      <NewsTopContent data={data} />
      <div className="pt-32 md:pt-40 lg:pt-60 xl:pt-96 mt-10 md:mt-16 lg:mt-20 bg-white">
        <PageLayout>
          <div className="max-w-100 xl:max-w-[864px] mx-auto">
            {data?.content.map((paragraph) => (
              <p className="mb-7 text-lg leading-7 text-secondary">
                {paragraph}
              </p>
            ))}
            <NewsLetter showStuffs={false} />
          </div>
        </PageLayout>
      </div>

      <PageLayout>
        <div className="max-w-100 xl:max-w-[864px] mx-auto pb-24">
          <div className="flex justify-between items-center">
            {nextPost && (
              <Link href={`/news/${nextPost.slug}`}>
                <div className="flex items-center">
                  <Image
                    sizes="100vw"
                    width={16}
                    height={16}
                    src={"/assets/icons/news/right-arrow.svg"}
                    alt="Right Arrow"
                    className="inline me-2 rotate-180"
                  />
                  <span className="text-brand-secondary text-base font-medium">
                    Next article
                  </span>
                 
                </div>
              </Link>
            )}

            {prevPost && (
              <Link href={`/news/${prevPost.slug}`}>
                <div className="flex items-center">
                  <span className="text-brand-secondary text-base font-medium">
                    Previous article
                  </span>
                  <Image
                    sizes="100vw"
                    width={16}
                    height={16}
                    src={"/assets/icons/news/right-arrow.svg"}
                    alt="Right Arrow"
                    className="inline ms-2"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NewsDetailContent;