import React from "react";
import "./home.css";
import Util from "./Util";
import { BiCodeAlt } from "react-icons/bi";
import my_image from "..//../assets/images/my_image.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <section id="home">
      <div className=" container home_container">
        <div className="home_content">
          <h3>Hello, I'm</h3>
          <h1>Nishiv Singh</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse autem
            corrupti, fugit explicabo nam laudantium numquam. Deserunt ullam
            deleniti delectus?
          </p>
          {/* <h5 className="text-light">FrontEnd Developer</h5> */}
          <Util />
        </div>

        <div className="profession_container">
          <div className="profession_box">
            <div className="profession" style={{ "--i": 0 }}>
              <BiCodeAlt className="profession_icon" />
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 1 }}>
              <BiCodeAlt className="profession_icon" />
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 2 }}>
              <BiCodeAlt className="profession_icon" />
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 3 }}>
              <BiCodeAlt className="profession_icon" />
              <h3>Web Developer</h3>
            </div>

            <div className="circle"></div>
          </div>
          <div className="overlay"></div>
          <div className="home_img">
            <img src={my_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
