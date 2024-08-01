import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const now = new Date().getFullYear();
  const linkStyle = {
    textDecoration: "none",
    color: "crimson",
    fontSize: "18px",
    textShadow: "2px 2px #ccc",
  };
  return (
    <footer>
      <p>Copyright &copy; {now}</p>
      <p>
        <Link to={"/ourteam"} style={linkStyle}>
          Our Team
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
