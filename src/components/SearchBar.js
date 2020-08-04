import React from "react";
import { Container, Row, Form } from "react-bootstrap";

class SearchBar extends React.Component {
  state = { term: "" };

  // handle input data
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  // function to handle callback for term submit first search box
  onFirstSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      this.props.onTermSubmit(this.state.term);
    }
  };

  // function to handle callbabck for 2nd digit sic_code search 2nd search box
  onSecondSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.preventDefault();
    } else {
      this.props.onSicTwoSubmit(this.state.term);
    }
  };

  // function to handle callbabck for 3rd digit sic_code search 3rd search box
  onThirdSearchSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.preventDefault();
    } else {
      this.props.onSicThreeSubmit(this.state.term);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Form onSubmit={this.onFirstSearchSubmit}>
            <Form.Label>Title/Sic_Code Search</Form.Label>
            <Form.Control onChange={this.onInputChange}></Form.Control>
          </Form>
          <Form onSubmit={this.onSecondSearchSubmit}>
            <Form.Label>Code (2nd digit) Search</Form.Label>
            <Form.Control onChange={this.onInputChange}></Form.Control>
          </Form>
          <Form onSubmit={this.onThirdSearchSubmit}>
            <Form.Label>Code (3rd digit) Search</Form.Label>
            <Form.Control onChange={this.onInputChange}></Form.Control>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
