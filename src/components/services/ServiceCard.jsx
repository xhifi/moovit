import Link from "next/link";
import React from "react";

const ServiceCard = ({ children, title, description, icon }) => {
  return (
    <Link href="/" className="group text-center cursor-pointer space-y-4">
      <div className="service-icon text-6xl">
        <i className={`bi bi-${icon} bg-cyan-600 inline-block p-6 rounded-full text-white shadow-lg shadow-black/20`}></i>
      </div>
      <h3 className="header text-2xl font-bold">{title}</h3>
      <div className="content">{children}</div>
      <p href="/" className="group-hover:underline">
        Learn More...
      </p>
    </Link>
  );
};

export default ServiceCard;
