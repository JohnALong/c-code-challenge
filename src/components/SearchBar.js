import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    console.log("test", e.target.value);
  };
  render() {
    return <input onChange={this.onInputChange}></input>;
  }
}

export default SearchBar;
