import React from "react";
import CV from "../../assets/Nishiv_Singh.pdf";

const Util = () => {
  return (
    <div className="util">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Util;
