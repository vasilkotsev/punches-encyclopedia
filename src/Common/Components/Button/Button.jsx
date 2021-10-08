import React from "react";
import { withRouter } from "react-router-dom";
import "./ButtonStyles.scss";

const Button = ({ history }) => (
  <button className="back-btn" onClick={() => history.goBack()}>
    BACK
  </button>
);

export default withRouter(Button);
