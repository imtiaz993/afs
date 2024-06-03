import Image from "next/image";
import tailwindConfig from "tailwind.config";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import BgImageTestimonial from "./BgImageTestimonial";
import PartnersSlider from "app/common/PartnersSlider";
import SolutionFeatures from "../../../../common/SolutionFeatures";
import CommonCTA from "../../../../common/CommonCTA";

const SolutionBusinesses = () => {
	const tailwindColorsModule = tailwindConfig.theme.extend.colors;
	const businessData = [
		{
			title: "POS, miniPOS and SoftPOS terminals",
			description:
				"Using our next-generation point-of-sale terminals brings a transformative advantage to your business.",
			imgSrc: "/assets/images/solutions/pos-minipos-softpos-terminals.png",
		},
		{
			title: "POS financing",
			description:
				"Finance your business expansion, grow your workforce or fund any operational expense with our convenient loan application.",
			imgSrc: "/assets/images/solutions/pos-financing.png",
		},
		{
			title: "eShop",
			description:
				"Sell online via a tailored eCommerce website, pre-integrated with our payment gateway.",
			imgSrc: "/assets/images/solutions/eshop.png",
		},
		{
			title: "Food and beverage solutions",
			description:
				"Take and accept orders, perform card payment transactions in one full-featured point-of-sale application.",
			imgSrc: "/assets/images/solutions/food-beverage-solutions.png",
		},
	];
	return (
		<PageLayout bg={"bg-subtle-neutral"}>
			<div className="py-10 md:py-24" id="solution-for-businesses">
				<div className="md:ml-56">
					<p className="md:hidden mt-12 mb-6 text-secondary flex items-start">
						<Image
							sizes="100vw"
							width={10}
							height={10}
							src={"/assets/icons/home/diamond.svg"}
							className="mr-2 mt-[6px]"
							alt=""
						/>{" "}
						Solutions for businesses
					</p>
					<FeatureHighlightCard
						message={
							"Experience the power of seamless secure and efficient transactions with our comprehensive suite of digital payments acceptance solutions that equip your business with the tools to thrive in the digital age."
						}
						primaryButtonLabel={"View all business solutions"}
						primaryButtonLink={"/solutions/business"}
						secondaryButtonLabel={"Contact our team"}
						secondaryButtonLink={"/contact-team"}
					/>
					<BgImageTestimonial />
					<PartnersSlider
						gradient={false}
						gradientColor={tailwindColorsModule["subtle-neutral"]}
					/>
					<div className="grid my-6 md:grid-cols-2 gap-4 ">
						{businessData.map((data) => (
							<SolutionFeatures
								title={data.title}
								description={data.description}
								descriptionCritical={data.descriptionCritical}
								backgroundColor={"bg-white"}
								// imageSrc={"/assets/images/solutions/productIllustration2.png"}
								imageSrc={data.imgSrc}
								key={data.title}
							/>
						))}
					</div>
					<CommonCTA
						primaryContent={
							"Want to learn more about our solutions and how we can help your business?"
						}
						secondaryContent={
							"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
						}
						primaryButtonLabel={"Contact our team"}
						primaryButtonLink={"/contact-team"}
						secondaryButtonLabel={"View all business solutions"}
						secondaryButtonLink={"/solutions/business"}
						bgColor={"bg-surface-neutral"}
						rounded={true}
						lessPaddingVariant={true}
					/>
				</div>
			</div>
		</PageLayout>
	);
};

export default SolutionBusinesses;
