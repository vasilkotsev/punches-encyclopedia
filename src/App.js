import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header title="punches" />
      <Footer text="© CopyRight 2021 V.K. design. All rights reserved." />
    </React.Fragment>
  );
}

export default App;
