import React from "react";
import "./feature.css";
import GradientDivider from "../gradientDivider";

const FeatureCard = ({ title, info }) => {
  return (
    <div className="feature-box">
      <div className="fb-heading">
        <GradientDivider />
        <h3>{title}</h3>
      </div>

      <p>{info}</p>
    </div>
  );
};

export default FeatureCard;
