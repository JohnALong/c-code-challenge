import React from "react";
import SelectedIndustryItem from "./SelectedIndustryItem";

const SelectedIndustriesList = (props) => {
  console.log("props in sel ind list", props.selectedIndustries);
  return <SelectedIndustryItem selectedIndustries={props.selectedIndustries} />;
};

// const SelectedIndustriesList = (props) => {
//   console.log("props sel ind", props);
//   if (props.selectedIndustries.length != 0) {
//     const renderedList = props.industries.map((industry) => {
//       return <SelectedIndustryItem industry={industry} />;
//     });
//   } else {
//     return <div>This will be the shopping cart</div>;
//   }
// };

export default SelectedIndustriesList;
