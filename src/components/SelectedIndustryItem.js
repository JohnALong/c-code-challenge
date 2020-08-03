import React from "react";

const SelectedIndustryItem = ({ selectedIndustries, onRemoveFromCart }) => {
  //   console.log("sel industry from item", selectedIndustries);
  return (
    <div onClick={() => onRemoveFromCart(selectedIndustries)}>
      <div>{selectedIndustries.title}</div>
      <div>{selectedIndustries.sic_code}</div>
    </div>
  );
};

export default SelectedIndustryItem;
