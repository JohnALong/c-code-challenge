import React from "react";
import IndustryItem from "./IndustryItem";

const IndustryList = (props) => {
  const renderedList = props.industries.map((industry) => {
    return <IndustryItem industry={industry} />;
  });
  //   console.log("list props2", props);
  console.log("renderedList in list", renderedList);
  if (renderedList.length != 0) {
    return <div>{renderedList}</div>;
  } else {
    return <div>Please check your spelling</div>;
  }
};

export default IndustryList;
