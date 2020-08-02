import React from "react";

const IndustryItem = ({ industry, onSelectForCart }) => {
  return (
    <div onClick={() => onSelectForCart(industry)}>
      <div>{industry.title}</div>
      <div>{industry.sic_code}</div>
    </div>
  );
};

export default IndustryItem;
