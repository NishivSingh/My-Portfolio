import React from "react";
import "./portfolio.css";
import portfolioItems from "./portfolioData";

function ProjectCard({ item }) {
  return (
    <article className="portfolio_item">
      <div className="portfolio_item_img">
        <img src={item.img} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          portfolioItems.map((item, index) => (
            <ProjectCard
              key={index}
              item={item}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
