import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "../containers";
import { Brand, Cta } from "../components";

const Home = () => {
  return (
    <>
      <div className="gradient__bg">
        <Header />
      </div>
      <main>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default Home;
