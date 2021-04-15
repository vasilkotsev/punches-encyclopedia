// import React from "react";
import PropTypes from "prop-types";
import "./HeaderStyles.scss";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <hr className="section-divider" />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
