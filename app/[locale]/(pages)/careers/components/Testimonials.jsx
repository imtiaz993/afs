import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const reviews = [
    {
      review:
        "Joining AFS broadened my financial expertise into regional markets like UAE, Oman, & Kuwait. Collaborative efforts across these geographies showcased learning and adaptation in this dynamic industry.",
      name: "David Joshua ",
      company: "Processing",
      image: "/assets/icons/careers/testimonial1.svg",
    },
    {
      review:
        "AFS has served as a platform for my personal growth, enabling me to lead, innovate, and grow within the organization.",
      name: "Ameena Albinali",
      company: "Customer Service Excellence",
      image: "/assets/icons/careers/testimonial2.svg",
    },
    {
      review:
        "Working at AFS helped me gain diverse knowledge, perfect essential skills while also tackling various projects that have enriched my understanding of the cards and payments sector.",
      name: "Marwa Ahmed",
      company: "Delivery Management",
      image: "/assets/icons/careers/testimonial3.svg",
    },
    {
      review:
        "My career at AFS has been not only rewarding but also the perfect fit for me, thanks to the unmatched opportunities for learning and professional development.",
      name: "Sara Alsarraf",
      company: "Marketing & Communications",
      image: "/assets/icons/careers/testimonial4.svg",
    },
    {
      review:
        "AFS has helped deepen my understanding of payment systems, from traditional card-based transactions to cutting edge digital innovations.",
      name: "Reem AlHusaini",
      company: "Processing",
      image: "/assets/icons/careers/testimonial5.svg",
    },
    {
      review:
        "Being part of a well-established company with 40 years of experience gave me the opportunity to grow with confidence in a very professional environment.",
      name: "Rana Sinousi",
      company: "Marketing & Communications",
      image: "/assets/icons/careers/testimonial6.svg",
    },
    {
      review:
        "Through ongoing training and hands-on experience, I have developed a deep understanding of payment technology trends and best practices.",
      name: "Husain Al Adhab",
      company: "Processing",
      image: "/assets/icons/careers/testimonial7.svg",
    },
    {
      review:
        "Working at AFS broadens horizons, being part of an organization that comprises many highly specialized units exposes one to a wealth of experience and many talented people.",
      name: "Wael Abdullatif",
      company: "Information Technology",
      image: "/assets/icons/careers/testimonial9.svg",
    },
    {
      review:
        "From pioneering digital payments solutions to navigating complex regulatory landscapes, I have always worked collaboratively with our diverse team, and cultivated invaluable skills.",
      name: "Buthaina Al Shuhaibi",
      company: "Acquiring Oman",
      image: "/assets/icons/careers/testimonial10.svg",
    },
    {
      review:
        "As a Senior HR Officer handling recruitment, onboarding, and employee relations I am engaged in the dynamic world of the payments industry and market which has greatly enhanced my professional journey and skills.",
      name: "Nawara AlSaffar",
      company: "Human resources",
      image: "/assets/icons/careers/testimonial11.svg",
    },
  ];

  return (
    <div className="bg-subtle-neutral">
      <div className="lg:w-10/12 mx-auto pt-10 lg:pt-24">
        <p className=" mb-4 text-secondary text-center ">Testimonials</p>
        <h2 className="mb-10 md:mb-16 text-[32px] md:text-5xl text-primary text-center px-5 box-content max-w-[490px] mx-auto !leading-[120%]">
          Why our team members love to work here
        </h2>
      </div>
      <div className="mx-auto md:w-full pb-10 lg:pb-24">
        <Marquee gradient={false} autoFill pauseOnHover>
          <div className="flex justify-between">
            {reviews.map((item, index) => (
              <div className="p-6 bg-white relative h-[316px] xl:h-[330px] 2xl:h-[316px] w-[300px] md:w-[540px] flex flex-col justify-between mr-2">
                <h6 className="text-lg md:text-2xl text-primary !leading-8">
                  {item.review}
                </h6>
                <div>
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-10 h-10 rounded-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex items-center mt-4">
                    <p className="text-xs font-medium text-primary">
                      {item.name}
                    </p>
                    <span className="inline-block mx-2 bg-[#D9D9D9] w-1 h-1 rounded-full"></span>
                    <p className="text-xs text-secondary">{item.company}</p>
                  </div>
                </div>
                <div className="absolute right-2 bottom-3">
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-auto"
                    src="/assets/icons/careers/reviews.svg"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
