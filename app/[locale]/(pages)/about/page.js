import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Story from "app/common/Story";
import CommitmentApproach from "./components/CommitmentApproach";
import History from "./components/History";
import Team from "./components/Team";
import AboutCTA from "./components/AboutCTA";
import Partners from "app/common/Partners";
import Annnouncements from "./components/Annnouncements";

const About = () => {
	const storyContent = {
		primaryContent: [
			"At AFS we empower the region’s business and banking communities, end-users and consumers with customized payments technologies and solutions.",
		],
		secondaryContent: [
			"Regulated by the Central Bank of Bahrain and the Central Bank of Egypt, AFS is owned by a total of 37 banks and financial institutions and serves over 60 bank clients in more than 20 countries across the Middle East and Africa region.",
			"The company provides numerous ground-breaking end-to-end digital payment products, services and solutions to banks and businesses. These include card processing services, merchant acquiring, fintech solutions and value-added services.",
		],
		tertiaryContent: [
			"Our dedication to payments innovation and delivering cutting-edge payments technology has propelled AFS to become a market leader.",
			"We are committed to being the leading enabler for digital transaction transformation and we offer unique, future-driven payments experiences.",
			"We fast-track payments innovation and make superior digital payments experiences a more accessible, secure, convenient, and seamless reality, regionally.",
		],
	};

	const commitmentData = [
		{
			title: "Our vision",
			description:
				"To be the leading enabler for digital transaction transformation.",
			image: "/assets/images/about/our-vision2.png",
		},
		{
			title: "Our mission",
			description:
				"Offer better, faster, and more secure products and services that support our customers’ growth.",
			image: "/assets/images/about/our-mission2.png",
		},
		{
			title: "Our values",
			description:
				"A client centric, collaborative and consistent entity, committed to delivering superior experiences.",
			image: "/assets/images/about/our-values2.png",
		},
	];

	return (
		<>
			<Navbar />
			<CommonHero
				title={"About us"}
				subtext={
					"The region’s leading digital payment solutions provider and fintech enabler"
				}
				image={"/assets/images/about/about-us-banner.png"}
			/>
			<Story content={storyContent} />
			<CommitmentApproach
				title={"Our commitment"}
				subtext={
					"We are committed to fast-tracking payments innovation and making superior digital payments experiences more accessible, secure, convenient, and seamless."
				}
				content={commitmentData}
				bg
			/>
			<History />
			<Team />
			<AboutCTA />
			<Partners subtext={"Our trusted partners"} />
			<Annnouncements />
		</>
	);
};

export default About;
