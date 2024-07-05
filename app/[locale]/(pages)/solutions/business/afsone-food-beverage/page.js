import Navbar from "app/common/Navbar";
import CommonHero from "app/common/CommonHero";
import Benefits from "app/common/Benefits";
import Features from "app/common/Features";

const AFSOneFoodAndBeverage = () => {
  const benefitsData = [
    {
      title: "Operational efficiency",
      description:
        "AFS One simplifies complex processes, allowing staff to focus more on guests and less on administrative tasks.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/operational.svg",
    },
    {
      title: "Enhanced Customer Service",
      description:
        "With tools to manage orders and payments swiftly, your staff can provide quicker, more attentive service.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/versatility.svg",
    },
    {
      title: "Scalability",
      description:
        "Whether expanding to new locations or adapting to new dining trends, AFS One grows with your business, ensuring you're equipped for any service model.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/market.svg",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with real-time data on sales and customer behavior, driving profitability and operational improvements.",
      icon: "/assets/icons/solutions/solution-banks/card-issuing-processing/protection.svg",
    },
  ];

  const featuresData = [
    {
      title: "Order management",
      description:
        "AFS One enhances the efficiency of order handling by allowing staff to take, send, and modify orders directly from the tableside. This feature minimizes errors and speeds up service, enabling waitstaff to spend more time interacting with guests and less time running back and forth to the kitchen.",
      image:
        "/assets/images/solutions/business/food-beverage/order-management.png",
    },
    {
      title: "Financial tracking",
      description:
        "Keep a close eye on your restaurant’s financial health with centralized tracking of daily sales, inventory, and cash flow. This comprehensive view helps you manage resources more effectively, spot trends, and make timely decisions that impact your bottom line.",
      image:
        "/assets/images/solutions/business/food-beverage/financial-tracking.png",
    },
    {
      title: "Menu and Pricing Customization",
      description:
        "Adapt to changing customer preferences and seasonal ingredients with easy-to-use tools for creating table layouts, modifying menus, and updating pricing. This flexibility ensures that your offerings remain current and competitive, enhancing guest satisfaction and repeat business.",
      image:
        "/assets/images/solutions/business/food-beverage/menu-pricing-customization.png",
    },
    {
      title: "Guest Management",
      description:
        "Streamline the dining experience with capabilities to track guest orders, print individual bills, close out partial bills, and split checks effortlessly. These features reduce the complexity of bill management, allowing your team to deliver smooth and personalized service to every customer.",
      image:
        "/assets/images/solutions/business/food-beverage/guest-management.png",
    },
    {
      title: "Branch integration",
      description:
        "Whether you’re managing a single restaurant or a chain, AFS One brings cohesion to your operations. Consolidate and standardize practices across all locations to maintain quality and efficiency, ensuring that each branch operates to the same high standards.",
      image:
        "/assets/images/solutions/business/food-beverage/branch-integration.png",
    },
    {
      title: "Seamless Integrations",
      description:
        "AFS One integrates flawlessly with essential restaurant technologies like kitchen displays, printers, and bookkeeping software. These integrations eliminate bottlenecks and streamline workflows, from the kitchen to the dining room to the back office, creating a more cohesive operation.",
      image:
        "/assets/images/solutions/business/food-beverage/seamless-integration.png",
    },
  ];
  return (
    <>
      <Navbar />
      <CommonHero
        title={"AFS One - Food & Beverage"}
        subtext={
          "Your restaurant-first full featured point-of-sale software solution"
        }
        description={
          "AFS One is a comprehensive point-of-sale (POS) software solution that simplifies your restaurant management. Whether you’re running a full-service restaurant, dine-in, pick up, delivery or drive thru service – from one or more locations, AFS One is purpose-built and engineered to streamline both your front and back of house operations."
        }
        image={
          "/assets/images/solutions/business/food-beverage/food-beverage.png"
        }
        buttonText={"Contact our team"}
        buttonLink={"/contact-team"}
      />
      <Benefits
        description={
          "From taking and managing orders to handling card payments and modifying menus, AFS One consolidates all your restaurant management needs into one powerful application, suitable for single locations or multiple branches."
        }
        data={benefitsData}
      />
      <Features
        data={featuresData}
        commonCTAData={{
          bgColor: "bg-surface-neutral",
          primaryContent:
            "Want to learn more about AFS One, our full featured point-of-sale solution for restaurants?",
          secondaryContent:
            "Our dedicated regional managers are ready to help guide you on choosing your bespoke solution.",
          primaryButtonLabel: "Contact our team",
          primaryButtonLink: "/contact-team",
        }}
      />
    </>
  );
};

export default AFSOneFoodAndBeverage;
