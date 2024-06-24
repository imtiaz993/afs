import Image from "next/image";
import Link from "next/link";
import PageLayout from "app/common/PageLayout";
import NewsTopContent from "./NewsTopContent";
import { newsPostData } from "../../newsPostData";

const NewsDetailContent = ({ slug }) => {
  const data = newsPostData.find((post) => post.slug == slug);
  return (
    <div>
      <NewsTopContent data={data} />
      <div className="py-8 xl:py-16 bg-white">
        <PageLayout>
          <div className="max-w-100 xl:max-w-[864px] mx-auto">
            {data?.content.map((paragraph) => (
              <p className="mb-7 text-lg leading-7 text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </PageLayout>
      </div>

      <PageLayout>
        <div className="max-w-100 xl:max-w-[864px] mx-auto pb-24">
          <div className="flex justify-between items-center">
            <Link href="/">
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
            </Link>

            <Link href="/">
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
            </Link>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NewsDetailContent;
