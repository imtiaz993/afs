import Image from "next/image";
import Link from "next/link";

const SolutionFeatures = ({
  title,
  description,
  backgroundColor = "bg-white",
  descriptionCritical,
  imageSrc,
  learnMoreLink,
}) => {
  return (
    <>
      <div
        className={`p-6 sm:p-10 sm:pb-0 pb-0 ${backgroundColor} rounded-sm flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-base sm:text-lg text-primary">{title}</h3>
          <p
            className={`mt-2 sm:mt-4 ${
              descriptionCritical ? "text-critical-primary" : "text-secondary"
            } text-sm sm:text-base`}
          >
            {description}
          </p>
          {learnMoreLink ? (
            <Link href={learnMoreLink}>
              <p className="mt-4 text-brand-secondary font-[530] !leading-6">
                Learn more
                <Image
                  sizes="100vw"
                  src={"/assets/icons/home/arrow-right.svg"}
                  width={0}
                  height={0}
                  className="w-4 h-4 ml-2 inline"
                ></Image>
              </p>
            </Link>
          ) : null}
        </div>
        <Image
          src={`${
            imageSrc
              ? imageSrc
              : "/assets/images/solutions/productIllustration.png"
          }`}
          sizes="100vw"
          className="rounded w-full mt-8"
          alt=""
          width={0}
          height={0}
        />
      </div>
    </>
  );
};

export default SolutionFeatures;
