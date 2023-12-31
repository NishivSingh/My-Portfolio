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
        <div className="web_dev">
          <SkillCard
            class_name={"frontend_dev"}
            title={"Web Development"}
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
              "Node Js": ["https://img.icons8.com/color/240/nodejs.png", "nodejs"],
              "MongoDB": ["https://img.icons8.com/color/240/mongodb.png", "mongodb"]
            }}
          />
          <SkillCard
            class_name={"backend_dev"}
            title={"Mobile App Development"}
            skills={{
              "Dart": ["https://img.icons8.com/color/240/dart.png", "dart"],
              "Flutter": ["https://img.icons8.com/color/240/flutter.png", "flutter"],
              "Firebase": ["https://img.icons8.com/color/240/firebase.png", "firebase"],
            }}
          />

        </div>
        <div className="non_web_dev">
          <SkillCard
            class_name={"app_dev"}
            title={"Machine Learning"}
            skills={{
              "OpenCV": ["https://img.icons8.com/color/240/opencv.png", "opencv"],
              "Google Colab": ["https://img.icons8.com/color/240/google-colab.png", "google-colab"],
              "Jupyter": ["https://img.icons8.com/fluency/240/jupyter.png", "Jupyter"],
              "Tensor Flow": ["https://img.icons8.com/color/240/tensorflow.png", "tensorflow"],
              "NumPy": ["https://img.icons8.com/color/240/numpy.png", "numpy"],

            }}
          />
          <SkillCard
            class_name={"others"}
            title={"Others"}
            skills={{
              "C++": ["https://img.icons8.com/fluency/240/c-plus-plus-logo.png", "c++"],
              "Python": ["https://img.icons8.com/color/240/python--v1.png", "python"],
              "SQL": ["https://img.icons8.com/arcade/64/sql.png", "sql"],
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
