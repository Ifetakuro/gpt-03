import React from "react";
import "./whatGPT3.css";
import GradientDivider from "../../components/gradientDivider";
import GradientInfo from "../../components/gradientInfo";
import FeatureCard from "../../components/feature";

const WhatGPT3 = () => {
  const offers = [
    {
      title: "🤖 Chatbots: Your Opinion Pals!!",
      info: "Engage in lively conversations with our charming chatbots! They're not just algorithms; they're your opinion buddies. Receive messages that delight and make you feel heard. It's like having a whole front-row seat of a plateful of insights! Oh, the joy of being understood!",
    },
    {
      title: "🧠 Knowledgebase: The Brainpower Repository!",
      info: "Dive into a treasure trove of information at our Knowledgebase. It's not just a database; it's the powerhouse of intellect! Whether you're a curious learner or a seasoned expert, find everything from the basics to the cutting edge. Your journey to wisdom starts here!",
    },
    {
      title: "🎓 Education Redefined: AI's Classroom Revolution!",
      info: "Welcome to the future of education! Our AI-powered learning platform goes beyond textbooks. It's an immersive experience tailored just for you. Say goodbye to monotony; say hello to interactive lessons, personalized challenges, and a smarter you! Learning has never been this exciting.",
    },
  ];
  return (
    <div className="whatGpt3 section__margin" id="wgpt3">
      <GradientDivider />
      <div className="gpt-meaning">
        <h3>What is GPT-3</h3>
        <p>
          GPT-3 is not just artificial intelligence; it's the epitome of
          simulated brilliance! Imagine an AI so convincingly human, it blurs
          the line between real and artificial. It's not just a machine; it's a
          masterpiece. Meet FauxMinds, the embodiment of ingenuity in a digital
          guise.
        </p>
      </div>
      <GradientInfo
        bigText={"The possibilities are beyond your imagination"}
        smallText={"Explore The Library"}
      />
      <div className="whatGpt03-offers">
        {offers.map((offers, index) => (
          <FeatureCard {...offers} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
