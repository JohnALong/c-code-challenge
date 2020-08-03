import React from "react";
import IndustryList from "./IndustryList";
import SelectedIndustriesList from "./SelectedIndustriesList";
import SearchBar from "./SearchBar";
import industries from "../apis/cAPI";
import { Container, Col, Row } from "react-bootstrap";

class App extends React.Component {
  state = { industries: [], selectedIndustries: [] };

  onLoad = async () => {
    const response = await industries.get();
    this.setState({ industries: response.data });
  };

  componentDidMount() {
    this.onLoad();
  }

  onTermSubmit = async (term, response) => {
    const newFetch = await industries.get();

    const firstFilteredList = newFetch.data.filter((data) => {
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === true) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      } else if (isNaN(term) === false) {
        return data.sic_code.toString().includes(term);
      } else {
        // console.log("in the else 1");
        return <div>Please Check Your Spelling</div>;
      }
    });
    this.setState({
      industries: firstFilteredList,
    });
  };

  onSicTwoSubmit = async (term, response) => {
    const newFetch = await industries.get();

    const secondFilteredList = newFetch.data.filter((data) => {
      //   console.log("data", data.sic_code);
      //   console.log("data to string test", data.sic_code.toString().slice(1, 2));

      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        // console.log("it's a number", term);
        if (term === data.sic_code.toString().slice(1, 2)) {
          return data.sic_code;
        }
      } else {
        // console.log("in the else 2");
        return <div>Please enter a single digit search parameter</div>;
      }
    });
    this.setState({
      industries: secondFilteredList,
    });
  };

  onSicThreeSubmit = async (term, response) => {
    const newFetch = await industries.get();

    const thirdFilteredList = newFetch.data.filter((data) => {
      //   console.log("data", data.sic_code);
      //   console.log("data to string test", data.sic_code.toString().slice(1, 2));

      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        // console.log("it's a number", term);
        if (term === data.sic_code.toString().slice(2, 3)) {
          //   console.log("test 3rd box", data.sic_code.toString().slice(2, 3));
          return data.sic_code;
        }
      } else {
        // console.log("in the else 3");
        return <div>Please enter a single digit search parameter</div>;
      }
    });
    this.setState({
      industries: thirdFilteredList,
    });
  };

  onSelectForCart = (data) => {
    this.setState((state) => {
      //   console.log("state value", data);
      const selectedIndustries = state.selectedIndustries.concat(data);
      return {
        selectedIndustries,
      };
    });
    // console.log("clicked a div", data);
    // this.setState({ selectedIndustries: data });
    // console.log("sel ind test", this.state.selectedIndustries);
    // console.log("test state", this.state);
  };

  render() {
    // console.log("render test", this.state.selectedIndustries);
    return (
      <Container>
        <SearchBar
          onTermSubmit={this.onTermSubmit}
          onSicTwoSubmit={this.onSicTwoSubmit}
          onSicThreeSubmit={this.onSicThreeSubmit}
        />
        <Row>
          <Col>
            <IndustryList
              onSelectForCart={this.onSelectForCart}
              industries={this.state.industries}
            />
          </Col>
          <Col>
            <SelectedIndustriesList
              selectedIndustries={this.state.selectedIndustries}
              onSelectForCart={this.onSelectForCart}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
