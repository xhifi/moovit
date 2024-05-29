import React from "react";
import ServiceCard from "./ServiceCard";

const mockData = [
  {
    id: 1,
    title: "Transit Control",
    icon: "truck",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: 2,
    title: "Shipping Protocols",
    icon: "airplane-engines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: 3,
    title: "Secure Payments",
    icon: "currency-dollar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: 2,
    title: "Shipping Protocols",
    icon: "airplane-engines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: 3,
    title: "Secure Payments",
    icon: "currency-dollar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: 2,
    title: "Shipping Protocols",
    icon: "airplane-engines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
];

const index = () => {
  return (
    <div className="grid grid-cols-3 gap-8 ">
      {mockData.map((service) => {
        return (
          <ServiceCard key={service.id} title={service.title} icon={service.icon}>
            {service.description}
          </ServiceCard>
        );
      })}
    </div>
  );
};

export default index;
