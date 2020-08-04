import React from "react";
import { Card } from "react-bootstrap";

const SelectedIndustryItem = ({ selectedIndustries, onRemoveFromCart }) => {
  return (
    <Card onClick={() => onRemoveFromCart(selectedIndustries)}>
      <Card.Body>Title: {selectedIndustries.title}</Card.Body>
      <Card.Body>Sic_Code: {selectedIndustries.sic_code}</Card.Body>
    </Card>
  );
};

export default SelectedIndustryItem;
