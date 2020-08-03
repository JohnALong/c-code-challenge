import React from "react";
import SelectedIndustryItem from "./SelectedIndustryItem";

const SelectedIndustriesList = ({ selectedIndustries, onRemoveFromCart }) => {
  const renderedList = selectedIndustries.map((industry) => {
    return (
      <SelectedIndustryItem
        selectedIndustries={industry}
        onRemoveFromCart={onRemoveFromCart}
        key={industry.sic_code}
      />
    );
  });

  if (renderedList.length !== 0) {
    return <div>{renderedList}</div>;
  } else {
    return <div>This will be the cart</div>;
  }
};

export default SelectedIndustriesList;
