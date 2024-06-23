import Image from "next/image";
import Link from "next/link";
import PageLayout from "app/common/PageLayout";
import NewsTopContent from "./NewsTopContent";
import NewsTestimonial from "./NewsTestimonial";
import NewsLetter from "app/common/NewsLetter";

const NewsDetailContent = () => {
  return (
    <div>
      <NewsTopContent />
      <div className="pb-12 pt-24  md:pt-40 lg:pt-52 bg-white">
        <PageLayout>
          <div className="max-w-100 xl:max-w-[864px] mx-auto">
            <h2 className="text-[32px] lg:text-5xl !leading-[120%] text-primary mb-7">
              Heading 2
            </h2>

            <h3 className="text-2xl lg:text-[40px] !leading-[120%] text-primary mb-7">
              Heading 3
            </h3>

            <h4 className="text-xl lg:text-2xl !leading-[120%] text-primary mb-7">
              Heading 4
            </h4>

            <h5 className="text-lg !leading-[140%] text-primary mb-7">
              Heading 5
            </h5>

            <ul className="text-lg text-medium-brand leading-7 space-y-1 mb-7">
              <li>
                <p className="text-primary">List item number one</p>
                <p className="text-primary">List item number two</p>
              </li>
            </ul>

            <h5 className="text-lg !leading-[140%] text-primary mb-7">
              Heading 5
            </h5>

            <p className="mb-7 text-lg leading-7 text-secondary">
              Regulated by the Central Bank of Bahrain, AFS is owned by a total
              of 37 banks and financial institutions and serves over 60 clients
              in more than 20 countries across the Middle East and Africa
              region. The company provides numerous ground-breaking end-to-end
              digital payment products, services and solutions to banks and
              merchant groups. AFS’s innovative approach to the provision of
              financial services is evidenced by a series of market-leading
              payment services that span card processing services, merchant
              acquiring, fintech solutions and value-added services. 
            </p>
            <p className="mb-7 text-lg leading-7 text-secondary">
              With this strategic partnership, AFS will utilize ACI’s Enterprise
              Payments Platform, a single issuing platform for all payment
              types, backed by cutting-edge security, flexible cloud-ready
              technology and multi-language, multi-currency, multi-institution
              capabilities to drive the retail banking modernization for its
              banking and fintech customers.
            </p>

            <figure className="mb-7">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src={"/assets/images/newsDetail/placeholder.png"}
                alt="Img"
                className="w-full max-h-auto xl:max-h-[359px] "
              />
              <figcaption className="mt-1 text-xs leading-normal text-secondary">
                Caption this image
              </figcaption>
            </figure>

            <p className="mb-7 text-lg leading-7 text-secondary">
              The company will also deploy ACI’s Payments Orchestration
              Platform, enabling its merchant customers to orchestrate payments
              using one solution, one platform and one API integration for
              optimal conversion rates at minimal operation costs. It will allow
              merchants and PSPs to provide customers more seamless and secure
              customer journeys.
            </p>
          </div>
        </PageLayout>
      </div>

      <NewsTestimonial />

      <PageLayout>
        <div className="max-w-100 xl:max-w-[864px] mx-auto pb-24">
          <p className="text-primary leading-7 text-lg mb-4">
            “Arab Financial Services is thrilled to embark on a strategic
            partnership with ACI Worldwide. As the payments landscape becomes
            ever more intricate and prone to disruption, a reliable technology
            partner offering industry-leading solutions is crucial. Together,
            AFS and ACI Worldwide are committed to empower our customers with
            cutting-edge technology that streamlines operations, fosters growth,
            and unlocks new levels of profitability.”
          </p>
          <NewsLetter />

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
