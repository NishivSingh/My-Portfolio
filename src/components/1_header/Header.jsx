import React from "react";
import "./header.css";
import Util from "./Util";
import my_image from "..//../assets/images/my_image.png";
import SocialLinks from "./SocialLinks";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Nishiv Singh</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
          <Util />
          <div className="my-image">
            <img src={my_image} alt="me" />
          </div>
          <div className="scroll-feature">
            <a href="#contact" className="scroll-down">
              <MdKeyboardDoubleArrowDown />
            </a>
            <div className="label">Scroll down</div>
          </div>
          {/* <SocialLinks /> */}
        </div>
      </header>
    </section>
  );
};

export default Header;
