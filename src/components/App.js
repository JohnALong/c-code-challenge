import React from "react";
import IndustryList from "./IndustryList";
import SelectedIndustries from "./SelectedIndustries";
import SearchBar from "./SearchBar";
import industries from "../apis/cAPI";
import { Container, Col, Row } from "react-bootstrap";

class App extends React.Component {
  state = { industries: [] };

  onLoad = async () => {
    const response = await industries.get();
    // console.log("response", response.data);
    this.setState({ industries: response.data });
  };

  componentDidMount() {
    this.onLoad();
  }

  onTermSubmit = (term) => {
    console.log("term", term);
  };

  render() {
    return (
      <Container>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <Row>
          <Col>
            <IndustryList industries={this.state.industries} />
          </Col>
          <Col>
            <SelectedIndustries />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
