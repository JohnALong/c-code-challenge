import React from "react";

const IndustryItem = ({ industry }) => {
  console.log("item props", industry.title, industry.sic_code);
  return (
    <div>
      <div>{industry.title}</div>
      <div>{industry.sic_code}</div>
    </div>
  );
};

export default IndustryItem;
