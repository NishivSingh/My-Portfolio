import React from "react";
import "./about.css";
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import about_me from "..//../assets/images/my_image.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_inner">
            <div className="about_me_image">
              <img src={about_me} alt="#" />
            </div>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ months</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <div className="about_info">
            <p>
              <p>Hello, I'm Nishiv Singh, a passionate and enthusiastic individual who thrives on learning new things and embracing challenges. I believe in the power of teamwork and possess the ability to both collaborate effectively and lead a team towards success.</p>

              <p>I am currently pursuing my B.Tech in Materials Engineering at the prestigious Indian Institute of Technology Jodhpur. My dedication and hard work have earned me the top rank in my department, reflecting my commitment to excellence.</p>
              <p>In the professional arena, I've worked in software development teams,at Willings, Inc., a Japan-based company, where I played a pivotal role in creating cross-platform mobile apps and enhancing recruitment websites. Additionally, my research internship at IIT Madras allowed me to independently develop a user-friendly data analysis website, employing machine learning techniques for insightful results.</p>
              <p>Beyond my professional pursuits, I actively contribute as a core member of my college's chess society and have a deep passion for movies, web series, and books. My strong work ethic, coupled with my tech expertise, equips me to adapt to evolving challenges in the field.</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
