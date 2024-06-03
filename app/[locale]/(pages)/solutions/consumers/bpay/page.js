import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";
import TestimonialSlider from "app/common/TestimonialSlider";
import Faq from "app/common/Faq";

const BPay = () => {
  const benefitsData = [
    {
      title: "Instant transfers",
      description:
        "Send and receive money instantly anywhere, anytime, making your transactions as seamless as possible.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational.svg",
    },
    {
      title: "Utmost security",
      description:
        "Your financial security is our priority, with cutting-edge eKYC, encryption, and tokenization technologies protecting every transaction.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/protection.svg",
    },
    {
      title: "Global reach",
      description:
        "Conduct both global and local transactions effortlessly from your smartphone, expanding your financial capabilities without boundaries.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
    {
      title: "Comprehensive management",
      description:
        "Manage payments, store money, and handle various financial activities all in one place, simplifying your economic life.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
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
				"Facilitate peer-to-peer money transfers quickly and securely with BPay. Whether splitting a bill, paying a friend back, or sending a gift, BPay makes it incredibly easy to send or receive funds with just a few taps on your smartphone. This feature enhances your connectivity with others financially without needing bank details for every transaction.",
			image: "/assets/images/solutions/bpay/p2p-transactions.png",
		},
		{
			title: "Youth empowerment",
			description:
				"The BPay Youth Card is specifically designed to empower young users to manage their finances independently while ensuring they are well-protected under comprehensive safeguards.",
			secondaryDescription:
				"It's an excellent tool for teaching financial responsibility, saving habits, and spending decisions, all under the watchful eyes of parents or guardians.",
			image: "/assets/images/solutions/bpay/youth-empowerment1.png",
		},
		{
			title: "Value-added services",
			description:
				"Enhance your daily financial activities with a variety of value-added services available through BPay. ",
			secondaryDescription:
				"From paying bills effortlessly to sending money internationally, BPay enriches your financial life by adding convenience and reducing the need to use multiple apps or services. It's your all-in-one platform for broader financial management.",
			image: "/assets/images/solutions/bpay/value-added-service1.png",
		},
		{
			title: "Integrated solutions",
			description:
				"BPay offers seamless integration with AFS Point of Sale (PoS) terminals and efficient use through web portals designed for both individual consumers and large corporations. ",
			secondaryDescription:
				"This feature simplifies transactions at various service points and enhances the usability of BPay in diverse business environments, making it a versatile choice for modern financial needs.",
			image: "/assets/images/solutions/bpay/integrated-solutions1.png",
		},
	];

	const accordionOptions = [
		{
			title: "What is Bpay?",
			text: [
				"BPay is a secure, easy-to-use, and fully featured digital wallet accessed through an app.",
				"BPay is part of a Kingdom-wide initiative to make Bahrain cashless and supports the Kingdom of Bahrain’s government initiatives to drive digital transformation. ",
				" BPay is a digital wallet solution that enables consumers, merchants, and corporations to make and receive their payments in an easy, fast, and secure way via their smartphones instead of cash or card.",
				"Users can use BPay to purchase goods or services, to send and receive money peer-to-peer (P2P), store money for when they need it, store credentials for various payment instruments securely and digitally, remit money (send money internationally), pay bills, use value-added services and more. Customer identity and electronic transactions are secured through eKYC, encryption, tokenization, and various authentication and authorization methods.",
				"The service is available via smartphone applications for consumers, web portals, and directly integrated into AFS Point of Sale (PoS) terminals using APIs for merchants and corporations – for efficient, convenient use. BPay is accessed by smartphone users through a digital app available from any app play store (Google or iOS). Once they have set up the app, users can move funds to their BPay account via Benefit.",
				"The key benefits of using BPay are convenience, safety, and speed to conduct global and local transactions.",
			],
		},
		{
			title: "What makes BPay unique?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Who can use BPay?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "How do people use BPay?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Are there limits in how we can use BPay?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Is BPay secure?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Are there any fees / charges linked to BPay?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "What if my smartphone is lost or stolen?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Can I use BPay in other countries?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
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
				image={"/assets/images/solutions/bpay/bpay.png"}
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
			<TestimonialSlider bgColor={"bg-white"} />
			<Faq
				title={
					"Find answers to some key questions about our BPay wallet solution"
				}
				accordionOptions={accordionOptions}
			/>
		</>
	);
};

export default BPay;
