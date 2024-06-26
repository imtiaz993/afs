const JobDescription = ({ data }) => {
  return (
    <div>
      <div className="mb-7">
        <h4 className="text-xl md:text-2xl text-primary mb-4 font-regular !leading-[130%]">
          About AFS
        </h4>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          At AFS we empower the region’s business and banking communities,
          end-users and consumers with customized payments technologies and
          solutions.
        </p>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          Regulated by the Central Bank of Bahrain, AFS is owned by a total of
          37 banks and financial institutions and serves over 60 clients in more
          than 20 countries across the Middle East and Africa region.
        </p>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          The company provides numerous ground-breaking end-to-end digital
          payment products, services and solutions to banks and businesses.
          These include card processing services, merchant acquiring, fintech
          solutions and value-added services.
        </p>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          Our dedication to payments innovation and delivering cutting-edge
          payments technology has propelled AFS to become a market leader.
        </p>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          We are committed to being the leading enabler for digital transaction
          transformation and we offer unique, future-driven payments
          experiences.
        </p>
        <p className="text-base md:text-lg text-primary  mb-4 !leading-7">
          We fast-track payments innovation and make superior digital payments
          experiences a more accessible, secure, convenient, and seamless
          reality, regionally.
        </p>
      </div>

      <div
        id={data?.id}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      {/* Don't Remove This */}
      <div id="apply-form"></div>
    </div>
  );
};

export default JobDescription;
