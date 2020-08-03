import React from "react";

const IndustryItem = ({ industry, onSelectForCart }) => {
  // console.log("industry from item", industry);
  return (
    <div onClick={() => onSelectForCart(industry)}>
      <div>{industry.title}</div>
      <div>{industry.sic_code}</div>
    </div>
  );
};

export default IndustryItem;
