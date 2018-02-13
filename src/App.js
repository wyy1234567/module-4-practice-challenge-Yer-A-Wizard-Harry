import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  //Start your coding here!
  //Don't be afraid to add props into the provided components

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings />
        <WizardList />
      </div>
    );
  }
}

export default App;
