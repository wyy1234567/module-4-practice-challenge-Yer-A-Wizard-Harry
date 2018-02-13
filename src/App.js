import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  state = {
    wizards: [],
    selectedHouse: "All",
    newWizard: "",
    newWizardHouse: "Gryffindor"
  };

  componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then(res => res.json())
      .then(wizards => this.setState({ wizards }));
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
      wizards: [...previousState.wizards, newWizard],
      newWizard: "",
      newWizardHouse: "Gryffindor"
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
