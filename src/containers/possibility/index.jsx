import React from "react";
import "./possibility.css";
import ailady from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding">
      <div className="possibility-img">
        <img src={ailady} alt="Lady with vr" />
      </div>
      <div className="possibility-info">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Immerse yourself in the extraordinary with GPT-3 and witness the magic
          of possibilities becoming realities. In our AI application, the
          boundaries are blurred, and the possibilities are not just beyond
          imagination—they're beyond extraordinary
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Possibility;
