import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header title="punches" />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer text="© CopyRight 2021 V.K.Design. All rights reserved." />
    </React.Fragment>
  );
}

export default App;
