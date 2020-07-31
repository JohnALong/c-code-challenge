import React from "react";
import { Container, Row } from "react-bootstrap";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFirstSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.preventDefault();
    } else {
      console.log("you're in the 1st search submit");
      this.props.onTermSubmit(this.state.term);
    }
  };

  onSecondSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.preventDefault();
    } else {
      console.log("you're in the 2nd search submit");
      this.props.onSicTwoSubmit(this.state.term);
    }
  };

  onThirdSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.preventDefault();
    } else {
      console.log("you're in the 3rd search submit");
      this.props.onSicThreeSubmit(this.state.term);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <form onSubmit={this.onFirstSearchSubmit}>
            <label>Key Word Search</label>
            <input onChange={this.onInputChange}></input>
          </form>
          <form onSubmit={this.onSecondSearchSubmit}>
            <label>Code (2nd digit) Search</label>
            <input onChange={this.onInputChange}></input>
          </form>
          <form onSubmit={this.onThirdSearchSubmit}>
            <label>Code (3rd digit) Search</label>
            <input onChange={this.onInputChange}></input>
          </form>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
