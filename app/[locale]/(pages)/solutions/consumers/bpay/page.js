import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import TestimonialSlider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";
import { faqContentData } from "./faqContentData";

const BPay = () => {
	const benefitsData = [
		{
			title: "Instant transfers",
			description:
				"Send and receive money instantly anywhere, anytime, making your transactions as seamless as possible.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/instant-transfers.svg",
		},
		{
			title: "Utmost security",
			description:
				"Your financial security is our priority, with cutting-edge eKYC, encryption, and tokenization technologies protecting every transaction.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/regulatory-compliance.svg",
		},
		{
			title: "Global reach",
			description:
				"Conduct both global and local transactions effortlessly from your smartphone, expanding your financial capabilities without boundaries.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/global-reach.svg",
		},
		{
			title: "Comprehensive management",
			description:
				"Manage payments, store money, and handle various financial activities all in one place, simplifying your economic life.",
			icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/comprehensive-management.svg",
		},
	];

	const featuresData = [
		{
			title: "Digital wallet",
			description:
				"Conveniently store and manage your money in a digital format. BPay allows you to securely save credentials and manage various payment instruments within the app, providing an organized and accessible financial experience. Ideal for those who prefer a clutter-free, secure financial environment without the hassle of physical wallets.",
			image: "/assets/images/solutions/bpay/digital-wallet1.png",
		},
		{
			title: "P2P transactions",
			description:
				"Facilitate peer-to-peer money transfers quickly and securely with BPay. Whether paying a friend back, or remitting money to your family, BPay makes it incredibly easy to send or receive funds with just a few taps on your smartphone. This feature enhances your connectivity with others financially without needing bank details for every transaction",
			image: "/assets/images/solutions/bpay/p2p-transactions2.png",
		},
		{
			title: "Youth empowerment",
			description:
				"The BPay Youth Card is specifically designed to empower young users to manage their finances independently while ensuring they are well-protected under comprehensive safeguards.",
			secondaryDescription:
				"It's an excellent tool for teaching financial responsibility, saving habits, and spending decisions, all under the watchful eyes of parents or guardians.",
			image: "/assets/images/solutions/bpay/youth-empowerment2.png",
		},
		{
			title: "Value-added services",
			description:
				"Enhance your daily financial activities with a variety of value-added services available through BPay. ",
			secondaryDescription:
				"From paying bills effortlessly to sending money internationally, BPay enriches your financial life by adding convenience and reducing the need to use multiple apps or services. It's your all-in-one platform for broader financial management.",
			image: "/assets/images/solutions/bpay/value-added-service2.png",
		},
		{
			title: "Integrated solutions",
			description:
				"BPay offers seamless integration with AFS Point of Sale (PoS) terminals and efficient use through web portals designed for both individual consumers and large corporations. ",
			secondaryDescription:
				"This feature simplifies transactions at various service points and enhances the usability of BPay in diverse business environments, making it a versatile choice for modern financial needs.",
			image: "/assets/images/solutions/bpay/integrated-solutions2.png",
		},
	];

	return (
		<>
			<Navbar />
			<CommonHero
				title={"BPay"}
				subtext={"Simplify your digital payments"}
				description={
					"Experience the ease of digital payments with BPay, your one-stop solution for secure and instant transactions locally and globally."
				}
				image={"/assets/images/solutions/bpay/bpay-banner.png"}
				buttonText={"Contact our team"}
				buttonLink={"/contact-team"}
			/>
			<Benefits
				description={
					"BPay exists to be the first-choice digital payments, commerce and financial services app offering instant, global and local payment solutions that all consumers and businesses can use to serve their everyday needs."
				}
				data={benefitsData}
			/>
			<Features
				data={featuresData}
				appCTA={true}
				appCTABgColor={"bg-surface-neutral"}
			/>
			{/* <TestimonialSlider bgColor={"bg-white"} /> */}
			<Faq
				title={
					"Find answers to some key questions about our BPay wallet solution"
				}
				email={"bpaysupport@afs.com.bh"}
				accordionOptions={faqContentData}
			/>
		</>
	);
};

export default BPay;
