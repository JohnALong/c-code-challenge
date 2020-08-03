import React from "react";

const SelectedIndustryItem = ({ selectedIndustries, onRemoveFromCart }) => {
  return (
    <div onClick={() => onRemoveFromCart(selectedIndustries)}>
      <div>{selectedIndustries.title}</div>
      <div>{selectedIndustries.sic_code}</div>
    </div>
  );
};

export default SelectedIndustryItem;
