import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const logoStyle = {
    textDecoration: "none",
    color: "crimson",
    textShadow: "2px 2px #ccc",
    // fontFamily: "'Pokemon Solid', sans-serif",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "crimson",
    fontSize: "18px",
    textShadow: "2px 2px #ccc",
    marginLeft: "5px",
    marginTop: "5px"
  };

  return (
    <header>
      <div className="headerLogo">
        <h2>
          <Link to={"/"} style={logoStyle}>
            News App
          </Link>
        </h2>
      </div>
      <div className="headerList">
        <Link to={"/"} style={linkStyle}>
          {//<i class="fa-regular fa-house"></i>
          } Home
        </Link>
        <Link to={"/search"} style={linkStyle}>
          {//<i class="fa-regular fa-magnifying-glass"></i>
          } Info
        </Link>
      </div>
    </header>
  );
};

export default Header;
