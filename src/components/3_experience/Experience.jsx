import React from "react";
import "./experience.css";

function SkillCard({ class_name, title, skills }) {
  const combinedClass = `skill_card ${class_name}`;

  return (
    <div className={combinedClass}>
      <h3>{title}</h3>
      <div className="experience_content">
        {Object.entries(skills).map(([skill, links], index) => (
          <article key={index} className="experience_details">
            <img width="240" height="240" src={links[0]} alt={links[1]} className={links[1] === "nextjs" ? "nextjs" : "images"} />
            <h4>{skill}</h4>
          </article>
        ))}
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <SkillCard
          class_name={"frontend_dev"}
          title={"Frontend Development"}
          skills={{
            "HTML": [
              "https://img.icons8.com/color/240/html-5--v1.png",
              "html-5",
            ],
            "CSS": ["https://img.icons8.com/color/240/css3.png", "css3"],
            "Tailwind CSS": [
              "https://img.icons8.com/color/240/tailwind_css.png",
              "tailwind_css",
            ],
            "Javascript": ["https://img.icons8.com/color/240/javascript--v1.png", "javascript"],
            "Typescript": ["https://img.icons8.com/color/240/typescript.png", "typescript"],
            "React Js": ["https://img.icons8.com/plasticine/200/react.png", "react"],
            "Next Js": ["https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", "nextjs"],
          }}
        />
        <div className="non_web_dev">
          <SkillCard
            class_name={"app_dev"}
            title={"Mobile App Development"}
            skills={{
              "Dart": ["https://img.icons8.com/color/240/dart.png", "dart"],
              "Flutter": ["https://img.icons8.com/color/240/flutter.png", "flutter"],
              "Firebase": ["https://img.icons8.com/color/240/firebase.png", "firebase"],
            }}
          />
          <SkillCard
            class_name={"others"}
            title={"Others"}
            skills={{
              "C": ["https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", "C"],
              "C++": ["https://img.icons8.com/fluency/240/c-plus-plus-logo.png", "c++"],
              "Python": ["https://img.icons8.com/color/240/python--v1.png", "python"],
              "Figma": ["https://img.icons8.com/color/480/figma--v1.png", "figma"],
              "Linux": ["https://img.icons8.com/color/240/linux--v1.png", "linux"],
              "Matlab": ["https://img.icons8.com/fluency/240/matlab.png", "matlab"],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
