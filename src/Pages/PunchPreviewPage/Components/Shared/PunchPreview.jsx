import React from "react";
import PropTypes from "prop-types";
import "./PunchPreviewStyles.scss";

const PunchPreview = (props) => {
  const { name, type, contents, description } = props.punch;
  return (
    <div className="punch-preview-content">
      <div className="punch-preview-content-header">
        <h1 className="punch-preview-content-heading">{name}</h1>
      </div>
      <div className="punch-preview-data">
        <div className="punch-preview-type">
          <label>Type: </label>
          <h4>{type}</h4>
        </div>
        <div className="punch-preview-contents">
          <label>Contents: </label>
          <p>{contents}</p>
        </div>
        <div className="punch-preview-description">
          <label>Description: </label>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

PunchPreview.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  contents: PropTypes.string,
  description: PropTypes.string,
};

export default PunchPreview;
