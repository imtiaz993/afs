import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Story from "app/common/Story";
import CommitmentApproach from "../about/components/CommitmentApproach";

const ESG = () => {
  const storyContent = {
    primaryContent: [
      "AFS is an organization that aims to make a positive and responsible contribution to society and to the communities in which we operate regionally.",
    ],
    secondaryContent: [
      "To do so, we leverage our expertise, technology, human capital and partnerships to co-innovate towards the greater good.",
      "Every business decision we make is driven by a focus on both our sustainable growth and on optimizing our business impact.",
    ],
    tertiaryContent: [
      "As a values driven business, we work to align decisions at every level across our entire business to our to our company values of being: Collaborative, Client-centric, and Consistent.",
      "AFS is committed to leaving a longstanding, meaningful and measurable positive impact on our communities and environment.",
    ],
  };

  const commitmentData = [
    {
      title: "Our ESG vision",
      description:
        "We are dedicated to delivering a positive Environmental, Social, and Governance impact by harnessing the power of digital transformation and innovation. Through our deep expertise, cutting-edge technology, committed human capital, and strong partnerships, we aim to create sustainable solutions that not only benefit our business but also contribute significantly to societal and environmental well-being.",
      image: "/assets/images/esg/our-vision.png",
    },
    {
      title: "Our ESG vision",
      description:
        "We aim to be a sustainable, responsible entity, encouraging our partners, clients, suppliers, vendors, and staff to adopt social, ethical, and environmental practices. Our goal is to deliver a positive, productive experience for our team and empower them through education. We commit to operating transparently and responsibly in all our activities, ensuring integrity and accountability in every aspect of our business.",
      image: "/assets/images/esg/our-mission.png",
    },
  ];

  const approachData = [
    {
      title: "Environment",
      description:
        "Optimize our inputs and reduce our outputs while advocating for sustainability.",
      image: "/assets/images/esg/environment.png",
    },
    {
      title: "Social",
      description:
        "Positively influence the wellbeing and quality of life across our communities, creating a great workplace.",
      image: "/assets/images/esg/social.png",
    },
    {
      title: "Governance",
      description:
        "Maintain transparency across our business and operate responsible supply chains.",
      image: "/assets/images/esg/governance.png",
    },
  ];

  return (
    <>
      <Navbar />
      <CommonHero
        title={"Environmental, Social, and Governance (ESG)"}
        subtext={"Contributing positively and responsibly to society"}
        description={
          "Every business decision we make is driven by a focus on both our sustainable growth and on optimizing our business impact. Our ESG agenda focuses our attention on the environmental, social, and governance areas where we believe we can help, through company policies, practices, and decision-making."
        }
        image={"/assets/images/esg/esg-hero.png"}
      />
      <Story content={storyContent} bg />
      <CommitmentApproach
        title={"Our commitment"}
        subtext={
          "Our ESG vision commits us to embed sustainability and responsibility across all operations, ensuring enduring benefits for stakeholders and the planet."
        }
        content={commitmentData}
      />
      <CommitmentApproach
        title={"Our approach"}
        subtext={
          "Our ESG agenda targets key environmental, social, and governance areas where we can make a difference through our company policies, practices, and decision-making."
        }
        content={approachData}
      />
    </>
  );
};

export default ESG;
