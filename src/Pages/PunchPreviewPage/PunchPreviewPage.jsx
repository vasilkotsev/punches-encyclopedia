import React from "react";
import PunchPreviewContainer from "./Components/PunchPreviewContainer";
import "./PunchPreviewPageStyles.scss";

const PunchPreviewPage = () => {
  return (
    <div className="punch-preview-page">
      <div className="content-wrapper">
        <PunchPreviewContainer />
      </div>
    </div>
  );
};

export default PunchPreviewPage;
