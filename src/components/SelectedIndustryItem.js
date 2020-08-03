import React from "react";

const SelectedIndustryItem = ({ selectedIndustries }) => {
  //   console.log("sel industry from item", selectedIndustries);
  return (
    <div>
      <div>{selectedIndustries.title}</div>
      <div>{selectedIndustries.sic_code}</div>
    </div>
  );
};

export default SelectedIndustryItem;
