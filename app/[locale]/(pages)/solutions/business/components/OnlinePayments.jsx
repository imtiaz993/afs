import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const OnlinePayments = () => {
	const cardData = [
		{
			title: "Payment gateway",
			description:
				"Seamlessly add payments acceptance to any website, process your online transactions, with a stable, robust, compliant, secure & future-proof online payment solution.",
			learnMoreLink: "/solutions/business/payment-gateway",
			image: "/assets/images/solutions/business/payment-gateway2.png",
		},
		{
			title: "eShop",
			description:
				"Easy-to-use website builder coupled with an intuitive solution to manage your dedicated eCommerce website, fully integrated with our payment gateway, reporting dashboard and e-Invoicing.",
			learnMoreLink: "/solutions/business/eshop",
			image: "/assets/images/solutions/business/eshop2.png",
		},
	];
	return (
		<>
			<PageLayout bg={"bg-subtle-neutral"}>
				<div className="py-10 lg:py-24 md:flex items-start">
					<SingleNav title={"Online payments"} />
					<div className="md:w-[calc(100%-192px)]">
						<FeatureHighlightCard
							message={
								"Experience the combined advantages of robust security protocols, diverse digital payments acceptance, and a customizable eCommerce platform that grows with your business needs."
							}
						/>
						<div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
							{cardData.map((data) => (
								<SolutionFeatures
									title={data.title}
									description={data.description}
									learnMoreLink={data.learnMoreLink}
									backgroundColor={"bg-white"}
									imageSrc={
										data.image
											? data.image
											: "/assets/images/solutions/productIllustration2.png"
									}
									key={data.title}
								/>
							))}
						</div>
						<CommonCTA
							primaryContent={"Interested in our online payments solutions?"}
							primaryContentTextTarget={{
								text: ["online payments"],
								color: "text-brand-secondary",
							}}
							secondaryContent={
								"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
							}
							primaryButtonLabel={"Contact our team"}
							primaryButtonLink={"/contact-team"}
							bgColor={"bg-white"}
							rounded={true}
							lessPaddingVariant={true}
						/>
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default OnlinePayments;
