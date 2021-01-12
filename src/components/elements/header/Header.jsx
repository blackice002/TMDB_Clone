import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={'/'} style={{textDecoration:"none"}}>
        <div className="header_contain container">
          <h2>TMDB</h2>
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h2 className="header_logo"></h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
