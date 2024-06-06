import SingleNav from "app/common/SingleNav";

const Content = ({ data }) => {
  return (
    <div className="">
      <SingleNav title={data?.title} style={"md:hidden"} />
      <h3 className="text-[40px] font-[400] !leading-[48px] text-primary">
        {data?.title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
    </div>
  );
};

export default Content;
