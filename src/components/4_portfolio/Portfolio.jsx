import React from "react";
import "./portfolio.css";
import portfolioItems from "./portfolioData";

function ProjectCard({ img, gitlink, weblink, title }) {
  return (
    <article className="portfolio_item">
      <div className="portfolio_item_img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
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
              img={item.img}
              title={item.title}
              gitlink={item.gitlink}
              weblink={item.weblink}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
