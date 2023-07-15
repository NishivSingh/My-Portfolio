import React from "react";
import "./header.css";
import Util from "./Util";
import my_image from "..//../assets/images/my_image.jpeg";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nishiv Singh</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <Util />
        <div className="my-image">
          <img src={my_image} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
