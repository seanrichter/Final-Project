import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import API from "../../utils/API";
import "./Cards.css";

export default class CocktailCard extends Component {
  state = {
    cocktail: {}
  };

  componentDidMount() {
    this.getCocktail();
  }

  getCocktail = () => {
    API.getRandomCocktail()
      .then(res => {
        this.setState({ cocktail: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    return this.state.cocktail.name ? (
      <Card className="cocktail">
        <CardImg
          top
          width="100%"
          src={this.state.cocktail.image}
          alt="Card image cap"
        />
        <CardHeader>Have a cocktail!</CardHeader>
        <CardBody
          inverse
          style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
        >
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
          <Button onClick={this.getCocktail}>Want a different cocktail?</Button>
        </CardBody>
      </Card>
    ) : (
      <div>still loading...</div>
    );
  }
}
