import Image from "next/image";

const SingleNav = ({ title }) => {
  return (
    <div className="w-[192px] mt-12 md:mt-0 mr-8 md:sticky top-[110px] mb-6">
      <p className="mb-2 text-secondary flex items-start cursor-pointer">
        <Image
          sizes="100vw"
          width={10}
          height={10}
          src={"/assets/icons/home/diamond.svg"}
          className="mr-2 mt-[6px]"
          alt=""
        />{" "}
        {title}
      </p>
    </div>
  );
};

export default SingleNav;
