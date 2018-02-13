import React from "react";

const StorySettings = props => {
  return (
    <div className="StorySettings">
      <form onSubmit={props.handleSubmit}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        <input
          type="text"
          value={props.newWizard}
          name="newWizard"
          onChange={props.handleChange}
        />
        <select
          value={props.newWizardHouse}
          name="newWizardHouse"
          onChange={props.handleChange}
        >
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
        <input
          name="selectedHouse"
          type="radio"
          value="All"
          onChange={props.handleChange}
        />All
        <input
          name="selectedHouse"
          type="radio"
          value="Gryffindor"
          onChange={props.handleChange}
        />Gryffindor
        <input
          name="selectedHouse"
          type="radio"
          value="Slytherin"
          onChange={props.handleChange}
        />Slytherin
        <input
          name="selectedHouse"
          type="radio"
          value="Hufflepuff"
          onChange={props.handleChange}
        />Hufflepuff
        <input
          name="house"
          type="radio"
          value="Ravenclaw"
          onChange={props.handleChange}
        />Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
