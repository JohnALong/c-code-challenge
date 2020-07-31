import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFirstSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFirstSearchSubmit}>
        <label>Key Word Search</label>
        <input onChange={this.onInputChange}></input>
      </form>
    );
  }
}

export default SearchBar;
