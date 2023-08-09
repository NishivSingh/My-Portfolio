import React from "react";
import "./portfolio.css";
import restaurant from "..//..//assets/images/portfolio/restaurant.png";
import ai_image_generator from "..//../assets/images/portfolio/ai-image-generator.png";
import chat_app from "..//..//assets/images/portfolio/chat-app.png";
import sorting_vis from "..//..//assets/images/portfolio/sorting-visualizer.png";
import movie_info from "..//..//assets/images/portfolio/movie-Info.png";
import multicalc from "..//..//assets/images/portfolio/multicalculator.png";

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
        <ProjectCard
          img={restaurant}
          title={"Restaurant Website"}
          gitlink={"https://github.com/NishivSingh/restaurant-website"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={ai_image_generator}
          title={"AI-Image-Generator"}
          gitlink={"https://github.com/NishivSingh/AI-Image-Generator"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={chat_app}
          title={"Chit-Chat"}
          gitlink={"https://github.com/NishivSingh/chat-app"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={sorting_vis}
          title={"Sorting Visualizer"}
          gitlink={"https://github.com/NishivSingh/Sorting-Visualizer"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={movie_info}
          title={"Movies Info Website"}
          gitlink={"https://github.com/NishivSingh/Movie-Info-App"}
          weblink={"http://github.com"}
        />
        <ProjectCard
          img={multicalc}
          title={"Multi-Calculator"}
          gitlink={"https://github.com/NishivSingh/Multi-Calculator"}
          weblink={"http://github.com"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
