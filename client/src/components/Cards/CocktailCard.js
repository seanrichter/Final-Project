import React, { Component } from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import API from "../../utils/API";
import "./Cards.css";

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
      <CardDeck className="CardDeck">
        <Card className="cocktail">
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
            alt="Card image cap"
          />
          <CardHeader>Have a cocktail!</CardHeader>
          <CardBody
            inverse
            style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
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
            <Button>Want a different cocktail?</Button>
          </CardBody>
        </Card>

        <Card className="recipe">
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80"
            alt="Card image cap"
          />
          <CardHeader>How about a nice meal!</CardHeader>
          <CardBody
            inverse
            style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
          >
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Want a different Recipe?</Button>
          </CardBody>
        </Card>

        <Card className="movie">
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80"
            alt="Card image cap"
          />
          <CardHeader>Let us choose a random movie for you?</CardHeader>
          <CardBody
            inverse
            style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
          >
            <CardTitle>Card title</CardTitle>

            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Different Movie?</Button>
          </CardBody>
        </Card>
      </CardDeck>
    ) : (
      <div>still loading...</div>
    );
  }
}
