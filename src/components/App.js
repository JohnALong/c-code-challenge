import React from "react";
import IndustryList from "./IndustryList";
import SelectedIndustries from "./SelectedIndustries";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <IndustryList />
        <SelectedIndustries />
      </div>
    );
  }
}

export default App;
