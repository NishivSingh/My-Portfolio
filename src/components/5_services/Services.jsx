import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import serviceItems from "./serviceData";

function ServiceCard({ item }) {
  return (
    <article className="service">
      <div className="service_head">
        <h3>{item.title}</h3>
      </div>
      <ul className="service_list">
        {item.description.map((point, index) => (
          <li key={index}>
            <BiCheck className="service_list_icons" />
            <p>
              {point}
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {serviceItems.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
