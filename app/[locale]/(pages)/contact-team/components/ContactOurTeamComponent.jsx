import Image from "next/image";

const ContactOurTeamComponent = () => {
  return (
    <div className="md:max-w-[624px] ">
      <h2 className="text-[48px] font-[400] !leading-[57.6px] text-primary">
        Contact our team
      </h2>
      <p className="text-[24px] font-[400] !leading-[32px] text-secondary mt-6">
        Want to learn more about our diverse, innovation-led digital payments
        products and services? Connect with our team to explore tailored
        options, discuss personalized offerings and experience exceptional
        customer service.
      </p>
      <p className="text-[14px] font-[400] !leading-[18px] text-primary mt-14">
        Trusted by industry leaders
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
        {Array.from({ length: 12 }).map((item, index) => (
          <div className="h-20 flex justify-center items-center bg-white">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-auto"
              src={`/assets/icons/partnersSlider/partner${index}.svg`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactOurTeamComponent;
