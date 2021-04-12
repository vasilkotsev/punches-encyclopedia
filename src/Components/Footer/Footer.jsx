import React from "react";
import PropTypes from "prop-types";
import "./FooterStyles.scss";

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      <div className="footer-caption">
        <h5>{text}</h5>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
