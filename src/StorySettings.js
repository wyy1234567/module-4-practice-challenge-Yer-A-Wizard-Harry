import React from "react";

const StorySettings = props => {
  //Most of the form is here, but you still need to hook them up to state
  return (
    <div className="StorySettings">
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        
        <input type="text" name="newWizard" value={props.state.newWizard} onChange={(event) => props.handleChange(event)}/>
        <select name="newWizardHouse" value={props.state.newWizardHouse} onChange={(event) => props.handleChange(event)}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <input type="submit" />
      </form>
      <form>
        <div>
          <h3>Filter By House</h3>
        </div>
        <input name="selectedHouse" type="radio" value="All" onChange={props.handleFilter}/>All
        <input name="selectedHouse" type="radio" value="Gryffindor" onChange={props.handleFilter}/>Gryffindor
        <input name="selectedHouse" type="radio" value="Slytherin" onChange={props.handleFilter}/>Slytherin
        <input name="selectedHouse" type="radio" value="Hufflepuff" onChange={props.handleFilter}/>Hufflepuff
        <input name="selectedHouse" type="radio" value="Ravenclaw" onChange={props.handleFilter}/>Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
