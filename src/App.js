import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  state = {
    wizards: [],
    selectedHouse: "All",
    newWizard: "",
    newWizardHouse: "Hufflepuff"
  };

  componentDidMount() {
    this.setState({
      wizards: [
        { name: "Herry Pother", house: "Hufflepuff" },
        { name: "Herman Granger", house: "Griffdoor" },
        { name: "Ran Weasel", house: "Ravenpuff" }
      ]
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newWizard = {
      name: this.state.newWizard,
      house: this.state.newWizardHouse
    };
    this.setState(previousState => ({
      wizards: [...previousState.wizards, newWizard]
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings
          newWizard={this.state.newWizard}
          newWizardHouse={this.state.newWizardHouse}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <WizardList {...this.state} />
      </div>
    );
  }
}

export default App;
