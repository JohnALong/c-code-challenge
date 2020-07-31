import React from "react";

const IndustryItem = ({ industry }) => {
  return (
    <div>
      <div>{industry.title}</div>
      <div>{industry.sic_code}</div>
    </div>
  );
};

export default IndustryItem;
