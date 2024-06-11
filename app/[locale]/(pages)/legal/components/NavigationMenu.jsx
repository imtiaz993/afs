import Image from "next/image";

const NavigationMenu = ({ navSelected, setNavSelected, navItems }) => {
  const onNavChanged = (clickedNavElement) => setNavSelected(clickedNavElement);

  return (
    <div className="hidden md:block md:w-[304px] md:mr-8 md:sticky top-[110px]">
      {navItems.map((item) => (
        <div
          className={`${
            navSelected == item ? "bg-subtle-neutral rounded-sm" : null
          } py-2 px-3`}
          key={item}
          onClick={() => onNavChanged(item)}
        >
          <p
            className={`${
              navSelected == item ? "text-primary" : "text-secondary"
            } flex items-start cursor-pointer`}
          >
            <Image
              sizes="100vw"
              width={10}
              height={10}
              src={` ${
                navSelected == item
                  ? "/assets/icons/home/diamond.svg"
                  : "/assets/icons/home/diamond-tertiary.svg"
              }`}
              className="mr-2 mt-[6px]"
              alt=""
            />{" "}
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;
