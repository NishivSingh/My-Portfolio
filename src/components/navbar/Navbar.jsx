import React, { useState, useEffect } from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";

const navItems = [
  { id: "#home", icon: <AiFillHome /> },
  { id: "#about", icon: <FaUser /> },
  { id: "#experience", icon: <BsFillFileEarmarkCheckFill /> },
  { id: "#portfolio", icon: <BiBook /> },
  { id: "#services", icon: <RiServiceFill /> },
  { id: "#contact", icon: <SiGooglemessages /> },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleSectionVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionVisibility, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed to determine when a section is considered visible
    });

    // Observe all the sections (based on their IDs) in the document
    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => setActiveNav(item.id)}
          className={activeNav === item.id ? "active" : ""}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
