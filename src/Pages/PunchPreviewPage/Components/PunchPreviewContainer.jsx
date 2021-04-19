import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PunchPreview from "./Shared/PunchPreview";

class PunchPreviewContainer extends Component {
  state = {
    punch: {},
    error: null,
  };

  mapToViewModel = (punch) => {
    return {
      _id: punch._id,
      name: punch.name,
      type: punch.type,
      description: punch.description,
      contents: punch.contents,
    };
  };

  componentDidMount() {
    const asyncFuncRequest = async () => {
      try {
        const punchesResponse = await fetch(
          "https://punches-encyclopedia-f1b45-default-rtdb.firebaseio.com/punches.json"
        );
        const punches = await punchesResponse.json();
        const punchId = this.props.match.params.id;

        const punch = punches.find((p) => {
          return p._id === punchId;
        });

        if (!punch) return this.props.history.replace("/not-found");

        this.setState({
          punch: this.mapToViewModel(punch),
        });
      } catch (error) {
        this.setState({
          error,
        });
      }
    };
    asyncFuncRequest();
  }

  render() {
    const { punch, error } = this.state;
    if (error) return <h1 style={{ textAlign: "center" }}>{error.message}</h1>;
    return <PunchPreview punch={punch} />;
  }
}

export default withRouter(PunchPreviewContainer);
