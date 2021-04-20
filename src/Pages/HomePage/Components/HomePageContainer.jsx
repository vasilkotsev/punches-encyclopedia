import React, { Component } from "react";
import PunchList from "./Shared/PunchList/PunchList";
import SearchBox from "../../../Components/SearchBox/SearchBox";

class HomePageContainer extends Component {
  state = {
    punches: [],
    error: null,
    searchField: "",
  };

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    const asyncFuncRequest = async () => {
      try {
        const punchesResponse = await fetch(
          "https://punches-encyclopedia-f1b45-default-rtdb.firebaseio.com/punches.json"
        );

        const punches = await punchesResponse.json();

        this.setState({
          punches,
        });
      } catch (error) {
        this.setState({ error: error.message });
      }
    };
    asyncFuncRequest();
  }

  render() {
    const { punches, error, searchField } = this.state;

    const filteredPunches = punches.filter((punch) =>
      punch.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (error) return <p style={{ textAlign: "center" }}>{error}</p>;

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
