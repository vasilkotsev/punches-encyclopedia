import React from "react";
import PropTypes from "prop-types";
import "./ButtonStyles.scss";

const Button = ({ text, onClick }) => (
  <button className="back-btn" onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  text: "Back"
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
