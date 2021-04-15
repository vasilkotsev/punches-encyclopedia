import React from "react";
import Punch from "../Punch/Punch";
import "./PunchListStyles.scss";
import PropTypes from "prop-types";

const PunchList = ({ punches }) => {
  return (
    <div className="punch-list">
      {punches.map((punch) => (
        <Punch key={punch._id} punch={punch} />
      ))}
    </div>
  );
};

PunchList.propTypes = {
  punches: PropTypes.array.isRequired,
};

export default PunchList;
