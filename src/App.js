import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";
const wizardUrl = 'http://hp-api.herokuapp.com/api/characters/students'

class App extends Component {
  //Start your coding here!
  //Don't be afraid to add props into the provided components
  state = {
    wizards: [],
    newWizard: '',
    newWizardHouse: 'Gryffindor',
    filterBy: ''
  }
  
  componentDidMount() {
    fetch(wizardUrl)
    .then(res => res.json())
    .then(wizards => this.setState({ wizards }))
  }

  newWizard = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //not persist in backend
  //add to this.state.wizards
  //reset the state to null
  submitNewWizard = (event) => {
    event.preventDefault();
    let newWizard = {name: this.state.newWizard, house: this.state.newWizardHouse}
    this.setState({
      wizards: [...this.state.wizards, newWizard],
      newWizard: '',
      newWizardHouse: 'Gryffindor'
    })
  }

  changeFilterType = (event) => {
    this.setState({
      filterBy: event.target.value
    })
  }

  filterWizards = (type) => {
    let filtered = (type === 'All' || type === '') ? [...this.state.wizards] : [...this.state.wizards].filter(wizard => wizard.house === type)
    return filtered
  }

  render() {
    let filtered = this.filterWizards(this.state.filterBy)
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings 
        state={this.state} 
        handleSubmit={this.submitNewWizard} 
        handleChange={this.newWizard}
        handleFilter={this.changeFilterType}/>
        {/* <WizardList wizards={this.state.wizards}/> */}
        <WizardList wizards={filtered}/>
      </div>
    );
  }
}

export default App;
