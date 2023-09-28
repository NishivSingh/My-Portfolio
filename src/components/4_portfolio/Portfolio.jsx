import React from "react";
import "./portfolio.css";
import portfolioItems from "./portfolioData";

function ProjectCard({ item }) {
  return (
    <article className="portfolio_item">
      <div className="portfolio_item_img_container">
        <img src={item.img} alt={item.title} className="portfolio_item_img" />
        <div className="portfolio_item_img_overlay">
          <div className="portfolio_icons">
            <a href={item.gitlink} target="_blank" rel="noopener noreferrer">
              <img
                width="256"
                height="256"
                src="https://img.icons8.com/glyph-neue/256/github.png"
                alt="github"
                className="portfolio_icon"
              />
            </a>
            <a href={item.weblink} target="_blank" rel="noopener noreferrer">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/material-sharp/96/visible.png"
                alt="visible"
                className="portfolio_icon"
              />
            </a>
          </div>
        </div>
      </div>
      <h3>{item.title}</h3>
      <p className="portfolio_description">{item.description}</p>
    </article>
  );
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioItems.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
