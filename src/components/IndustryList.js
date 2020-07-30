import React from "react";
import IndustryItem from "./IndustryItem";
import { render } from "@testing-library/react";

const IndustryList = (props) => {
  const renderedList = props.industries.map((industry) => {
    return <IndustryItem industry={industry} />;
  });
  //   console.log("list props2", props);
  return <div>{renderedList}</div>;
};

export default IndustryList;
