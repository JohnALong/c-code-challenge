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
    this.setState({ industries: response.data });
  };

  componentDidMount() {
    this.onLoad();
  }

  onTermSubmit = async (term, response) => {
    const newFetch = await industries.get();
    const testString = newFetch.data[0].sic_code.toString();

    const filteredList = newFetch.data.filter((data) => {
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === true) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      } else if (isNaN(term) === false) {
        return data.sic_code.toString().includes(term);
      } else {
        return <div>Please Check Your Spelling</div>;
      }
    });
    this.setState({
      industries: filteredList,
    });
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
