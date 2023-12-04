import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default PageLayout;
