import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PunchPreview from "./Shared/PunchPreview";

class PunchPreviewContainer extends Component {
  state = {
    punch: {},
    error: null,
    isLoading: true
  };

  mapToViewModel = punch => {
    return {
      _id: punch._id,
      name: punch.name,
      type: punch.type,
      description: punch.description,
      contents: punch.contents
    };
  };

  async componentDidMount() {
    try {
      const punchesResponse = await fetch(
        "https://punches-encyclopedia-f1b45-default-rtdb.firebaseio.com/punches.json"
      );
      const punches = await punchesResponse.json();
      const punchId = this.props.match.params.id;

      const punch = punches.find(p => {
        return p._id === punchId;
      });

      if (!punch) return this.props.history.replace("/not-found");

      this.setState({
        punch: this.mapToViewModel(punch),
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false
      });
    }
  }

  render() {
    const { punch, error, isLoading } = this.state;
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
    return <PunchPreview punch={punch} />;
  }
}

export default withRouter(PunchPreviewContainer);
