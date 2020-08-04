import React from "react";
import IndustryList from "./IndustryList";
import SelectedIndustriesList from "./SelectedIndustriesList";
import SearchBar from "./SearchBar";
import industries from "../apis/cAPI";
import { Container, Col, Row } from "react-bootstrap";

class App extends React.Component {
  state = {
    industries: [],
    selectedIndustries: [],
  };

  //   ensures list of industries loads on page render
  onLoad = async () => {
    const response = await industries.get();
    this.setState({ industries: response.data });
  };

  componentDidMount() {
    this.onLoad();
  }

  // renders searched industries to list component by either title or sic_code
  onTermSubmit = async (term) => {
    const newFetch = await industries.get();

    const firstFilteredList = newFetch.data.filter((data) => {
      // if search box empty and enter hit, renders entire list
      if (term === "") {
        this.onLoad();
      } else if (
        //   render search result of title to industries - not case sensitive
        isNaN(term) === true &&
        data.title.toLowerCase().includes(term.toLowerCase()) === true
      ) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      } else if (isNaN(term) === false) {
        //   render search result of sic_code to industries
        return data.sic_code.toString().includes(term);
      } else {
        //   error control for no match found
        return null;
      }
    });
    this.setState({
      industries: firstFilteredList,
    });
  };

  onSicTwoSubmit = async (term) => {
    const newFetch = await industries.get();

    const secondFilteredList = newFetch.data.filter((data) => {
      // if search box empty and enter hit, renders entire list
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        //   convert sic_code to string to match to term by 2nd digit of sic_code
        if (term === data.sic_code.toString().slice(1, 2)) {
          return data.sic_code;
        }
      } else {
        //   error control for no match found
        return null;
      }
    });
    this.setState({
      industries: secondFilteredList,
    });
  };

  onSicThreeSubmit = async (term) => {
    const newFetch = await industries.get();

    const thirdFilteredList = newFetch.data.filter((data) => {
      // if search box empty and enter hit, renders entire list
      if (term === "") {
        this.onLoad();
      } else if (isNaN(term) === false) {
        //   convert sic_code to string to match to term by 3rd digit of sic_code
        if (term === data.sic_code.toString().slice(2, 3)) {
          return data.sic_code;
        }
      } else {
        //   error control for no match found
        return null;
      }
    });
    this.setState({
      industries: thirdFilteredList,
    });
  };

  onSelectForCart = (data) => {
    //   conditional to avoid duplicate saves to cart
    if (!this.state.selectedIndustries.includes(data)) {
      this.setState((state) => {
        const selectedIndustries = state.selectedIndustries.concat(data);
        return {
          selectedIndustries,
        };
      });
    }
  };

  onRemoveFromCart = (data) => {
    //   variable to hold current data to allow search for index position of selected item
    let currentState = this.state.selectedIndustries;
    // variable to hold index position of clicked item
    let index = currentState
      .map(function (e) {
        return e.title;
      })
      .indexOf(data.title);

    //   variable to hold array of state objects
    let currentStateArray = [...this.state.selectedIndustries];
    // conditional to ensure a match is found
    if (index !== -1) {
      // remove item and re render state
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
              testSelectForCart={this.testSelectForCart}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
