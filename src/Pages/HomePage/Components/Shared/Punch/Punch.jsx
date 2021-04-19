import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./PunchStyles.scss";
import PropTypes from "prop-types";

const Punch = ({ punch, match }) => {
  return (
    <Link className="punch" to={`${match.url}/${punch._id}`}>
      <h4 className="punch-name">{punch.name}</h4>
    </Link>
  );
};

Punch.propTypes = {
  punch: PropTypes.object.isRequired,
};

export default withRouter(Punch);
