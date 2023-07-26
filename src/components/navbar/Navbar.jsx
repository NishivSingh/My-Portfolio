import React from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav className="navbar">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillFileEarmarkCheckFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <SiGooglemessages />
      </a>
    </nav>
  );
};

export default Navbar;
