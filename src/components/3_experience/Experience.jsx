import React from "react";
import "./experience.css";

function SkillCard({ class_name, title, skills }) {
  const combinedClass = `skill_card ${class_name}`;

  return (
    <div className={combinedClass}>
      <h3>{title}</h3>
      <div className="experience_content">
        {skills.map((skill, index) => (
          <article key={index} className="experience_details">
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
          class_name={"web_dev"}
          title={"Web Development"}
          skills={[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Javascript",
            "Typescript",
            "React JS",
            "Next JS",
          ]}
        />
        <SkillCard
          class_name={"app_dev"}
          title={"Mobile App Development"}
          skills={["Flutter", "Firebase"]}
        />
        <SkillCard
          class_name={"ml"}
          title={"Machine Learning"}
          skills={["Python", "Streamlit", "Pandas", "Numpy", "Scikit-learn"]}
        />
        <SkillCard
          class_name={"others"}
          title={"Others"}
          skills={["C++", "Matlab", "Git/Github", "Linux"]}
        />
      </div>
    </section>
  );
};

export default Experience;
