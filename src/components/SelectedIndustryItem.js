import React from "react";

const SelectedIndustryItem = (props) => {
  console.log("ind item props", props.selectedIndustries.title);
  return (
    <div>
      <div>{props.selectedIndustries.title}</div>
      <div>{props.selectedIndustries.sic_code}</div>
    </div>
  );
};

export default SelectedIndustryItem;
