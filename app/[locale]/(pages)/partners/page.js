"use client";

import React from "react";
import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import OurPartners from "app/common/Partners";
import WhyPartner from "./components/WhyPartner";
import BecomePartnerForm from "./components/BecomePartnerForm";
import Faq from "app/common/Faq";

const Partners = () => {
	const accordionOptions = [
		{
			title:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum is simply text  printing and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum is simply text  printing and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title:
				"Will I receive feedback on my application and what form will it take?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum is simply text  printing and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
		{
			title: "Lorem Ipsum and typesetting industry?",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		},
	];

	return (
		<>
			<Navbar />
			<CommonHero
				title={"Our partners"}
				subtext={"Start your partnership journey with AFS."}
				description={
					"Seize new prospects and expand collectively by joining our collaborative ecosystem of pioneers and leading figures in the industry."
				}
				image={"/assets/images/partners/our-partners-banner.png"}
				buttonText={"Become a partner"}
				onClick={() => {
					const section = document.querySelector("#partners-form");
					section.scrollIntoView({ behavior: "smooth", block: "start" });
				}}
			/>
			<OurPartners
				bg={true}
				title={"Our trusted partners"}
				subtext={"Partner with top figures in the industry."}
			/>
			<WhyPartner />
			<BecomePartnerForm />
			<Faq
				title={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				}
				accordionOptions={accordionOptions}
			/>
		</>
	);
};

export default Partners;
