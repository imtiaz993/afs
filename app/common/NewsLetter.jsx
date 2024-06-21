import Link from "next/link";
import InputField from "./form-components/InputField";

const NewsLetter = () => {
  return (
    <div className="bg-subtle-neutral flex flex-col space-y-4 md:space-y-0 md:flex-row py-7 px-5 lg:py-14 lg:px-10 my-8 h-auto lg:h-[196px]">
      <div className="md:w-2/4 w-100 flex-col space-y-2 smd:space-y-0">
        <h3 className="text-2xl xl:text-[40px] text-medium-brand !leading-[120%]">
          Join our network
        </h3>
        <p className="text-lg font-normal text-secondary">
          Get the latest AFS news, announcements and more.
        </p>
      </div>

      <div className="md:w-2/4 w-100 flex flex-col space-y-4">
        <form onSubmit="#">
          <div className="flex justify-between  md:flex-row space-y-4 md:space-y-0 flex-col space-x-0 md:space-x-4 h-auto">
            <div className="md:w-3/4 w-100  h-12">
              <InputField
                type="email"
                name="email"
                placeholder={"Email address"}
                className=""
              />
            </div>

            <button
              type="submit"
              className="text-white py-[11px] w-full bg-brand-secondary border border-brand-secondary transition-colors duration-300 hover:bg-brand-primary hover:border-brand-primary font-medium rounded-sm h-12 lg:max-w-[135px] md:w-1/4"
            >
              subscribe
            </button>
          </div>
        </form>
        <p
          className={`text-secondary mt-4 text-sm pb-10 mb-10
          }`}
        >
          By subscribing you agree to our{" "}
          <Link className="text-primary underline underline-offset-1" href="/">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
