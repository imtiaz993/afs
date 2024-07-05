import Image from "next/image";
import PageLayout from "app/common/PageLayout";
import SingleNav from "app/common/SingleNav";
import FeatureHighlightCard from "app/common/FeatureHighlightCard";
import SolutionFeatures from "app/common/SolutionFeatures";
import CommonCTA from "app/common/CommonCTA";

const RiskFraudManagement = () => {
	const riskFraudData = [
		{
			title: "On behalf fraud management",
			description:
				"Bespoke fraud & risk management services that harness advanced and cutting-edge technology to protect your financial transactions.",
			imgSrc: "/assets/images/solutions/banks/on-behalf-fraud-management2.png",
		},
		{
			title: "Authentication services",
			description:
				"Employ proprietary advanced security measures and tools to provide complete protection against fraudulent activities.",
			imgSrc: "/assets/images/solutions/banks/authentication-services2.png",
		},
	];
	return (
		<PageLayout>
			<div className="py-10 lg:py-24 md:flex items-start">
				<SingleNav title={"Fraud & risk management"} />
				<div className="md:w-[calc(100%-192px)]">
					<FeatureHighlightCard
						message={
							"Using cutting-edge detection technology, we proactively safeguard transactions and build trust by identifying and neutralizing threats."
						}
						primaryButtonLabel={"Learn more"}
						primaryButtonLink={"/solutions/banks/fraud-risk-management"}
						secondaryButtonLabel={"Contact our team"}
						secondaryButtonLink={"/contact-team"}
					/>
					<div className="grid mt-16 mb-6 md:grid-cols-2 gap-4">
						{riskFraudData.map((data) => (
							<SolutionFeatures
								title={data.title}
								description={data.description}
								descriptionCritical={data.descriptionCritical}
								backgroundColor={"bg-subtle-neutral"}
								// imageSrc={"/assets/images/solutions/productIllustration.png"}
								imageSrc={data.imgSrc}
								key={data.title}
							/>
						))}
					</div>
					<CommonCTA
						primaryContent={
							"Looking to protect your customers with our fraud & risk management solutions?"
						}
						primaryContentTextTarget={{
							text: ["protect your customers"],
							color: "text-brand-secondary",
						}}
						secondaryContent={
							"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution."
						}
						primaryButtonLabel={"Contact our team"}
						primaryButtonLink={"/contact-team"}
						secondaryButtonLabel={"Learn more"}
						secondaryButtonLink={"/solutions/banks/fraud-risk-management"}
						bgColor={"bg-subtle-neutral"}
						rounded={true}
						lessPaddingVariant={true}
					/>
				</div>
			</div>
		</PageLayout>
	);
};

export default RiskFraudManagement;
