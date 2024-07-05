import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const InPersonPayments = () => {
	const cardData = [
		{
			title: "POS terminals",
			description:
				"Designed for businesses seeking efficiency and innovation, our terminals offer swift, secure transactions, dynamic currency conversion, cash register integration and comprehensive analytics.",
			learnMoreLink: "/solutions/business/pos-terminals",
			image: "/assets/images/solutions/business/pos-terminals.png",
		},
		{
			title: "MiniPOS terminals",
			description:
				"Reduce cost and expand your cashless ecosystem with pocket sized terminals - sleek, secure and portable terminals that offer your customers a frictionless and secure payment experience.",
			learnMoreLink: "/",
			image: "/assets/images/solutions/business/mini-pos-terminal.png",
		},
		{
			title: "SoftPOS",
			description:
				"Whether it’s for in-store purchases, home delivery, or online sales, our SoftPOS solution can transform any Android mobile phone or tablet into a smart payment terminal.",
			learnMoreLink: "/solutions/business/afspay-softpos",
			image: "/assets/images/solutions/business/afspay-softpos.png",
		},
		{
			title: "Food and beverage (F&B)",
			description:
				"Full-featured point-of-sale (POS) software engineered to streamline both front and back of house operations for any full-service restaurant, fast casual, quick serve or delivery.",
			learnMoreLink: "/",
      image: "/assets/images/solutions/business/food-and-beverage.png",
      
		},
	];

	return (
		<>
			<PageLayout>
				<div className="py-10 lg:py-24 md:flex items-start">
					<SingleNav title={"In-person payments"} />
					<div className="md:w-[calc(100%-192px)]">
						<FeatureHighlightCard
							message={
								"Enhance your in-store payment processes with our advanced POS solutions. Both our next-generation terminals and the versatile softPOS app streamline operations and improve customer interactions."
							}
						/>
						<div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
							{cardData.map((data) => (
								<SolutionFeatures
									title={data.title}
									description={data.description}
									learnMoreLink={data.learnMoreLink}
									backgroundColor={"bg-subtle-neutral"}
									imageSrc={data.image}
									key={data.title}
								/>
							))}
						</div>
						<CommonCTA
							primaryContent={
								"Want to learn more about our in-store and on-the-go payments?"
							}
							primaryContentTextTarget={{
								text: ["in-store", "on-the-go"],
								color: "text-brand-secondary",
							}}
							secondaryContent={
								"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
							}
							primaryButtonLabel={"Contact our team"}
							primaryButtonLink={"/contact-team"}
							bgColor={"bg-subtle-neutral"}
							rounded={true}
							lessPaddingVariant={true}
						/>
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default InPersonPayments;
