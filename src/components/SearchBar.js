import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    console.log("props in searchbar", this.props);
    return (
      <form onSubmit={this.onSearchSubmit}>
        <label>Key Word Search</label>
        <input onChange={this.onInputChange}></input>
      </form>
    );
  }
}

export default SearchBar;
