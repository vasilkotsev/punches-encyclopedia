import React from "react";
import "./HomePageStyles.scss";

import HomePageContainer from "./Components/HomePageContainer";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-wrapper">
        <HomePageContainer />
      </div>
    </div>
  );
};

export default HomePage;
