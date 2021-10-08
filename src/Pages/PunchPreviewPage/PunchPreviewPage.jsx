import React from "react";
import PunchPreviewContainer from "./Components/PunchPreviewContainer";
import "./PunchPreviewPageStyles.scss";
import Button from "../../Common/Components/Button/Button";

const PunchPreviewPage = () => {
  return (
    <div className="punch-preview-page">
      <div className="content-wrapper">
        <Button />
        <PunchPreviewContainer />
      </div>
    </div>
  );
};

export default PunchPreviewPage;
