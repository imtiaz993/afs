import Image from "next/image";

const NavigationMenu = ({ navSelected, setNavAndScrollToView, data }) => {

  return (
    <div className="hidden md:block md:w-[304px] md:mr-8 md:sticky top-[110px]">
      {data.map((item) => (
        <div
          className={`${
            navSelected == item.id ? "bg-subtle-neutral rounded-sm" : null
          } py-2 px-3`}
          key={item.id}
          onClick={() => setNavAndScrollToView(item.id)}
        >
          <p
            className={`${
              navSelected == item.id ? "text-primary" : "text-secondary"
            } flex items-start cursor-pointer`}
          >
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={` ${
                navSelected == item.id
                  ? "/assets/icons/home/diamond.svg"
                  : "/assets/icons/home/diamond-tertiary.svg"
              }`}
              className="mr-2 mt-[6px]"
              alt=""
            />{" "}
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;
