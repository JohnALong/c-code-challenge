import React from "react";
import IndustryItem from "./IndustryItem";

const IndustryList = ({ industries, onSelectForCart }) => {
  const renderedList = industries.map((industry) => {
    return (
      <IndustryItem
        key={industry.sic_code}
        industry={industry}
        onSelectForCart={onSelectForCart}
      />
    );
  });

  if (renderedList.length !== 0) {
    return <div>{renderedList}</div>;
  } else return <div>Please check your entry</div>;
};

export default IndustryList;
