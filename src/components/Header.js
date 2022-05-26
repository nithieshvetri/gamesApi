import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://i.ibb.co/FnFMGN1/images-removebg-preview.png"
        alt="logo for the header"
      />
      <div className="navigation_content">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
