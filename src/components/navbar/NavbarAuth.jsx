import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path !== "/signin" && <p onClick={() => navigate("/signin")}>Sign in</p>}
      {path !== "/signup" && (
        <button type="button" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      )}
    </>
  );
};

export default NavbarAuth;
