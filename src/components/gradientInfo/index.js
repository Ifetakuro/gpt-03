import "./gradientInfo.css";

const GradientInfo = ({ bigText, smallText }) => {
  return (
    <div className="gradient-info">
      <h2 className="gradient__text">{bigText}</h2>
      <div>
        <p>{smallText}</p>
      </div>
    </div>
  );
};

export default GradientInfo;
