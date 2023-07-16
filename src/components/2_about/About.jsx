import React from "react";
import "./about.css";
import about_me from "..//../assets/images/my_image.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={about_me} alt="#" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">Card</article>
          </div>
          <div className="about_info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
              magnam? Maiores numquam et ullam voluptatibus temporibus cum
              cumque quia expedita porro adipisci. Sint in animi velit cumque?
              Illo sit rem voluptates optio adipisci officia id deserunt nobis
              blanditiis rerum. Sint voluptatem voluptatibus laborum quasi
              architecto similique! Aliquam ipsam error impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
