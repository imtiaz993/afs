import Image from "next/image";

const AvatarTestimonial = () => {
  return (
    <div className="mt-6 sm:max-h-[348px] p-6 md:p-10 bg-dark-neutral flex justify-between">
      <div className="flex flex-col justify-between xl:w-[600px] mr-5">
        <h3 className="text-2xl text-white">
          "Implementing AFS's card issuing and processing solution transformed
          how we handle payments, making transactions not just faster but also
          significantly more secure.
        </h3>
        <div className="mt-6">
          <p className="text-sm text-white">Dr. Pallavi Menon</p>
          <p className="text-xs text-white mt-2 opacity-60">
            Chief Financial Officer
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          src={"/assets/images/solutions/testimonialAvatar.png"}
          width={0}
          height={0}
          sizes="100vw"
          className=" lg:min-w-[210px] xl:w-[320px] rounded"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default AvatarTestimonial;
