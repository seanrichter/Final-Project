import React, { Component } from "react";
import {
  Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import API from "../../utils/API";

export default class CocktailCard extends Component {
  state = {
    cocktail: {}
  };

  componentDidMount() {
    API.getRandomCocktail()
      .then(res => {
        this.setState({ cocktail: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    return this.state.cocktail.name ? (
      <Col sm="6">
      <Card>
        <CardHeader>Enjoy with one of these!</CardHeader>
        <CardBody inverse style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
          <CardTitle>{this.state.cocktail.name}</CardTitle>
          <CardText>
            Glass: {this.state.cocktail.glass}
            <br />
          </CardText>

          <div>Ingredients:</div>
          <ul>
            {this.state.cocktail.ingredients.map(ing => (
              <li key={ing.key}>
                {ing.ingredient} - {ing.measure ? ing.measure : ""}
              </li>
            ))}
          </ul>
          <CardText>{this.state.cocktail.instructions}</CardText>
        </CardBody>
      </Card>
      </Col>
    ) : (
      <div>still loading...</div>
    );
  }
}
