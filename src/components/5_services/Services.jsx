import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                I create websites that go beyond code to deliver captivating digital experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                I breathe life into web applications using the MERN stack, crafting standout, dynamic solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                I infuse artificial intelligence into your apps, adding a touch of brilliance and automation to user experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                Have a hand-on experience in codebase management, worked with existing code to include new features.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                Your website will be responsive on all devices, offering delightful experiences across screens.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                My app development transforms ideas into digital realities, bringing your vision to life on every screen.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                Seamlessly navigate between iOS and Android with my cross-platform expertise.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                My mobile apps foster real-time connections, delivering instant messaging to boost engagement.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                I focus on maximizing user engagement to keep your app's audience actively involved and invested.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icons" />
              <p>
                My apps prioritize trust, implementing secure authentication for user data and interactions.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
