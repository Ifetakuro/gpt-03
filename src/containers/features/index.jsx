import React from "react";
import "./feature.css";
import GradientInfo from "../../components/gradientInfo";
import FeatureCard from "../../components/feature";

const Features = () => {
  const features = [
    {
      title: "Unlocking Trust Through Conversations",
      info: "Immerse yourself in dynamic conversations with our delightful chatbots! They're not mere algorithms; they're your trusted companions in opinions.",
    },
    {
      title: "Cultivate Activeness with Curiosity",
      info: "It's not just a database; it's the heartbeat of wisdom! Whether you're a curious learner or a seasoned expert, explore everything from the fundamentals to the cutting edge.",
    },
    {
      title: "Empowering Minds, One Message at a Time",
      info: "Bid farewell to monotony and embrace a world of interactive lessons, personalized challenges, and a smarter version of yourself! Learning has never been this exhilarating.",
    },
    {
      title: "Navigating the Law of Intellectual County",
      info: "Embark on a futuristic education journey! Our AI-powered learning platform breaks free from conventional textbooks, providing an immersive experience tailored uniquely for you.",
    },
  ];

  return (
    <div className="feature section__padding" id="features">
      <GradientInfo
        bigText={
          "The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen."
        }
        smallText={"Request Early Access to Get Started"}
      />
      <div className="features-section">
        {features.map((feature, index) => (
          <FeatureCard {...feature} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
