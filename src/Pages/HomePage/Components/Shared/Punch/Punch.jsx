import React from "react";
import { Link } from "react-router-dom";
import "./PunchStyles.scss";
import PropTypes from "prop-types";

const Punch = ({ punch }) => {
  return (
    <Link className="punch" to="/">
      <h4 className="punch-name">{punch.name}</h4>
    </Link>
  );
};

Punch.propTypes = {
  punch: PropTypes.object.isRequired,
};

export default Punch;
