import React from "react";
import SelectedIndustryItem from "./SelectedIndustryItem";

const SelectedIndustriesList = (props) => {
  // console.log("props from sel ind list", props);
  const renderedList = props.selectedIndustries.map((industry) => {
    return (
      <SelectedIndustryItem
        selectedIndustries={industry}
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
