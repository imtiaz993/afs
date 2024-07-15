import Image from "next/image";
import PageLayout from "app/common/PageLayout";

const NewsCommonBanner = ({
  categoriesList,
  selectedCategory,
  setCategory,
}) => {
  return (
    <div className="py-8 lg:py-16 bg-subtle-neutral">
      <PageLayout>
        <h2 className="text-primary text-left text-[32px] lg:text-5xl !leading-[120%]">
          News & Announcements
        </h2>
        <form className="flex items-center max-w-full mt-10">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Image
                sizes="100vw"
                width={24}
                height={24}
                src={"/assets/icons/news/search-icon.svg"}
                alt="Search Icon"
              />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-white  border border-surface-neutral text-tertiary text-base rounded-sm block w-full ps-10 p-3 max-h-12 focus-visible:outline-none"
              placeholder="Search our news"
              required
            />
          </div>
        </form>

        <div className="flex flex-wrap gap-1 items-center mt-6">
          {categoriesList.map((category) => (
            <button
              type="button"
              className={`${
                selectedCategory == category
                  ? "text-white bg-medium-brand"
                  : "text-primary bg-white"
              } leading-[18px] font-normal  border border-[surface-neutral] rounded-sm text-sm px-5 py-2.5 text-center`}
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default NewsCommonBanner;
