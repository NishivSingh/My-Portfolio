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
              <p>I worked as a software developer, leading a team to create a cross-platform mobile app and improve a recruiting website. This taught me efficient database management, meeting deadlines, and adaptability.
                During my research internship at IIT Madras, I independently developed a user-friendly data analysis website, implementing machine learning techniques for insightful results.</p>
              <p>Beyond my academic and professional pursuits, I enjoy playing chess and actively contribute as a core member of my college's chess society. I'm also an avid consumer of movies, web series, and storybooks.</p>
              <p>My ability to thrive under pressure, coupled with my top-ranking academic performance, reflects my dedication and work ethic. I bring a wealth of experience in both established and emerging technologies, making me adaptable to the evolving needs of companies.</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
