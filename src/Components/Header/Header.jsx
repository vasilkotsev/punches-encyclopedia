import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeaderStyles.scss";

const Header = ({ title }) => {
  return (
    <header className="header">
      <Link className="header-link" to="/punches">
        <h1 className="title">{title}</h1>
      </Link>
      <hr className="section-divider" />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
