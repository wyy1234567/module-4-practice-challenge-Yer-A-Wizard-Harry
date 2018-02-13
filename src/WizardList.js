import React from "react";

const WizardList = props => {
  const renderWizards = () => {
    let filteredWizards = props.wizards;
    if (props.selectedHouse !== "All") {
      filteredWizards = props.wizards.filter(wiz => {
        return wiz.house === props.selectedHouse;
      });
    }

    return filteredWizards.map((wiz, i) => (
      <div key={i} className="Wizard">
        <div>{wiz.name}</div>
        <div>{wiz.house}</div>
      </div>
    ));
  };
  return <div className="WizardList">{renderWizards()}</div>;
};

export default WizardList;
