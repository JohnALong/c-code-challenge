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
      } else if (
        isNaN(term) === true &&
        data.title.toLowerCase().includes(term.toLowerCase()) === true
      ) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      } else if (isNaN(term) === false) {
        return data.sic_code.toString().includes(term);
      } else {
        return null;
      }
    });
    this.setState({
      industries: firstFilteredList,
    });
  };

  onSicTwoSubmit = async (term, response) => {
    const newFetch = await industries.get();

    const secondFilteredList = newFetch.data.filter((data) => {
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        if (term === data.sic_code.toString().slice(1, 2)) {
          return data.sic_code;
        }
      } else {
        return null;
      }
    });
    this.setState({
      industries: secondFilteredList,
    });
  };

  onSicThreeSubmit = async (term, response) => {
    const newFetch = await industries.get();

    const thirdFilteredList = newFetch.data.filter((data) => {
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        if (term === data.sic_code.toString().slice(2, 3)) {
          return data.sic_code;
        }
      } else {
        return null;
      }
    });
    this.setState({
      industries: thirdFilteredList,
    });
  };

  onSelectForCart = (data) => {
    this.setState((state) => {
      const selectedIndustries = state.selectedIndustries.concat(data);
      return {
        selectedIndustries,
      };
    });
  };

  onRemoveFromCart = (data) => {
    let currentState = this.state.selectedIndustries;
    let index = currentState
      .map(function (e) {
        return e.title;
      })
      .indexOf(data.title);

    let currentStateArray = [...this.state.selectedIndustries];
    if (index !== -1) {
      currentStateArray.splice(index, 1);
      this.setState({ selectedIndustries: currentStateArray });
    }
  };

  render() {
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
              onRemoveFromCart={this.onRemoveFromCart}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
