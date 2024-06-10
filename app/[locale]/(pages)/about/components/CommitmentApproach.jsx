import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const Commitment = ({ bg, title, subtext, content }) => {
  return (
    <PageLayout bg={bg ? "bg-subtle-neutral" : ""}>
      <div className="py-10 lg:py-24">
        <p className="mb-4 text-secondary flex items-center ">
          <Image
            sizes="100vw"
            width={10}
            height={10}
            src="/assets/icons/home/diamond.svg"
            className="mr-2"
            alt=""
          />{" "}
          {title}
        </p>
        <h2 className="text-primary text-[32px] md:text-5xl mb-10 md:mb-16 max-w-[976px] !leading-[120%]">
          {subtext}
        </h2>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-${content.length} gap-12 md:gap-8`}
        >
          {content.map((item) => (
            <div>
              <div className="h-[326px]">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="rounded w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <h4 className="mt-4 mb-2 text-xl md:text-2xl text-primary !leading-[130%]">
                {item.title}
              </h4>
              <p
                className={`${
                  content.length > 2 ? "text-lg" : "text-base"
                } text-secondary `}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Commitment;
