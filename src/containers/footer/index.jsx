import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import FooterList from "./footerList";

const Footer = () => {
  const footerList = [
    {
      title: "Links",
      links: ["Overons", "Social Media", "Counters", "Contact"],
    },
    { title: "Company", links: ["Terms and Conditions", "Privacy Policy"] },
    {
      title: "Get In Touch",
      links: [
        "Crechterwoord K12, 182 DK Alknjkcb",
        "085-132567",
        "info@payme.net",
      ],
    },
  ];
  return (
    <footer className="section__padding">
      <h2 className="gradient__text">
        Do you want to step in to the future before others
      </h2>
      <button>Request Early Access</button>
      <div className="footer-links">
        <div className="footer-logo-sec">
          <img src={logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {footerList.map((item) => (
          <FooterList key={item.title} {...item} />
        ))}
      </div>

      <span>
        © 2021 GPT-3. All rights reserved. Inspired by Javascript Mastery
      </span>
    </footer>
  );
};

export default Footer;
