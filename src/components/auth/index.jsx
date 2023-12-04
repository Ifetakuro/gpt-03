import React from "react";
import "./auth.css";
import logo from "../../assets/logo.svg";

const AuthLayout = ({ onSubmit, children, buttonText, loading }) => {
  return (
    <div className="auth gradient__bg section__padding">
      <form onSubmit={onSubmit}>
        <div className="form-img">
          <img src={logo} alt="Logo" />
        </div>
        {children}
        <button type="submit" disabled={loading}>
          {loading ? "Loading ..." : buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthLayout;
