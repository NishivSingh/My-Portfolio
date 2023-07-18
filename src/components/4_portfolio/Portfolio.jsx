import React from "react";
import "./portfolio.css";
import portfolio from "..//..//assets/images/portfolio.png";

function ProjectCard({ img, gitlink, weblink, title }) {
  return (
    <article className="portfolio_item">
      <div className="portfolio_item_img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_item_content">
        <a href={gitlink} className="btn">
          Github
        </a>
        <a href={weblink} className="btn btn-primary">
          Website link
        </a>
      </div>
    </article>
  );
}
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={portfolio}
          title={"This is portfolio item"}
          gitlink={"http://github.com"}
          weblink={"http://github.com"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
