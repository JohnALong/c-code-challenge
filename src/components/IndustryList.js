import React from "react";
import IndustryItem from "./IndustryItem";

const IndustryList = (props) => {
  const renderedList = props.industries.map((industry) => {
    return (
      <IndustryItem
        key={industry.sic_code}
        industry={industry}
        onSelectForCart={props.onSelectForCart}
      />
    );
  });

  if (renderedList.length != 0) {
    return <div>{renderedList}</div>;
  } else {
    return <div>Please check your spelling</div>;
  }
};

export default IndustryList;
