import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";
import SingleNav from "app/common/SingleNav";

const CardIssuingProcessing = () => {
	const cardData = [
		{
			title: "Card processing solutions",
			description:
				"Our versatile card solutions, for all requirements, ensuring convenience and security in every payment.",
			imgSrc: "/assets/images/solutions/banks/card-processing-solutions.png",
		},
		{
			title: "Operational support services",
			description:
				"Streamline your processes and optimize performance while ensuring continuous customer assistance.",
			imgSrc: "/assets/images/solutions/banks/operational-support-services.png",
		},
		{
			title: "Sharia compliant cards",
			description:
				"Our Sharia-compliant solutions are meticulously designed to ensure that all financial transactions and products meet the strict standards.",
			imgSrc: "/assets/images/solutions/banks/sharia-compliant-cards.png",
		},
		{
			title: "Personalized cards",
			description:
				"We empower your bank to offer personalized cards that resonate with your customers' preferences and needs.",
			imgSrc: "/assets/images/solutions/banks/personalized-cards.png",
		},
	];
	return (
		<PageLayout bg={"bg-subtle-neutral"}>
			<div className="py-10 lg:py-24 md:flex items-start">
				<SingleNav title={"Card issuing & processing"} />
				<div className="md:w-[calc(100%-192px)]">
					<FeatureHighlightCard
						message={
							"Revolutionize your bank card operations by enhancing efficiency and streamlining processes with a comprehensive solution that simplifies card issuance and processing."
						}
						primaryButtonLabel={"Learn more"}
						primaryButtonLink={"/solutions/banks/card-issuing-processing"}
						secondaryButtonLabel={"Contact our team"}
						secondaryButtonLink={"/contact-team"}
					/>
					<div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
						{cardData.map((data) => (
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
							"Interested in our card issuing and processing solutions?"
						}
						primaryContentTextTarget={{
							text: ["card issuing and processing"],
							color: "text-brand-secondary",
						}}
						secondaryContent={
							"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
						}
						primaryButtonLabel={"Contact our team"}
						primaryButtonLink={"/contact-team"}
						secondaryButtonLabel={"Learn more"}
						secondaryButtonLink={"/solutions/banks/card-issuing-processing"}
						bgColor={"bg-white"}
						rounded={true}
						lessPaddingVariant={true}
					/>
				</div>
			</div>
		</PageLayout>
	);
};

export default CardIssuingProcessing;
