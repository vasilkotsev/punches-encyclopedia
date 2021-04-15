import React, { Component } from "react";
import PunchList from "./Shared/PunchList/PunchList";

class HomePageContainer extends Component {
  state = {
    punches: [],
  };

  componentDidMount() {
    const asyncFuncRequest = async () => {
      try {
        const punchesResponse = await fetch(
          "https://punches-encyclopedia-f1b45-default-rtdb.firebaseio.com/users.json"
        );

        const punches = await punchesResponse.json();

        this.setState({
          punches,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncFuncRequest();
  }

  render() {
    return <PunchList punches={this.state.punches} />;
  }
}

export default HomePageContainer;
