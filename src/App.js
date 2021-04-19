import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PunchPreviewPage from "./Pages/PunchPreviewPage/PunchPreviewPage";
import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <React.Fragment>
      <Header title="Our best punches" />
      <Switch>
        <Route path="/punches/:id" exact component={PunchPreviewPage} />
        <Route path="/punches" exact component={HomePage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" exact to="/punches" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer text="© CopyRight 2021 V.K.Design. All rights reserved." />
    </React.Fragment>
  );
}

export default App;
