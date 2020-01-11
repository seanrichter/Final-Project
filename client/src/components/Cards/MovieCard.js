import React, { Component } from "react";
import {
  Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

const MovieCard = (props) => {
  return (
    <div>
      <Col sm="6">
      <Card>
      <CardHeader>Enjoy with one of these!</CardHeader>
        <CardBody inverse style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </div>
  );
};

export default MovieCard;