import React, { Component } from "react";
import PunchList from "./Shared/PunchList/PunchList";
import SearchBox from "../../../Common/Components/SearchBox/SearchBox";

class HomePageContainer extends Component {
  state = {
    punches: [],
    error: null,
    isLoading: true,
    searchField: ""
  };

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  async componentDidMount() {
    try {
      const punchesResponse = await fetch(
        "https://punches-encyclopedia-f1b45-default-rtdb.firebaseio.com/punches.json"
      );
      const punches = await punchesResponse.json();

      this.setState({
        punches,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  render() {
    const { punches, error, searchField, isLoading } = this.state;

    const filteredPunches = punches.filter(punch =>
      punch.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (isLoading)
      return (
        <h2
          style={{ fontSize: "3rem", textAlign: "center", paddingTop: "25px" }}
        >
          LOADING...
        </h2>
      );
    if (error)
      return (
        <h2 style={{ textAlign: "center", paddingTop: "25px" }}>
          Error: {error}
        </h2>
      );
    return (
      <React.Fragment>
        <SearchBox
          placeholder="Search punches"
          handleChange={this.handleChange}
        />
        <PunchList punches={filteredPunches} />
      </React.Fragment>
    );
  }
}

export default HomePageContainer;
