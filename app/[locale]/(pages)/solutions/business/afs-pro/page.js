import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";

const AFSPro = () => {
	const benefitsData = [
		{
			title: "All-in-one platform",
			description:
				"A single platform for payments, analytics, support, and digital service requests, simplifying business operations for SMEs.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/all-in-one-platform.svg",
		},
		{
			title: "Easy and instant setup",
			description:
				"Set up quickly to accept multiple forms of payments instantly on any Android or Apple device, enhancing customer service and business efficiency.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/easy-instant-setup.svg",
		},
		{
			title: "Comprehensive analytics",
			description:
				"Real-time transaction and settlement history data at your fingertips, providing valuable insights to help you make informed business decisions.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/empowered-decision-making.svg",
		},
		{
			title: "Robust B2B marketplace",
			description:
				"Connect with a network of suppliers and buyers directly through our app, streamlining the procurement and sales processes.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/robust-b2b-marketplace.svg",
		},
	];

	const featuresData = [
		{
			title: "Point of sale insights",
			description:
				"Gain detailed and actionable insights with access to real-time sales data and transaction history.",
			secondaryDescription:
				"The system offers a comprehensive management information system and value-added features that enable you to optimize pricing, track performance trends, and make data-driven decisions to boost your bottom line.",
			image:
				"/assets/images/solutions/business/afs-pro/point-sale-insights.png",
		},
		{
			title: "Self-service options",
			description:
				"Empower your operations with the ability to independently request additional POS terminals and manage essential services through our streamlined, user-friendly interface.",
			secondaryDescription:
				"This self-service option cuts down response times and improves operational efficiency, allowing you to adapt quickly to business needs.",
			image:
				"/assets/images/solutions/business/afs-pro/self-service-options.png",
		},
		{
			title: "B2B marketplace",
			description:
				"Our B2B marketplace feature acts as a dynamic commercial hub, allowing merchants to seamlessly connect, buy, and sell goods and services.",
			secondaryDescription:
				"This module not only facilitates efficient procurement and sales activities but also supports a collaborative merchant community, fostering business growth and partnerships.",
			image: "/assets/images/solutions/business/afs-pro/b2b-marketplace.png",
		},
		{
			title: "Card control",
			description:
				"With comprehensive card control features accessible via the AFS PRO app, users have full control over their financial transactions.",
			secondaryDescription:
				"This includes setting transaction limits, locking or unlocking the card, and monitoring spending patterns, all of which contribute to enhanced security and better financial management.",
			image: "/assets/images/solutions/business/afs-pro/card-control.png",
		},
		{
			title: "3D Secure payments",
			description:
				"Protect your online transactions with our advanced 3D Secure technology.",
			secondaryDescription:
				"This feature provides an extra layer of security, ensuring that both buyers and sellers can conduct transactions with confidence. It is crucial for maintaining customer trust and preventing fraudulent activities in online commerce.",
			image: "/assets/images/solutions/business/afs-pro/3d-secure-payments.png",
		},
		{
			title: "International acceptance",
			description:
				"The AFS PRO Prepaid Card is designed for global use, offering worldwide acceptance that makes it a perfect companion for business travel and international commerce.",
			secondaryDescription:
				"Use your card to make purchases and withdraw cash anywhere around the world, enjoying the same level of convenience and security you expect at home.",
			image:
				"/assets/images/solutions/business/afs-pro/international-acceptance.png",
		},
		{
			title: "Portal",
			description:
				"Leverage our robust suite of portal features that include advanced data and reporting services, analytics, chargebacks, reconciliation, and dispute management services.",
			secondaryDescription:
				"Additionally, benefit from 24x7 merchant support and single sign-on access to manage your business efficiently and profitably anywhere, anytime.",
			image: "/assets/images/solutions/business/afs-pro/portal.png",
		},
		{
			title: "Intelligent payment acceptance",
			description:
				"Our all-in-one app supports every type of payment acceptance on a single platform.",
			secondaryDescription:
				"Whether it's through soft POS systems that utilize NFC technology, Pay by Link that sends payment links via email or SMS, or QR code payments, AFS PRO makes every transaction simple and secure, catering to a wide array of customer preferences.",
			image:
				"/assets/images/solutions/business/afs-pro/intelligent-payment-acceptance.png",
		},
	];
	return (
		<>
			<Navbar />
			<CommonHero
				title={"AFS Pro"}
				subtext={
					"A unique mobile payment ecosystem powering your business needs"
				}
				description={
					"Simplify and accelerate your business operations with AFS Pro, the first comprehensive merchant app in the GCC, designed to cater to the unique demands of SMEs."
				}
				image={"/assets/images/solutions/business/afs-pro/afs-pro-banner.png"}
				buttonText={"Contact our team"}
				buttonLink={"/contact-team"}
			/>
			<Benefits
				description={
					"Discover the advantages of AFS PRO, designed to enhance the efficiency and scalability of your business. From comprehensive analytics to easy setup and robust market integration, AFS PRO brings everything you need right to your fingertips."
				}
				data={benefitsData}
			/>
			<Features
				data={featuresData}
				commonCTAData={{
					bgColor: "bg-surface-neutral",
					primaryContent:
						"Want to learn more about AFS Pro, our unique mobile payment ecosystem?",
					secondaryContent:
						"Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
					primaryButtonLabel: "Contact our team",
					primaryButtonLink: "/contact-team",
				}}
			/>
		</>
	);
};

export default AFSPro;
