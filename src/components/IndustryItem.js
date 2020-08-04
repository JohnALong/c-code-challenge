import React from "react";
import { Card } from "react-bootstrap";

const IndustryItem = ({ industry, onSelectForCart }) => {
  return (
    <Card onClick={() => onSelectForCart(industry)}>
      <Card.Body>Title: {industry.title}</Card.Body>
      <Card.Body>Sic_Code: {industry.sic_code}</Card.Body>
    </Card>
  );
};

export default IndustryItem;
