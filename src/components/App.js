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

  onTermSubmit = async (term, response) => {
    const newFetch = await industries.get();
    console.log("fetch test", newFetch.data);
    // console.log("term", term);
    // console.log("test", this.state.industries);
    const filteredList = newFetch.data.filter((str) => {
      //   console.log("str", str.title);
      if (term === "") {
        this.onLoad();
      } else if (term !== "" && Number.isInteger(term) != true) {
        return str.title.toLowerCase().includes(term.toLowerCase());
      } else {
        return <div>Please Check Your Spelling</div>;
      }
    });
    console.log("filteredList", filteredList);
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
