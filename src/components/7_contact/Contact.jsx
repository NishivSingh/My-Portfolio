import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { ImGithub, ImInstagram } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub, GrInstagram } from "react-icons/gr";
import { ReactComponent as ThreadLogo } from "./threads-seeklogo.com-2.svg";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qt8z7ll",
        "template_wrmf7aj",
        form.current,
        "9JKrVVVObtfUQDMxA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <div className="direct_options">
            <article className="contact_option upper_option">
              <div className="contact_option_heading">
                <MdOutlineEmail className="contact_option_icon" />
                <h4>Email</h4>
              </div>
              <div className="contact_email">
                <a href="mailto:nishiv2001@gmail.com" target="_blank">
                  nishiv2001@gmail.com
                </a>
              </div>
            </article>
            <article className="contact_option upper_option">
              <div className="contact_option_heading">
                <BsWhatsapp className="contact_option_icon" />
                <h4>Whatsapp</h4>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone+919319592937"
                target="_blank"
              >
                +91 9319592937
              </a>
            </article>
          </div>
          <article className="contact_option lower option">
            <div className="contact_option_heading">
              <MdConnectWithoutContact className="contact_option_icon" />
              <h4>Connect at</h4>
            </div>
            <div className="connect_option_links">
              <a href="">
                <GrGithub className="connect_option_social_links" />
              </a>
              <a href="">
                <BsLinkedin className="connect_option_social_links" />
              </a>
              <a href="">
                <ImInstagram className="connect_option_social_links" />
              </a>
              {/* <a href="">
                <ThreadLogo />
              </a> */}
            </div>
          </article>
        </div>
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary contact_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
