import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, spotify } from "./imports";

const Brand = () => {
  const brands = [
    { img: google, name: "google" },
    { img: slack, name: "slack" },
    { img: atlassian, name: "atlassian" },
    { img: dropbox, name: "dropbox" },
    { img: spotify, name: "spotify" },
  ];
  return (
    <div className="brands section__padding">
      {brands.map(({ img, name }) => (
        <img src={img} alt={name} key={name} />
      ))}
    </div>
  );
};

export default Brand;
